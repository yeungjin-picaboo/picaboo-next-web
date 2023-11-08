import { fetchDiaryListFn } from '@/apis/diaryApi';
import Loading from '@/components/atoms/Loading/Loading';
import Layout from '@/components/blocks/Layout/Layout';
import MonthPicker from '@/components/atoms/MonthPicker/MonthPicker';
import MONTHS_Full from '@/data/months_full.json';
import useDropdown from '@/hooks/useDropdown';
import {
  StDateBox,
  StPickerLayout,
  StYear,
} from '@/styles/components/StPicker.styled';
import IsYearMonth from '@/types/IYearMonth';
import { AxiosError } from 'axios';
import { useEffect, useRef, useState } from 'react';
import { ChevronDown, ChevronUp, Edit3 } from 'react-feather';
import { useQuery } from 'react-query';
import { StDiaryCreateBtn } from '@/styles/components/StDiaryCreateBtn.styled';
import useTodayDate from '@/hooks/useTodayDate';
import {
  StPictureList,
  StPictureListContainer,
} from '@/styles/components/StPictureList.styled';
import { StPictureItem } from '@/styles/components/StPictureItem.styled';
import ImageLoading from '@/components/atoms/ImageLoading/ImageLoading';
import Link from 'next/link';
import Image from 'next/image';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

export default function DiaryListPage() {
  const timerId = useRef<NodeJS.Timer>();
  const dropdownRef = useRef<HTMLDivElement>(null);
  const [isPickerOpen, setIsPickerOpen, handlePickerOpen] =
    useDropdown(dropdownRef);
  const todayDate = useTodayDate();
  const [date, setDate] = useState<IsYearMonth | null>({
    year: todayDate.year,
    month: todayDate.month,
  });
  const { isLoading, isError, data, error, refetch } = useQuery(
    // queryKey: 쿼리를 고유하게 식별하는 문자열이나 배열으로 쿼리 키가 변경되면 React Query는 새로운 데이터를 가져와 캐시를 업데이트함
    ['list', String(date?.month), String(date?.year)],
    // queryFn: 쿼리를 호출하는 함수로 Promise를 반환해야하며, 해당 Promise가 resolve되면 데이터가 반환됨
    fetchDiaryListFn,
    {
      refetchOnWindowFocus: false, // 윈도우가 다시 포커스될 때 쿼리를 다시 호출할지 여부를 설정, 기본값은 true
      refetchOnReconnect: false, // 인터넷 연결이 끊겼다가 다시 연결될 때 데이터를 자동으로 다시 가져오도록 설정, 기본값은 true
      retry: 0, // 실패 시 쿼리 재시도 몇 번 할지 결정, 기본값은 3이고 true로 설정하면 무한 재시도, false로 설정하면 재시도 X
      onSuccess: data => {
        // 성공시 호출
        // console.log(data);
        if (!data.source) {
          if (!timerId.current) {
            timerId.current = setInterval(() => refetch(), 2500);
          }
        } else clearInterval(timerId.current);
      },
      onError: (error: AxiosError) => {
        // 실패시 호출 (401, 404 같은 error가 아니라 정말 api 호출이 실패한 경우만 호출됨)
        console.log(error.message);
      },
    }
  );

  // 페이지가 로드될 때마다 스크롤 위치를 페이지 상단으로 이동
  // 참고: https://github.com/vercel/next.js/issues/45187
  useEffect(() => document.body?.scrollTo(0, 0), []);
  console.log(data);

  return (
    <Layout type='default'>
      <StPictureListContainer>
        <StPickerLayout ref={dropdownRef}>
          <StDateBox onClick={handlePickerOpen}>
            <>{MONTHS_Full[Number(date.month) - 1]}</>
            <StYear>{date.year}</StYear>
            {isPickerOpen ? <ChevronUp /> : <ChevronDown />}
          </StDateBox>
          {isPickerOpen && (
            <MonthPicker
              date={date}
              setDate={setDate}
              setIsPickerOpen={setIsPickerOpen}
            />
          )}
        </StPickerLayout>
        {isLoading && <Loading message={'Loading diary pictures...'} />}
        {isError && <></>}
        {data && (
          <StPictureList>
            {data.map((el: any) => {
              if (el.source === null) {
                return (
                  <StPictureItem
                    key={el.diary_id}
                    onClick={() => {
                      alert('The picture is not yet complete.');
                    }}
                  >
                    <ImageLoading message='Drawing...' />
                  </StPictureItem>
                );
              }
              return (
                <Link href={`/diary/${el.diary_id}`} key={el.diary_id}>
                  <StPictureItem>
                    <Image
                      src={process.env.NEXT_PUBLIC_DIARY_IMAGE_URL + el.source}
                      sizes='268px'
                      fill
                      alt=''
                    />
                  </StPictureItem>
                </Link>
              );
            })}
          </StPictureList>
        )}
        <StDiaryCreateBtn href='/diary/new'>
          <Edit3 width={30} height={30} strokeWidth={1} />
        </StDiaryCreateBtn>
      </StPictureListContainer>
    </Layout>
  );
}

export const getStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['header', 'wallet-modal'])),
    },
  };
};
