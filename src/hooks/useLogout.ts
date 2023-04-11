import { logoutFn } from '@/apis/authApi';
import { AxiosError } from 'axios';
import { useRouter } from 'next/router';
import { useMutation } from 'react-query';

export default function useLogout() {
  const router = useRouter();
  const { mutate } = useMutation(logoutFn, {
    onSuccess: data => {
      alert(data.message);
      router.push('/');
    },
    onError: (error: AxiosError) => {
      alert(error.message);
      // message 결과에 따라 input 필드 초기화 구현해야함
    },
  });
  const handleLogout = () => mutate();
  return handleLogout;
}
