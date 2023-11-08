import { StModalOverlay } from '@/styles/components/StModalOverlay.styled';
import Portal from '../Portal/Portal';
import {
  StModal,
  StModalHeader,
  StModalSubTitle,
  StModalTitle,
  StModalWalletBtn,
} from './WalletModal.styled';
import { X } from 'react-feather';
import Image from 'next/image';
import useMetamask from '@/hooks/useMetamask';
import { useTranslation } from 'next-i18next';

interface IWalletModalProps {
  handleClose: () => void;
}

export default function WalletModal({ handleClose }: IWalletModalProps) {
  const { connectWallet } = useMetamask(handleClose);
  const { t } = useTranslation('wallet-modal');

  return (
    <Portal qs={'#__next'}>
      <StModalOverlay>
        <StModal>
          <X onClick={handleClose} />
          <StModalHeader>
            <StModalTitle>{t('title_msg')}</StModalTitle>
            <StModalSubTitle>{t('sub_msg')}</StModalSubTitle>
          </StModalHeader>
          <StModalWalletBtn onClick={connectWallet}>
            <Image
              width={26}
              height={26}
              src='/icons/metamask-icon.svg'
              alt=''
            />
            <span>Metamask</span>
          </StModalWalletBtn>
        </StModal>
      </StModalOverlay>
    </Portal>
  );
}
