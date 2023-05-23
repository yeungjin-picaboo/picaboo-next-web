import { Search } from 'react-feather';
import {
  StNftListHeader,
  StNumOfResults,
  StSearchContainer,
  StSearchInput,
  StSearchForm,
  StTitle,
} from './NftListHeader.styled';
import { Dispatch, FormEvent, SetStateAction, useRef } from 'react';

interface INftListHeader {
  myContract: any;
  numOfItem: number;
  setNftList: Dispatch<SetStateAction<any[]>>;
}

export default function NftListHeader({
  myContract,
  numOfItem,
  setNftList,
}: INftListHeader) {
  const searchInputRef = useRef<HTMLInputElement | null>(null);
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const urlList = await myContract.getListHolder(
      searchInputRef.current.value
    );
    setNftList(urlList);
  };

  return (
    <StNftListHeader>
      <StTitle>NFT Marketplace</StTitle>
      <StSearchContainer>
        <StNumOfResults>
          <span>{numOfItem}</span> results
        </StNumOfResults>
        <StSearchForm onSubmit={handleSubmit}>
          <Search color={'#bababa'} />
          <StSearchInput ref={searchInputRef} placeholder='Search accounts' />
        </StSearchForm>
      </StSearchContainer>
    </StNftListHeader>
  );
}
