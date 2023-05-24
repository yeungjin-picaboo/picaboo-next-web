import { logoutFn } from '@/apis/authApi';
import useDropdown from '@/hooks/useDropdown';
import { AxiosError } from 'axios';
import { useRouter } from 'next/router';
import { useRef } from 'react';
import { useMutation } from 'react-query';
import useModal from './useModal';

export default function useHeader() {
  const router = useRouter();
  const dropdownRef = useRef<HTMLDivElement>(null);
  const [isDropdownOpen, , handleDropdownOpen] = useDropdown(dropdownRef);
  const { isModalOpen, handleModalOpen, handleModalClose } = useModal();
  const { mutate } = useMutation(logoutFn, {
    onSuccess: data => {
      alert(data.message);
      router.push('/');
    },
    onError: (error: AxiosError) => {
      alert(error.message);
    },
  });

  return {
    route: router.route,
    isDropdownOpen,
    dropdownRef,
    isModalOpen,
    handleModalOpen,
    handleModalClose,
    handleDropdown: handleDropdownOpen,
    handleLogout: () => mutate(),
  };
}
