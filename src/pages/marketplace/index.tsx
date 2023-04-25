import Loading from '@/components/atoms/Loading/Loading';
import Layout from '@/components/blocks/Layout/Layout';
import {
  StPictureItem,
  StPictureList,
  StPictureListContainer,
} from '@/styles/components/StPictureList.styled';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { fetchNftsFn, fetchNumOfToken } from '@/apis/nftsApi';
import useWeb3 from '@/hooks/useWeb3';

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
                  <Link href={`/marketplace/${el.tokenId}`} key={el.tokenId}>
                    <StPictureItem>
                      <Image
                        src={el.tokenURI}
                        sizes='268px'
                        fill
                        priority
                        alt=''
                      />
                    </StPictureItem>
                  </Link>
                )
              );
            })}
          </StPictureList>
        </StPictureListContainer>
      )}
    </Layout>
  );
}
