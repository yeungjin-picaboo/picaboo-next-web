import Loading from '@/components/atoms/Loading/Loading';
import Layout from '@/components/blocks/Layout/Layout';
import {
  StPictureList,
  StPictureListContainer,
} from '@/styles/components/StPictureList.styled';
import { useEffect, useState } from 'react';
import { fetchNftsFn, fetchNumOfToken } from '@/apis/nftsApi';
import useWeb3 from '@/hooks/useWeb3';
import PictureItem from '@/components/atoms/PictureItem/PictureItem';

export default function MarketplacePage() {
  const [isLoading, setIsLoading] = useState(false);
  const [listOfUrl, setListOfUrl] = useState<any[]>([]);
  const { myContract } = useWeb3();
  const [numOfToken, setNumOfToken] = useState<any>();
  const [start, setStart] = useState<number>(1);
  const numOfPictures = 9;

  useEffect(() => {
    setIsLoading(true);
    if (myContract !== null) {
      (async () => {
        const urlList = await fetchNftsFn(myContract, start, numOfPictures);
        setListOfUrl(urlList);
        setNumOfToken(fetchNumOfToken(myContract));
        setIsLoading(false);
      })();
    }
  }, [start, myContract]);

  return (
    <Layout type='default'>
      {isLoading && <Loading message='Loading nft pictures' />}
      {!isLoading && (
        <StPictureListContainer>
          <StPictureList>
            {listOfUrl.map(el => {
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
