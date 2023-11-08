import Image from 'next/image';
import {
  StCancelBtn,
  StDeleteBtn,
  StModal,
  StModalBody,
  StModalFooter,
  StModalIconBox,
  StModalMsgBox,
  StModalSubMsg,
  StModalTitleMsg,
} from './DeleteModal.styled';
import { StModalOverlay } from '@/styles/components/StModalOverlay.styled';
import Portal from '../Portal/Portal';
import { useTranslation } from 'next-i18next';

interface IDeleteModalProps {
  handleDelete: () => void;
  handleClose: () => void;
}

export default function DeleteModal({
  handleDelete,
  handleClose,
}: IDeleteModalProps) {
  const { t } = useTranslation('delete-modal');
  return (
    <Portal qs={'#__next'}>
      <StModalOverlay>
        <StModal>
          <StModalBody>
            <StModalIconBox>
              <Image
                src='/icons/alert-triangle-filled.svg'
                alt='alert'
                width={70}
                height={70}
              />
            </StModalIconBox>
            <StModalMsgBox>
              <StModalTitleMsg>{t('title_msg')}</StModalTitleMsg>
              <StModalSubMsg>{t('sub_msg')}</StModalSubMsg>
            </StModalMsgBox>
          </StModalBody>
          <StModalFooter>
            <StCancelBtn onClick={handleClose}>{t('cancel')}</StCancelBtn>
            <StDeleteBtn onClick={handleDelete}>{t('delete')}</StDeleteBtn>
          </StModalFooter>
        </StModal>
      </StModalOverlay>
    </Portal>
  );
}
