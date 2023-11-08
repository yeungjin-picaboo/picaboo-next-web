import Layout from '@/components/blocks/Layout/Layout';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

export default function QnasPage() {
  return <Layout type='default'></Layout>;
}

export const getStaticProps = async ({ locale }) => {
  console.log('locale of getStaticProps', locale);
  return {
    props: {
      ...(await serverSideTranslations(locale, ['header'])),
    },
  };
};
