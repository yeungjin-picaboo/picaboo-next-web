import Layout from '@/src/components/layout/Layout';
import Image from 'next/image';
import { useState } from 'react';
import { Plus } from 'react-feather';
import MonthPicker from '../components/common/MonthPicker';
import { StAddBtn, StItem, StList } from '../styles/common/common.style';

const sources = [
  '/background.png',
  '/background.png',
  '/background.png',
  '/background.png',
  '/background.png',
  '/background.png',
  '/background.png',
  '/background.png',
];

export default function DiaryPage() {
  // const [sources, setSources] = useState<Array<string>>([]);

  return (
    <Layout>
      <MonthPicker />
      <StList>
        {sources.map((el: any, i: number) => {
          return (
            <StItem key={i}>
              <Image src={el} fill alt='' />
            </StItem>
          );
        })}
      </StList>
      <StAddBtn>
        <Plus width={36} height={36} strokeWidth={1} />
      </StAddBtn>
    </Layout>
  );
}
