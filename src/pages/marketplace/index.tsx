import Loading from '@/components/atoms/Loading/Loading';
import Layout from '@/components/blocks/Layout/Layout';
import {
  StPictureList,
  StPictureListContainer,
} from '@/styles/components/StPictureList.styled';
import { useEffect, useRef, useState } from 'react';
import useWeb3 from '@/hooks/useWeb3';
import NftListHeader from '@/components/blocks/NftListHeader/NftListHeader';
import Pagination from '@/components/blocks/Pagination/Pagination';
import Link from 'next/link';
import Image from 'next/image';
import {
  StNftMouseover,
  StNftItem,
  StMouseoverFooter,
  StEtherPrice,
  StPrice,
} from '@/styles/components/StNftItem';
import { CurrencyEthereum } from 'tabler-icons-react';
import axios from 'axios';
import StEtherIcon from '@/styles/components/StEtherIcon.styled';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';

const ITEMS_PER_PAGE = 16; // 페이지 당 아이템 개수

export default function MarketplacePage() {
  const { t } = useTranslation('marketplace');
  const [currentPage, setCurrentPage] = useState(1); // 현재 페이지 번호
  const [isPending, setIsPending] = useState(false);
  const [nftList, setNftList] = useState<any[]>([]);
  const [currentNftList, setCurrentNftList] = useState<any[]>([]);
  const [numOfItem, setNumOfItem] = useState(0);
  const { myContract } = useWeb3();
  const [selectedEmotion, setSelectedEmotion] = useState(t('all_categories'));
  const [selectedTime, setSelectedTime] = useState(t('all'));
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [exchangeRate, setExchangeRate] = useState<number>(0);
  const searchInputRef = useRef<HTMLInputElement | null>(null);
  const router = useRouter();

  // 마우스 오버 이벤트 핸들러
  const handleMouseOver = index => {
    setHoveredIndex(index);
  };

  // 마우스 아웃 이벤트 핸들러
  const handleMouseOut = () => {
    setHoveredIndex(null);
  };

  useEffect(() => {
    setSelectedEmotion(t('all_categories'));
  }, [router.locale, t]);

  useEffect(() => {
    (async function getEthereumExchangeRate() {
      try {
        const response = await axios.get(
          'https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=usd'
        );
        const data = response.data;
        if (data && data.ethereum && data.ethereum.usd) {
          setExchangeRate(data.ethereum.usd);
        }
      } catch (error) {
        console.log('Error fetching Ethereum exchange rate:', error);
      }
    })();
  }, []);

  useEffect(() => {
    setIsPending(true);
    if (myContract !== null) {
      (async () => {
        let address = searchInputRef.current.value;

        //이것은 닉네임 설정하기 위한 코드
        //if (address != "") {
        // await myContract.setNickName(address, {
        //    from: account,
        //  });
        //} else {
        //  address = "0x0000000000000000000000000000000000000000";
        //}
        if (address == '') {
          address = '0x0000000000000000000000000000000000000000';
        }

        try {
          await myContract.checkAddress(address);
        } catch {
          address = await myContract.convertNickToAddr(address);
        }

        let urlList = [];
        // console.log(
        //   selectedEmotion,
        //   t('all_categories'),
        //   selectedEmotion == t('all_categories')
        // );
        if (selectedEmotion == t('all_categories')) {
          urlList = await myContract.getList('all', address);
        } else {
          urlList = await myContract.getList(selectedEmotion, address);
        }
        setNftList(urlList);
        searchInputRef.current.value = '';
      })();
    }
    setIsPending(false);
  }, [selectedEmotion, isPending, myContract]);

  useEffect(() => {
    let temp = nftList;
    if (selectedTime !== t('all')) {
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      today.setDate(today.getDate() - Number(selectedTime.slice(0, -1)));
      temp = nftList.filter(item => {
        return new Date(item.released) > today;
      });
    }
    setNumOfItem(temp.length);
    setCurrentNftList(() => [
      ...temp
        .slice((currentPage - 1) * ITEMS_PER_PAGE, currentPage * ITEMS_PER_PAGE)
        .reverse(),
    ]);
  }, [currentPage, selectedTime, nftList]);

  return (
    <Layout type='default'>
      <StPictureListContainer>
        <NftListHeader
          selectedEmotion={selectedEmotion}
          numOfItem={numOfItem}
          selectedTime={selectedTime}
          searchInputRef={searchInputRef}
          setIsPending={setIsPending}
          setSelectedEmotion={setSelectedEmotion}
          setSelectedTime={setSelectedTime}
        />
        {isPending && <Loading message='Loading nft pictures' />}
        {!isPending && (
          <>
            <StPictureList>
              {currentNftList.map((el, idx) => {
                return (
                  el.tokenId !== '0' &&
                  el.tokenURI !== undefined && (
                    <Link href={`/marketplace/${el.tokenId}`} key={el.tokenId}>
                      <StNftItem
                        onMouseEnter={() => handleMouseOver(idx)}
                        onMouseLeave={handleMouseOut}
                      >
                        {hoveredIndex === idx && (
                          <StNftMouseover>
                            <StEtherIcon>
                              <CurrencyEthereum
                                strokeWidth={1.5}
                                width={25.5}
                                height={24}
                              />
                            </StEtherIcon>
                            <StMouseoverFooter>
                              <StEtherPrice>{el.price} ETH</StEtherPrice>
                              <StPrice>
                                ${(el.price * exchangeRate).toFixed(2)}
                              </StPrice>
                            </StMouseoverFooter>
                          </StNftMouseover>
                        )}
                        <Image src={el.tokenURI} sizes='268px' fill alt='' />
                      </StNftItem>
                    </Link>
                  )
                );
              })}
            </StPictureList>
            <Pagination
              ITEMS_PER_PAGE={ITEMS_PER_PAGE}
              currentPage={currentPage}
              numOfToken={nftList.length}
              setCurrentPage={setCurrentPage}
            />
          </>
        )}
      </StPictureListContainer>
    </Layout>
  );
}

export const getStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale, [
        'header',
        'wallet-modal',
        'marketplace',
      ])),
      locale,
    },
  };
};
