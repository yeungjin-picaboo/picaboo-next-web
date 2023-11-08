import useWeb3 from '@/hooks/useWeb3';
import { StModalOverlay } from '@/styles/components/StModalOverlay.styled';
import { FormEvent, useRef, useState } from 'react';
import {
  StCreateBtn,
  StDescTextarea,
  StFieldset,
  StGridBox,
  StLabel,
  StModal,
  StNameInput,
  StPriceInput,
  StPriceInputBox,
  StTitle,
} from './MintModal.styled';
import { X } from 'react-feather';
import Portal from '../Portal/Portal';
import { useRouter } from 'next/router';
import useTodayDate from '@/hooks/useTodayDate';
import MoodDropdown from '../EmotionDropdown/EmotionDropdown';
import { useTranslation } from 'next-i18next';

interface IMintModal {
  imageUrl: string;
  emotion: string;
  handleClose: () => void;
}

export default function MintModal({
  imageUrl,
  emotion,
  handleClose,
}: IMintModal) {
  const { t } = useTranslation('mint-modal');
  const [selectedEmotion, setSelectedEmotion] = useState(emotion);
  const router = useRouter();
  const { myContract, account } = useWeb3();
  const nameRef = useRef<HTMLInputElement | null>(null);
  const priceRef = useRef<HTMLInputElement | null>(null);
  const descRef = useRef<HTMLTextAreaElement | null>(null);
  const { dateStr } = useTodayDate();
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await myContract.mintNFT(
      imageUrl,
      dateStr,
      nameRef.current.value,
      priceRef.current.value,
      selectedEmotion,
      descRef.current.value,
      {
        from: account,
      }
    );
    router.push('/marketplace');
  };

  return (
    <Portal qs={'#__next'}>
      <StModalOverlay>
        <StModal>
          <X onClick={handleClose} />
          <form onSubmit={handleSubmit}>
            <StTitle>{t('title')}</StTitle>
            <StGridBox>
              <StFieldset>
                <StLabel>{t('price')} *</StLabel>
                <StPriceInputBox>
                  <StPriceInput type='number' required ref={priceRef} />
                  <span>ETH</span>
                </StPriceInputBox>
              </StFieldset>
              <StFieldset>
                <StLabel>{t('mood')} *</StLabel>
                <MoodDropdown
                  emotion={selectedEmotion}
                  setEmotion={setSelectedEmotion}
                />
              </StFieldset>
            </StGridBox>
            <StFieldset>
              <StLabel>{t('name')} *</StLabel>
              <StNameInput
                ref={nameRef}
                placeholder={t('name_placeholder')}
                required
              />
            </StFieldset>
            <StFieldset>
              <StLabel>{t('description')} *</StLabel>
              <StDescTextarea
                ref={descRef}
                placeholder={t('desc_placeholder')}
                required
              />
            </StFieldset>
            <StCreateBtn>{t('create')}</StCreateBtn>
          </form>
        </StModal>
      </StModalOverlay>
    </Portal>
  );
}
