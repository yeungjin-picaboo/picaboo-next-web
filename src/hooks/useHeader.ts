import { logoutFn } from '@/apis/accountApi';
import useDropdown from '@/hooks/useDropdown';
import { AxiosError } from 'axios';
import { useRouter } from 'next/router';
import { useRef } from 'react';
import { useMutation } from 'react-query';

export default function useHeader() {
  const router = useRouter();
  const dropdownRef = useRef<HTMLDivElement>(null);
  const [isOpen, setIsOpen] = useDropdown(dropdownRef);
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
    isOpen,
    dropdownRef,
    handleDropdown: () => setIsOpen(!isOpen),
    handleLogout: () => mutate(),
  };
}
