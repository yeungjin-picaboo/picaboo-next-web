import Loading from '@/components/atoms/Loading/Loading';
import Layout from '@/components/blocks/Layout/Layout';
import {
  StPictureList,
  StPictureListContainer,
} from '@/styles/components/StPictureList.styled';
import { useEffect, useRef, useState } from 'react';
import useWeb3 from '@/hooks/useWeb3';
import PictureItem from '@/components/atoms/PictureItem/PictureItem';
import NftListHeader from '@/components/blocks/NftListHeader/NftListHeader';
import Pagination from '@/components/blocks/Pagination/Pagination';

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
  const searchInputRef = useRef<HTMLInputElement | null>(null);

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
        setNftList(urlList);
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
              {currentNftList.map(el => {
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
              numOfToken={nftList.length}
              setCurrentPage={setCurrentPage}
            />
          </>
        )}
      </StPictureListContainer>
    </Layout>
  );
}
