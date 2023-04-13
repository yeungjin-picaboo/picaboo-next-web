import { AxiosError } from 'axios';
import { useState } from 'react';
import { UseMutateFunction } from 'react-query';

export default function useDeleteModal(
  id: number,
  onDelete: UseMutateFunction<any, AxiosError<unknown, any>, number, unknown>
) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);

  const handleOpen = () => {
    if (id) {
      setIsModalOpen(true);
    }
  };

  const handleClose = () => {
    if (!isDeleting) {
      setIsModalOpen(false);
    }
  };

  const handleDelete = () => {
    setIsDeleting(true);
    onDelete(id);
    setIsModalOpen(false);
  };

  return { isModalOpen, handleOpen, handleClose, handleDelete };
}
