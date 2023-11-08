import DiaryEntryForm from '@/components/blocks/DiaryEntryForm/DiaryEntryForm';
import DiaryMetaForm from '@/components/blocks/DiaryMetaForm/DiaryMetaForm';
import Layout from '@/components/blocks/Layout/Layout';
import useTodayDate from '@/hooks/useTodayDate';
import IDiary from '@/types/IDiary';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useEffect, useState } from 'react';

export default function CreateDiaryPage() {
  const [entry, setEntry] = useState<IDiary>({
    title: '',
    content: '',
    emotion: '',
    weather: '',
    date: '',
  });
  const { dateStr } = useTodayDate();
  const [date, setDate] = useState<string>(dateStr);
  const { title, content, emotion, weather } = entry;

  // 페이지가 로드될 때마다 스크롤 위치를 페이지 상단으로 이동
  // 참고: https://github.com/vercel/next.js/issues/45187
  useEffect(() => document.body?.scrollTo(0, 0), []);

  useEffect(() => {
    setEntry(prev => ({ ...prev, date }));
  }, [date]);

  return (
    <Layout type='small'>
      {!(emotion && weather) && (
        <DiaryEntryForm
          today={dateStr}
          title={title}
          content={content}
          date={date}
          setDate={setDate}
          setEntry={setEntry}
        />
      )}
      {emotion && weather && (
        <DiaryMetaForm entry={entry} setEntry={setEntry} />
      )}
    </Layout>
  );
}

export const getStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale, [
        'header',
        'wallet-modal',
        'diary-form',
      ])),
      locale,
    },
  };
};
