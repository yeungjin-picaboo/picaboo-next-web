import Loading from '@/components/atoms/Loading/Loading';
import Layout from '@/components/blocks/Layout/Layout';
import {
  StPictureList,
  StPictureListContainer,
} from '@/styles/components/StPictureList.styled';
import { useEffect, useState } from 'react';
import { fetchNftsFn } from '@/apis/nftsApi';
import useWeb3 from '@/hooks/useWeb3';
import PictureItem from '@/components/atoms/PictureItem/PictureItem';
import NftListHeader from '@/components/blocks/NftListHeader/NftListHeader';

export default function MarketplacePage() {
  const [isLoading, setIsLoading] = useState(false);
  const [listOfUrl, setListOfUrl] = useState<any[]>([]);
  const { myContract } = useWeb3();

  useEffect(() => {
    setIsLoading(true);
    if (myContract !== null) {
      (async () => {
        const urlList = await fetchNftsFn(myContract);
        setListOfUrl(urlList);
        setIsLoading(false);
      })();
    }
  }, [myContract]);

  return (
    <Layout type='default'>
      {isLoading && <Loading message='Loading nft pictures' />}
      {!isLoading && (
        <StPictureListContainer>
          <NftListHeader
            myContract={myContract}
            numOfItem={listOfUrl.length}
            setListOfUrl={setListOfUrl}
          />
          <StPictureList>
            {[...listOfUrl].reverse().map(el => {
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
        </StPictureListContainer>
      )}
    </Layout>
  );
}
