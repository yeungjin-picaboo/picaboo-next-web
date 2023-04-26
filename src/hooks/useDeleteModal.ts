import { AxiosError } from 'axios';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { UseMutateFunction } from 'react-query';

export default function useDeleteModal(
  id: string,
  route: string,
  onDelete: UseMutateFunction<any, AxiosError<unknown, any>, string, unknown>
) {
  const router = useRouter();
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
    setIsDeleting(false);
    setIsModalOpen(false);
    router.push(route);
  };

  return { isModalOpen, handleOpen, handleClose, handleDelete };
}
