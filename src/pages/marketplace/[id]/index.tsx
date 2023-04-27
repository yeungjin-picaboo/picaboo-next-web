import Loading from '@/components/atoms/Loading/Loading';
import Layout from '@/components/blocks/Layout/Layout';
import useWeb3 from '@/hooks/useWeb3';
import StDiaryPictureBox from '@/styles/components/StDiaryPictureBox';
import {
  StBuyBtn,
  StEth,
  StFieldset,
  StLabel,
  StNftContainer,
  StNftInfo,
  StValue,
} from '@/styles/components/StNftDetail.styled';
import INfts from '@/types/INft';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Web3 from 'web3';

export default function NftDetailPage() {
  const { query } = useRouter();
  const { myContract, account } = useWeb3();
  const [nftInfo, setNftInfo] = useState<INfts | null>(null);

  useEffect(() => {
    (async () => {
      if (myContract !== null) {
        const nft = await myContract.getDetailOfNft(Number(query.id));
        const { imageName, owner, price, released, tokenId, tokenURI } = nft;
        setNftInfo({ imageName, owner, price, released, tokenId, tokenURI });
      }
    })();
  }, [myContract]);

  if (nftInfo === null) {
    return <Loading message='Loading NFT...' />;
  }

  const { imageName, owner, price, released, tokenId, tokenURI } = nftInfo;
  return (
    <Layout type='small'>
      <StNftContainer>
        <StDiaryPictureBox>
          <Image src={tokenURI} alt='' width={400} height={400} />
        </StDiaryPictureBox>
        <StNftInfo>
          <StFieldset>
            <StLabel>Image Name : </StLabel>
            <StValue>{imageName}</StValue>
          </StFieldset>
          <StFieldset>
            <StLabel>Owner : </StLabel>
            <StValue>{owner}</StValue>
          </StFieldset>
          <StFieldset>
            <StLabel>Price : </StLabel>
            <StValue>{price}</StValue>
            <StEth>ETH</StEth>
          </StFieldset>
          <StFieldset>
            <StLabel>Released : </StLabel>
            <StValue>{released}</StValue>
          </StFieldset>
        </StNftInfo>
        <StBuyBtn
          onClick={async () => {
            if (account == null) {
              alert('메타마스크에 로그인하세요');
            } else if (account.toUpperCase() === nftInfo.owner.toUpperCase()) {
              alert('이미 소유한것은 구매할 수 없습니다.');
            } else {
              // 산다.
              await myContract.buyNFT(Number(tokenId), {
                from: account,
                value: Web3.utils.toWei(`${price}`, 'ether'),
                gas: 1000000,
              });
              const nft = await myContract.getDetailOfNft(Number(query.id));
              setNftInfo({
                imageName: nft.imageName,
                owner: nft.owner,
                price: nft.price,
                released: nft.released,
                tokenId: nft.tokenId,
                tokenURI: nft.tokenURI,
              });
              alert('구매 완료');
            }
          }}
        >
          Buy now
        </StBuyBtn>
      </StNftContainer>
    </Layout>
  );
}
