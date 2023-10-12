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

const ITEMS_PER_PAGE = 16; // 페이지 당 아이템 개수

export default function MarketplacePage() {
  const [currentPage, setCurrentPage] = useState(1); // 현재 페이지 번호
  const [isPending, setIsPending] = useState(false);
  const [nftList, setNftList] = useState<any[]>([]);
  const [currentNftList, setCurrentNftList] = useState<any[]>([]);
  const [numOfItem, setNumOfItem] = useState(0);
  const { myContract } = useWeb3();
  const [selectedEmotion, setSelectedEmotion] = useState('All categories');
  const [selectedTime, setSelectedTime] = useState('All');
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [exchangeRate, setExchangeRate] = useState<number>(0);
  const searchInputRef = useRef<HTMLInputElement | null>(null);

  // 마우스 오버 이벤트 핸들러
  const handleMouseOver = index => {
    setHoveredIndex(index);
  };

  // 마우스 아웃 이벤트 핸들러
  const handleMouseOut = () => {
    setHoveredIndex(null);
  };

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
        try {
          await myContract.checkAddress(address);
        } catch {
          address = await myContract.convertNickToAddr(address);
        }
        const urlList = await myContract.getList(selectedEmotion, address);
        setNftList([...urlList].reverse());
        searchInputRef.current.value = '';
      })();
    }
    setIsPending(false);
  }, [selectedEmotion, isPending, myContract]);

  useEffect(() => {
    let temp = nftList;
    if (selectedTime !== 'All') {
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      today.setDate(today.getDate() - Number(selectedTime.slice(0, -1)));
      temp = nftList.filter(item => {
        return new Date(item.released) > today;
      });
    }
    setNumOfItem(temp.length);
    setCurrentNftList(() => [
      ...temp.slice(
        (currentPage - 1) * ITEMS_PER_PAGE,
        currentPage * ITEMS_PER_PAGE
      ),
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
                              <StPrice>${el.price * exchangeRate}</StPrice>
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
