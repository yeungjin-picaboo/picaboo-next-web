import { logoutFn } from '@/apis/authApi';
import useDropdown from '@/hooks/useDropdown';
import { AxiosError } from 'axios';
import { useRouter } from 'next/router';
import { useRef } from 'react';
import { useMutation } from 'react-query';
import useModal from './useModal';

export default function useHeader() {
  const router = useRouter();
  const userDropdownRef = useRef<HTMLDivElement>(null);
  const langDropdownRef = useRef<HTMLDivElement>(null);
  const [isUserDropdownOpen, , handleUserDropdownOpen] =
    useDropdown(userDropdownRef);
  const [isLangDropdownOpen, , handleLangDropdownOpen] =
    useDropdown(langDropdownRef);
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
    isUserDropdownOpen,
    userDropdownRef,
    isLangDropdownOpen,
    langDropdownRef,
    isModalOpen,
    handleModalOpen,
    handleModalClose,
    handleLangDropdown: handleLangDropdownOpen,
    handleUserDropdown: handleUserDropdownOpen,
    handleLogout: () => mutate(),
  };
}
