import Image from 'next/image';
import { AxiosError } from 'axios';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { useMutation, useQuery } from 'react-query';
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
} from '@/styles/components/StDiary.styles';
import weather from '@/data/weather';
import moods from '@/data/moods';
import DiaryHeader from '@/components/blocks/DiaryHeader/DiaryHeader';
import { fetchDiaryWithDateFn } from '@/apis/diaryApi';

interface IWeatherEmotionIcons {
  weatherIcon: JSX.Element | undefined;
  emotionIcon: JSX.Element | undefined;
}

export default function DiaryDetailPage() {
  const router = useRouter();
  const [date, setDate] = useState('');
  const [diaryDate, setDiaryDate] = useState('');
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
        setDate(data.date as string);
        setDiaryDate(data.date as string);
      },
      onError: (error: AxiosError) => {
        // 실패시 호출 (401, 404 같은 error가 아니라 정말 api 호출이 실패한 경우만 호출됨)
        console.log(error.message);
      },
    }
  );
  const { mutate } = useMutation(fetchDiaryWithDateFn, {
    onSuccess: data => {
      router.push(`/diary/${data.diary_id}`);
    },
    onError: (error: AxiosError) => {
      alert(error.message);
      // message 결과에 따라 input 필드 초기화 구현해야함
    },
  });

  // 페이지가 로드될 때마다 스크롤 위치를 페이지 상단으로 이동
  // 참고: https://github.com/vercel/next.js/issues/45187
  useEffect(() => document.body?.scrollTo(0, 0), []);

  useEffect(() => {
    setIcons({
      weatherIcon: weather.find(el => el.name === diary?.weather)?.icon,
      emotionIcon: moods.find(el => el.name === diary?.emotion)?.icon,
    });
  }, [diary]);

  useEffect(() => {
    if (date !== '' && date !== diaryDate) {
      mutate(date);
    }
  }, [date]);

  return (
    <Layout type='small'>
      {diaryLoading && <Loading message='Loading diary...' />}
      {diary && (
        <StDiaryContainer>
          <DiaryHeader diary={diary} date={date} setDate={setDate} />
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
              src={diary.source}
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
