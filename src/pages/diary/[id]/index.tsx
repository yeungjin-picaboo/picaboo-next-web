import Image from 'next/image';
import { AxiosError } from 'axios';
import { useRouter } from 'next/router';
import { useEffect, useRef, useState } from 'react';
import { useQuery } from 'react-query';
import dayjs from 'dayjs';
import 'dayjs/locale/es';
import { fetchDiaryFn } from '@/apis/diaryApi';
import Layout from '@/components/blocks/Layout/Layout';
import Loading from '@/components/atoms/Loading/Loading';
import {
  StDiaryContent,
  StDiaryDate,
  StDiaryInfo,
  StDiaryMetaIcon,
  StDiaryPictureBox,
  StDiaryTitle,
  StDiaryContainer,
} from '@/styles/components/StDiary.styled';
import weather from '@/data/weather';
import moods from '@/data/moods';
import DiaryHeader from '@/components/blocks/DiaryHeader/DiaryHeader';
import useModal from '@/hooks/useModal';

interface IWeatherEmotionIcons {
  weatherIcon: JSX.Element | undefined;
  emotionIcon: JSX.Element | undefined;
}

export default function DiaryDetailPage() {
  const router = useRouter();
  const [selectedDate, setSelectedDate] = useState('');
  const { isModalOpen, handleModalOpen, handleModalClose } = useModal();
  const [icons, setIcons] = useState<IWeatherEmotionIcons | undefined>();
  const { isLoading: diaryLoading, data: diary } = useQuery(
    // queryKey: 쿼리를 고유하게 식별하는 문자열이나 배열으로 쿼리 키가 변경되면 React Query는 새로운 데이터를 가져와 캐시를 업데이트함
    ['diary', router.query.id],
    // queryFn: 쿼리를 호출하는 함수로 Promise를 반환해야하며, 해당 Promise가 resolve되면 데이터가 반환됨
    fetchDiaryFn,
    {
      retry: 0,
      enabled: !!router.query.id, // id가 있을 때만 실행
      onSuccess: data => {
        // 성공시 호출
        // console.log(data);
        setSelectedDate(data.date as string);
      },
      onError: (error: AxiosError) => {
        // 실패시 호출 (401, 404 같은 error가 아니라 정말 api 호출이 실패한 경우만 호출됨)
        console.log(error.message);
      },
    }
  );

  // 페이지가 로드될 때마다 스크롤 위치를 페이지 상단으로 이동
  // 참고: https://github.com/vercel/next.js/issues/45187
  useEffect(() => document.body?.scrollTo(0, 0), []);

  useEffect(() => {
    setIcons({
      weatherIcon: weather.find(el => el.name === diary?.weather)?.icon,
      emotionIcon: moods.find(el => el.name === diary?.emotion)?.icon,
    });
  }, [diary]);

  return (
    <Layout type='small'>
      {diaryLoading && <Loading message='Loading diary...' />}
      {diary && (
        <StDiaryContainer>
          <DiaryHeader
            diary={diary}
            selectedDate={diary.date}
            setSelectedDate={setSelectedDate}
          />
          <StDiaryTitle>{diary.title}</StDiaryTitle>
          <StDiaryInfo>
            <StDiaryDate>
              {dayjs(diary.date).locale('en-us').format('dddd, MMMM D, YYYY')}
            </StDiaryDate>
            <StDiaryMetaIcon>
              {icons?.weatherIcon}
              {icons?.emotionIcon}
            </StDiaryMetaIcon>
          </StDiaryInfo>
          <StDiaryPictureBox>
            <Image
              src={process.env.NEXT_PUBLIC_DIARY_IMAGE_URL + diary.source}
              width={512}
              height={512}
              alt=''
              priority
            />
          </StDiaryPictureBox>
          <StDiaryContent>{diary.content}</StDiaryContent>
        </StDiaryContainer>
      )}
    </Layout>
  );
}
