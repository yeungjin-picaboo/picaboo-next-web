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
import { useTranslation } from 'next-i18next';

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
  const { t } = useTranslation('marketplace');
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsPending(true);
  };

  return (
    <div>
      <StTitle>{t('title')}</StTitle>
      <StToolkitContainer>
        <StToolBox>
          <EmotionDropdown
            initialValue={t('all_categories')}
            hasInitialValue={true}
            emotion={selectedEmotion}
            setEmotion={setSelectedEmotion}
          />
          <StSearchForm onSubmit={handleSubmit}>
            <Search />
            <StSearchInput
              ref={searchInputRef}
              placeholder={t('search_placeholder')}
            />
            <StSearchBtn>
              <PhotoSearch />
            </StSearchBtn>
          </StSearchForm>
          <StTimeBox>
            {[t('1d'), t('7d'), t('30d'), t('all')].map(str => {
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
          <span>{numOfItem}</span> {t('results')}
        </StNumOfResults>
      </StToolkitContainer>
    </div>
  );
}
