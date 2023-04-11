import Loading from '@/components/atoms/Loading/Loading';
import DiaryEntryForm from '@/components/blocks/DiaryEntryForm/DiaryEntryForm';
import DiaryMetaForm from '@/components/blocks/DiaryMetaForm/DiaryMetaForm';
import Layout from '@/components/blocks/Layout/Layout';
import IDiary from '@/types/IDiary';
import { useState } from 'react';

export default function CreateDiaryPage() {
  const [entry, setEntry] = useState<IDiary>({
    date: new Date(),
    title: '',
    content: '',
    emotion: 'happy',
    weather: 'sunny',
  });
  const { date, title, content, emotion, weather } = entry;

  return (
    <Layout>
      {!(emotion && weather) && (
        <DiaryEntryForm
          title={title}
          content={content}
          date={date}
          setEntry={setEntry}
        />
      )}
      {emotion && weather && (
        <DiaryMetaForm entry={entry} setEntry={setEntry} />
      )}
    </Layout>
  );
}
