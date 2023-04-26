import useWeb3 from '@/hooks/useWeb3';
import { StModalOverlay } from '@/styles/components/StModalOverlay.styled';
import { FormEvent, useRef } from 'react';
import {
  StCreateBtn,
  StFieldset,
  StImageBox,
  StLabel,
  StModal,
  StNameInput,
  StPriceBox,
  StPriceInput,
  StTitle,
} from './MintModal.styled';
import Image from 'next/image';
import { X } from 'react-feather';
import Portal from '../Portal/Portal';
import { useRouter } from 'next/router';
import useTodayDate from '@/hooks/useTodayDate';

interface IMintModal {
  imageUrl: string;
  handleClose: () => void;
}

export default function MintModal({ imageUrl, handleClose }: IMintModal) {
  const router = useRouter();
  const { myContract, account } = useWeb3();
  const nameRef = useRef<HTMLInputElement | null>(null);
  const priceRef = useRef<HTMLInputElement | null>(null);
  const { dateStr } = useTodayDate();
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await myContract.mintNFT(
      imageUrl,
      dateStr,
      nameRef.current.value,
      priceRef.current.value,
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
            <StFieldset>
              <StLabel>Upload File *</StLabel>
              <StImageBox>
                <Image src={imageUrl} alt='' sizes='150' priority fill />
              </StImageBox>
            </StFieldset>
            <StFieldset>
              <StLabel>Name *</StLabel>
              <StNameInput
                ref={nameRef}
                placeholder='Please write a name for the image'
                required
              />
            </StFieldset>
            <StFieldset>
              <StLabel>Price *</StLabel>
              <StPriceBox>
                <StPriceInput type='number' required ref={priceRef} />
                ETH
              </StPriceBox>
            </StFieldset>
            <StCreateBtn>Create</StCreateBtn>
          </form>
        </StModal>
      </StModalOverlay>
    </Portal>
  );
}
