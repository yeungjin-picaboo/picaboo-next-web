import Loading from '@/components/atoms/Loading/Loading';
import Layout from '@/components/blocks/Layout/Layout';
import useWeb3 from '@/hooks/useWeb3';
import StDiaryPictureBox from '@/styles/components/StDiaryPictureBox';
import StEtherIcon from '@/styles/components/StEtherIcon.styled';
import {
  StBoxTitle,
  StBuyBtn,
  StCreatedAt,
  StEtherPrice,
  StGrid,
  StGridLeft,
  StGridRight,
  StNftContainer,
  StNftDesc,
  StNftHeader,
  StNftInfo,
  StNftOwner,
  StNftTitle,
  StPrice,
  StPriceBox,
} from '@/styles/components/StNftDetail.styled';
import INfts from '@/types/INft';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { ArrowLeft } from 'react-feather';
import { CurrencyEthereum } from 'tabler-icons-react';
import Web3 from 'web3';
import dayjs from 'dayjs';
import 'dayjs/locale/es';
import axios from 'axios';
import moods from '@/data/moods';
import Comment from '@/components/blocks/Comment/Comment';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';

export default function NftDetailPage() {
  const { t } = useTranslation('nft-detail');
  const { query } = useRouter();
  const { myContract, account } = useWeb3();
  const [nftInfo, setNftInfo] = useState<INfts | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [exchangeRate, setExchangeRate] = useState<number>(0);
  const buy = async () => {
    if (account == null) {
      alert(t('account_alert'));
    } else if (account.toUpperCase() === nftInfo.owner.toUpperCase()) {
      alert(t('owner_alert'));
    } else {
      // 산다.
      await myContract.buyNFT(Number(nftInfo.tokenId), {
        from: account,
        value: Web3.utils.toWei(`${nftInfo.price}`, 'ether'),
        gas: 1000000,
      });
      const nft = await myContract.getDetailOfNft(Number(query.id));
      const nickname = await myContract.getNickName(nft.owner);
      setNftInfo({
        imageName: nft.imageName,
        owner: nft.owner,
        nickname,
        price: nft.price,
        released: nft.released,
        tokenId: nft.tokenId,
        tokenURI: nft.tokenURI,
        emotion: nft.emotion,
        description: nft.description,
      });
      alert(t('purchased_alert'));
    }
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
  }, [nftInfo]);

  useEffect(() => {
    setIsLoading(true);
    (async () => {
      if (myContract !== null) {
        const nft = await myContract.getDetailOfNft(Number(query.id));
        const nickname = await myContract.getNickName(nft.owner);
        const {
          imageName,
          owner,
          price,
          released,
          tokenId,
          tokenURI,
          emotion,
          description,
        } = nft;
        setNftInfo({
          imageName,
          owner,
          nickname,
          price,
          released,
          tokenId,
          tokenURI,
          emotion,
          description,
        });
      }
    })();
    setIsLoading(false);
  }, [myContract]);

  return (
    <Layout type='small'>
      {isLoading && <Loading message='Loading NFT...' />}
      {!isLoading && nftInfo !== null && (
        <StNftContainer>
          <StNftHeader>
            <Link href='/marketplace'>
              <ArrowLeft strokeWidth={1.5} />
            </Link>
          </StNftHeader>
          <StDiaryPictureBox>
            <StEtherIcon>
              <CurrencyEthereum strokeWidth={1.5} width={25.5} height={24} />
            </StEtherIcon>
            <Image src={nftInfo.tokenURI} alt='' width={400} height={400} />
          </StDiaryPictureBox>
          <StGrid>
            <StGridLeft>
              <StNftTitle>
                <>{moods.find(el => el.name === nftInfo?.emotion)?.icon}</>
                {nftInfo.imageName}
              </StNftTitle>
              <StNftInfo>
                <StNftOwner>
                  {t('owner_by')} &nbsp;<span>{nftInfo.nickname}</span>
                </StNftOwner>
                <StCreatedAt>
                  {dayjs(nftInfo.released)
                    .locale('en-us')
                    .format('dddd, MMMM D, YYYY')}
                </StCreatedAt>
              </StNftInfo>
              <StNftDesc>{nftInfo.description}</StNftDesc>
            </StGridLeft>
            <StGridRight>
              <StBoxTitle>{t('price')}</StBoxTitle>
              <StPriceBox>
                <StEtherPrice>{nftInfo.price} ETH</StEtherPrice>
                <StPrice>${nftInfo.price * exchangeRate}</StPrice>
              </StPriceBox>
              <StBuyBtn onClick={buy}>{t('buy_now')}</StBuyBtn>
            </StGridRight>
          </StGrid>
        </StNftContainer>
      )}
    </Layout>
  );
}

export const getServerSideProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale, [
        'header',
        'wallet-modal',
        'nft-detail',
      ])),
      locale,
    },
  };
};
