import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, Calendar, Edit, Trash2 } from 'react-feather';
import { AxiosError } from 'axios';
import { useRouter } from 'next/router';
import { useEffect, useRef, useState } from 'react';
import { useMutation, useQuery } from 'react-query';
import dayjs from 'dayjs';
import 'dayjs/locale/es';
import useDropdown from '@/hooks/useDropdown';
import { deleteDiaryFn, fetchDiaryDetailFn } from '@/apis/diaryApi';
import Layout from '@/components/blocks/Layout/Layout';
import Loading from '@/components/atoms/Loading/Loading';
import DatePicker from '@/components/atoms/DatePicker/DatePicker';
import {
  StDiaryContent,
  StDiaryDate,
  StDiaryHeader,
  StDiaryInfo,
  StDiaryMetaIcon,
  StDiaryPictureBox,
  StDiaryTitle,
  StCalendarBox,
  StDiaryIconContainer,
  StDiary,
} from '@/styles/components/StDiary.styles';
import useTodayDate from '@/hooks/useTodayDate';
import weather from '@/data/weather';
import moods from '@/data/moods';
import useDeleteModal from '@/hooks/useDeleteModal';
import DeleteModal from '@/components/blocks/DeleteModal/DeleteModal';

interface IIcons {
  weatherIcon: JSX.Element | undefined;
  emotionIcon: JSX.Element | undefined;
}

export default function DiariesDetailPage() {
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
        setDate(data.date as string);
      },
      onError: (error: AxiosError) => {
        // 실패시 호출 (401, 404 같은 error가 아니라 정말 api 호출이 실패한 경우만 호출됨)
        console.log(error.message);
      },
    }
  );
  const { mutate } = useMutation(deleteDiaryFn, {
    onSuccess: data => {
      alert(data.message);
      router.push('/diary');
    },
    onError: (error: AxiosError) => {
      alert(error.message);
      // message 결과에 따라 input 필드 초기화 구현해야함
    },
  });
  const [icons, setIcons] = useState<IIcons | undefined>();
  const [date, setDate] = useState('');
  const { dateStr } = useTodayDate();
  const dropdownRef = useRef<HTMLDivElement>(null);
  const [isCalendarOpen, setIsCalendarOpen, handleCalendarOpen] =
    useDropdown(dropdownRef);
  const { isModalOpen, handleOpen, handleClose, handleDelete } = useDeleteModal(
    data?.diary_id,
    mutate
  );
  useEffect(
    () =>
      setIcons({
        weatherIcon: weather.find(el => el.name === data?.weather)?.icon,
        emotionIcon: moods.find(el => el.name === data?.emotion)?.icon,
      }),
    [data]
  );

  return (
    <Layout>
      <StDiary>
        <StDiaryHeader>
          <Link href='/diary'>
            <ArrowLeft />
          </Link>
          <StDiaryIconContainer>
            <StCalendarBox ref={dropdownRef}>
              <Calendar onClick={handleCalendarOpen} />
              {isCalendarOpen && (
                <DatePicker
                  current={dateStr}
                  selected={date}
                  setSelected={setDate}
                  setIsCalendarOpen={setIsCalendarOpen}
                />
              )}
            </StCalendarBox>
            <Link
              href={{
                pathname: '/diary/edit',
                query: { data: JSON.stringify(data) },
              }}
              as={`/diary/${router.query.id}/edit`}
            >
              <Edit />
            </Link>
            <Trash2 onClick={handleOpen} />
            {isModalOpen && (
              <DeleteModal
                titleMsg='Delete Diary'
                subMsg='Are you sure you want to delete this diary?'
                handleDelete={handleDelete}
                handleClose={handleClose}
              ></DeleteModal>
            )}
          </StDiaryIconContainer>
        </StDiaryHeader>
        {isLoading && <Loading message='Loading diary...' />}
        {data && (
          <>
            <StDiaryPictureBox>
              <Image src={data.source} width={480} height={480} alt='' />
            </StDiaryPictureBox>
            <StDiaryInfo>
              <StDiaryDate>
                {dayjs(data.date).locale('en-us').format('dddd, MMMM D, YYYY')}
              </StDiaryDate>
              <StDiaryMetaIcon>
                {icons?.weatherIcon}
                {icons?.emotionIcon}
              </StDiaryMetaIcon>
            </StDiaryInfo>
            <StDiaryTitle>{data.title}</StDiaryTitle>
            <StDiaryContent>{data.content}</StDiaryContent>
          </>
        )}
      </StDiary>
    </Layout>
  );
}
