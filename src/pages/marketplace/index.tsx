import Loading from '@/components/atoms/Loading/Loading';
import Layout from '@/components/blocks/Layout/Layout';
import {
  StPictureList,
  StPictureListContainer,
} from '@/styles/components/StPictureList.styled';
import { useEffect, useState } from 'react';
import useWeb3 from '@/hooks/useWeb3';
import PictureItem from '@/components/atoms/PictureItem/PictureItem';
import NftListHeader from '@/components/blocks/NftListHeader/NftListHeader';
import Pagination from '@/components/blocks/Pagination/Pagination';

const ITEMS_PER_PAGE = 16; // 페이지 당 아이템 개수

export default function MarketplacePage() {
  const [currentPage, setCurrentPage] = useState(1); // 현재 페이지 번호
  const [isLoading, setIsLoading] = useState(false);
  const [nftList, setNftList] = useState<any[]>([]);
  const [numOfToken, setNumOfToken] = useState<number>(0);
  const { myContract } = useWeb3();

  useEffect(() => {
    setIsLoading(true);
    if (myContract !== null) {
      (async () => {
        const urlList = await myContract.getListShortNFT(
          ITEMS_PER_PAGE,
          currentPage
        );
        const result = await myContract.getNumOfToken();
        setNumOfToken(result.words[0]);
        setNftList(urlList);
        setIsLoading(false);
      })();
    }
  }, [currentPage, myContract]);

  return (
    <Layout type='default'>
      {isLoading && <Loading message='Loading nft pictures' />}
      {!isLoading && (
        <StPictureListContainer>
          <NftListHeader
            myContract={myContract}
            numOfItem={nftList.length}
            setNftList={setNftList}
          />
          <StPictureList>
            {[...nftList].map(el => {
              return (
                el.tokenId !== '0' &&
                el.tokenURI !== undefined && (
                  <PictureItem
                    key={el.tokenId}
                    link={`/marketplace/${el.tokenId}`}
                    id={el.tokenId}
                    src={el.tokenURI}
                  />
                )
              );
            })}
          </StPictureList>
          <Pagination
            ITEMS_PER_PAGE={ITEMS_PER_PAGE}
            currentPage={currentPage}
            numOfToken={numOfToken}
            setCurrentPage={setCurrentPage}
          />
        </StPictureListContainer>
      )}
    </Layout>
  );
}
