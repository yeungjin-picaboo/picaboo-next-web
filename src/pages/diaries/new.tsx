import Layout from '@/src/components/layout/Layout';
import DiaryEntryForm from '@/src/components/layout/DiaryEntryForm';
import DiaryMetaPickerForm from '@/src/components/layout/DiaryMetaPickerForm';

export default function CreateDiaryPage() {
  return (
    <Layout>
      {/* <DiaryEntryForm /> */}
      <DiaryMetaPickerForm />
    </Layout>
  );
}
