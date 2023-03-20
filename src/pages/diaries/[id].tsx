import { fetchDiaryDetailFn } from '@/src/api/diaryApi';
import Layout from '@/src/components/layout/Layout';
import CalendarDropdown from '@/src/components/common/CalendarDropdown';
import useDropdown from '@/src/hooks/useDropdown';
import {
  StDiaryContainer,
  StDiaryContent,
  StDiaryDate,
  StDiaryHeader,
  StDiaryIconBox,
  StDiaryInfo,
  StDiaryMetaData,
  StDiaryPictureBox,
  StDiaryTitle,
} from '@/src/styles/layouts/Diary.styled';
import getTodayDate from '@/src/utils/getTodayDate';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, Calendar, Edit, Smile, Sun, Trash2 } from 'react-feather';
import { AxiosError } from 'axios';
import { useRouter } from 'next/router';
import { useMemo, useRef, useState } from 'react';
import { useMutation, useQuery } from 'react-query';
import { logoutFn } from '@/src/api/accountApi';
import Loading from '@/src/components/common/Loading';
import dayjs from 'dayjs';
import 'dayjs/plugin/devHelper';
import localizedFormat from 'dayjs/plugin/localizedFormat';

dayjs.extend(localizedFormat);

export default function DiariesDetailPage() {
  const dropdownRef = useRef<HTMLDivElement>(null);
  const [isCalendarOpen, setIsCalendarOpen] = useDropdown(dropdownRef);
  const router = useRouter();
  const { isLoading, isError, data } = useQuery(
    // queryKey: 쿼리를 고유하게 식별하는 문자열이나 배열으로 쿼리 키가 변경되면 React Query는 새로운 데이터를 가져와 캐시를 업데이트함
    ['diary', router.query.id],
    // queryFn: 쿼리를 호출하는 함수로 Promise를 반환해야하며, 해당 Promise가 resolve되면 데이터가 반환됨
    fetchDiaryDetailFn,
    {
      enabled: !!router.query.id, // id가 있는 경우에만 쿼리 실행
      refetchOnWindowFocus: false, // 윈도우가 다시 포커스될 때 쿼리를 다시 호출할지 여부를 설정, 기본값은 true
      refetchOnReconnect: false, // 인터넷 연결이 끊겼다가 다시 연결될 때 데이터를 자동으로 다시 가져오도록 설정, 기본값은 true
      retry: 0, // 실패 시 쿼리 재시도 몇 번 할지 결정, 기본값은 3이고 true로 설정하면 무한 재시도, false로 설정하면 재시도 X
      onSuccess: data => {
        // 성공시 호출
        // console.log(data);
        setDate(data.date);
      },
      onError: (error: AxiosError) => {
        // 실패시 호출 (401, 404 같은 error가 아니라 정말 api 호출이 실패한 경우만 호출됨)
        console.log(error.message);
      },
    }
  );
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
  const { dateStr: today } = useMemo(() => getTodayDate(), []);
  const [date, setDate] = useState(data?.date);

  return (
    <Layout>
      <StDiaryContainer>
        <StDiaryHeader>
          <Link href='/diaries'>
            <ArrowLeft />
          </Link>
          <StDiaryIconBox>
            <div ref={dropdownRef}>
              <Calendar onClick={() => setIsCalendarOpen(!isCalendarOpen)} />
              {isCalendarOpen && (
                <CalendarDropdown
                  date={date}
                  today={today}
                  setDate={setDate}
                  setIsCalendarOpen={setIsCalendarOpen}
                />
              )}
            </div>
            <Link href='/diaries/edit'>
              <Edit />
            </Link>
            <Trash2 onClick={() => mutate()} />
          </StDiaryIconBox>
        </StDiaryHeader>
        {isLoading && <Loading message='Loading diary...' />}
        {data && (
          <>
            <StDiaryPictureBox>
              <Image src={data.source} width={500} height={500} alt='' />
            </StDiaryPictureBox>
            <StDiaryInfo>
              <StDiaryDate>
                {dayjs(data.date).format('dddd, MMMM D, YYYY')}
              </StDiaryDate>
              <StDiaryMetaData>
                <Sun />
                <Smile />
              </StDiaryMetaData>
            </StDiaryInfo>
            <StDiaryTitle>{data.title}</StDiaryTitle>
            <StDiaryContent>{data.content}</StDiaryContent>
          </>
        )}
      </StDiaryContainer>
    </Layout>
  );
}
