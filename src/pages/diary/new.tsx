import DiaryEntryForm from '@/components/blocks/DiaryEntryForm/DiaryEntryForm';
import DiaryMetaForm from '@/components/blocks/DiaryMetaForm/DiaryMetaForm';
import Layout from '@/components/blocks/Layout/Layout';
import useTodayDate from '@/hooks/useTodayDate';
import IDiary from '@/types/IDiary';
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

  useEffect(() => {
    setEntry(prev => ({ ...prev, date }));
  }, [date]);

  return (
    <Layout>
      {!(emotion && weather) && (
        <DiaryEntryForm
          title={title}
          content={content}
          dateStr={dateStr}
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
