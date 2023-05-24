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
            <StTitle>Create your NFT</StTitle>
            <StGridBox>
              <StFieldset>
                <StLabel>Price *</StLabel>
                <StPriceInputBox>
                  <StPriceInput type='number' required ref={priceRef} />
                  <span>ETH</span>
                </StPriceInputBox>
              </StFieldset>
              <StFieldset>
                <StLabel>Emotion *</StLabel>
                <MoodDropdown
                  emotion={selectedEmotion}
                  setEmotion={setSelectedEmotion}
                />
              </StFieldset>
            </StGridBox>
            <StFieldset>
              <StLabel>Name *</StLabel>
              <StNameInput
                ref={nameRef}
                placeholder='Please write a name for the image'
                required
              />
            </StFieldset>
            <StFieldset>
              <StLabel>Description *</StLabel>
              <StDescTextarea
                ref={descRef}
                placeholder='Please write a description for the image'
                required
              />
            </StFieldset>
            <StCreateBtn>Create</StCreateBtn>
          </form>
        </StModal>
      </StModalOverlay>
    </Portal>
  );
}
