import { fetchDiaryDetailFn } from '@/apis/diaryApi';
import Loading from '@/components/atoms/Loading/Loading';
import DiaryEntryForm from '@/components/blocks/DiaryEntryForm/DiaryEntryForm';
import DiaryMetaForm from '@/components/blocks/DiaryMetaForm/DiaryMetaForm';
import Layout from '@/components/blocks/Layout/Layout';
import useTodayDate from '@/hooks/useTodayDate';
import IDiary from '@/types/IDiary';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { useQuery } from 'react-query';

export default function DiaryEditPage() {
  const {
    query: { id, data: queryData },
  } = useRouter();
  const { isLoading, data } = useQuery(['diary', id], fetchDiaryDetailFn, {
    enabled: !!id && !queryData,
    retry: 0,
  });
  const { dateStr } = useTodayDate();
  const [date, setDate] = useState<string>(dateStr);
  const [diary, setDiary] = useState<IDiary>({
    title: '',
    content: '',
    emotion: '',
    weather: '',
    date: '',
  });
  const { title, content, emotion, weather } = diary;

  // 페이지가 로드될 때마다 스크롤 위치를 페이지 상단으로 이동
  // 참고: https://github.com/vercel/next.js/issues/45187
  useEffect(() => document.body?.scrollTo(0, 0), []);

  useEffect(() => {
    if (queryData) {
      const beforeEdit = JSON.parse(queryData as string);
      const { title, content, date } = beforeEdit;
      setDiary(prev => ({
        ...prev,
        title,
        content,
        date,
      }));
      setDate(date);
    }
  }, []);

  useEffect(() => {
    if (data) {
      const { title, content, date } = data;
      setDiary(prev => ({
        ...prev,
        title,
        content,
        date,
      }));
      setDate(date);
    }
  }, [data]);

  useEffect(() => {
    setDiary(prev => ({
      ...prev,
      date,
    }));
  }, [date]);

  return (
    <Layout>
      {isLoading && <Loading message='Loading...' />}
      {!isLoading && !(emotion && weather) && (
        <DiaryEntryForm
          title={title}
          content={content}
          today={dateStr}
          date={date}
          setDate={setDate}
          setEntry={setDiary}
        />
      )}
      {!isLoading && emotion && weather && (
        <DiaryMetaForm entry={diary} setEntry={setDiary} />
      )}
    </Layout>
  );
}
