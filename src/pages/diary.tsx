import Layout from '@/src/components/layout/Layout';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import { ChevronDown, ChevronUp, Plus } from 'react-feather';
import MonthPicker from '../components/common/MonthPicker';
import useDropdown from '../hooks/useDropdown';
import { StAddBtn, StItem, StList } from '../styles/common/common.style';
import {
  StDateBox,
  StPickerLayout,
  StYear,
} from '../styles/common/monthPicker';
import ubuntu from '../utils/font/ubuntu';
import getTodayDate from '../utils/getTodayDate';
import MonthsOfYear from '@/src/utils/constant/MonthsOfYear.json';

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
  const [date, setDate] = useState({
    year: 2023,
    month: 1,
  });
  const dropdownRef = useRef<HTMLDivElement>(null);
  const [isPickerOpen, setIsPickerOpen] = useDropdown(dropdownRef);

  useEffect(() => {
    const { year, month } = getTodayDate();
    setDate({ year: year, month: month });
  }, []);

  return (
    <Layout>
      <main className={ubuntu.className}>
        {date && (
          <StPickerLayout ref={dropdownRef}>
            <StDateBox onClick={() => setIsPickerOpen(!isPickerOpen)}>
              <>{MonthsOfYear.full[date.month - 1]}</>
              <StYear>{date.year}</StYear>
              {isPickerOpen ? <ChevronUp /> : <ChevronDown />}
            </StDateBox>
            {isPickerOpen && (
              <MonthPicker
                date={date}
                setDate={setDate}
                isPickerOpen={isPickerOpen}
                setIsPickerOpen={setIsPickerOpen}
              />
            )}
          </StPickerLayout>
        )}
        <StList>
          {sources.map((el: any, i: number) => {
            return (
              <StItem key={i}>{/* <Image src={el} fill alt='' /> */}</StItem>
            );
          })}
        </StList>
        <StAddBtn href='/diary/write'>
          <Plus width={36} height={36} strokeWidth={1} />
        </StAddBtn>
      </main>
    </Layout>
  );
}
