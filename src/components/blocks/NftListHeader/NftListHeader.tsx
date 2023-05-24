import {
  StNumOfResults,
  StSearchInput,
  StSearchForm,
  StTitle,
  StToolkitContainer,
  StSearchBtn,
  StToolBox,
  StTimeBox,
  StTime,
} from './NftListHeader.styled';
import {
  Dispatch,
  FormEvent,
  MutableRefObject,
  SetStateAction,
  useEffect,
} from 'react';
import { PhotoSearch, Search } from 'tabler-icons-react';
import EmotionDropdown from '../EmotionDropdown/EmotionDropdown';

interface INftListHeader {
  numOfItem: number;
  selectedTime: string;
  selectedEmotion: string;
  searchInputRef: MutableRefObject<HTMLInputElement>;
  setIsPending: Dispatch<SetStateAction<boolean>>;
  setSelectedTime: Dispatch<SetStateAction<string>>;
  setSelectedEmotion: Dispatch<SetStateAction<string>>;
}

export default function NftListHeader({
  numOfItem,
  selectedTime,
  selectedEmotion,
  searchInputRef,
  setIsPending,
  setSelectedTime,
  setSelectedEmotion,
}: INftListHeader) {
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsPending(true);
  };

  return (
    <div>
      <StTitle>NFT Marketplace</StTitle>
      <StToolkitContainer>
        <StToolBox>
          <EmotionDropdown
            initialValue='All categories'
            hasInitialValue={true}
            emotion={selectedEmotion}
            setEmotion={setSelectedEmotion}
          />
          <StSearchForm onSubmit={handleSubmit}>
            <Search />
            <StSearchInput
              ref={searchInputRef}
              placeholder='Search by user address or nickname'
            />
            <StSearchBtn>
              <PhotoSearch />
            </StSearchBtn>
          </StSearchForm>
          <StTimeBox>
            {['1d', '7d', '30d', 'All'].map(str => {
              return (
                <StTime
                  key={str}
                  onClick={() => setSelectedTime(str)}
                  isSelected={str === selectedTime}
                >
                  {str}
                </StTime>
              );
            })}
          </StTimeBox>
        </StToolBox>
        <StNumOfResults>
          <span>{numOfItem}</span> results
        </StNumOfResults>
      </StToolkitContainer>
    </div>
  );
}
