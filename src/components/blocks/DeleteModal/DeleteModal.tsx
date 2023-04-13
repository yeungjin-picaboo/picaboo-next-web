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
  StModalOverlay,
  StModalSubMsg,
  StModalTitleMsg,
} from './DeleteModal.styled';

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
  );
}
