import DiaryEntryForm from '@/components/blocks/DiaryEntryForm/DiaryEntryForm';
import DiaryMetaForm from '@/components/blocks/DiaryMetaForm/DiaryMetaForm';
import Layout from '@/components/blocks/Layout/Layout';

export default function CreateDiaryPage() {
  return (
    <Layout>
      {/* <DiaryEntryForm /> */}
      <DiaryMetaForm />
    </Layout>
  );
}
