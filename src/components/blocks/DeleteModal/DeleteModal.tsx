import AlertTriangleFilled from '../../../../public/alert-triangle-filled.svg';
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

interface IDeleteModalProps {
  titleMsg: string;
  subMsg: string;
  handleDelete: () => void;
  handleClose: () => void;
}

export default function DeleteModal({
  titleMsg,
  subMsg,
  handleDelete,
  handleClose,
}: IDeleteModalProps) {
  return (
    <Portal qs={'#__next'}>
      <StModalOverlay>
        <StModal>
          <StModalBody>
            <StModalIconBox>
              <Image
                src={AlertTriangleFilled}
                alt='alert'
                width={70}
                height={70}
              />
            </StModalIconBox>
            <StModalMsgBox>
              <StModalTitleMsg>{titleMsg}</StModalTitleMsg>
              <StModalSubMsg>{subMsg}</StModalSubMsg>
            </StModalMsgBox>
          </StModalBody>
          <StModalFooter>
            <StCancelBtn onClick={handleClose}>Cancel</StCancelBtn>
            <StDeleteBtn onClick={handleDelete}>Delete</StDeleteBtn>
          </StModalFooter>
        </StModal>
      </StModalOverlay>
    </Portal>
  );
}
