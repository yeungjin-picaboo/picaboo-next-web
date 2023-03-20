import { fetchDiaryListFn } from '@/src/api/diaryApi';
import Layout from '@/src/components/layout/Layout';
import MonthPicker from '@/src/components/common/MonthPicker';
import Loading from '@/src/components/common/Loading';
import useDropdown from '@/src/hooks/useDropdown';
import {
  StCreateBtn,
  StPictureItem,
  StPictureList,
} from '@/src/styles/common/common.style';
import {
  StDateBox,
  StPickerLayout,
  StYear,
} from '@/src/styles/common/monthPicker';
import getTodayDate from '@/src/utils/getTodayDate';
import MonthsOfYear from '@/src/utils/constant/MonthsOfYear.json';
import Image from 'next/image';
import { ChevronDown, ChevronUp, Edit3 } from 'react-feather';
import { AxiosError } from 'axios';
import { useEffect, useRef, useState } from 'react';
import { useQuery } from 'react-query';
import { useRouter } from 'next/router';
import { StPageContainer } from '@/src/styles/layouts/layout.style';

export default function DiariesPage() {
  const router = useRouter();
  const dropdownRef = useRef<HTMLDivElement>(null);
  const [isPickerOpen, setIsPickerOpen] = useDropdown(dropdownRef);
  const [date, setDate] = useState({
    year: 2023,
    month: 3,
  });
  const { isLoading, isError, data, error } = useQuery(
    // queryKey: 쿼리를 고유하게 식별하는 문자열이나 배열으로 쿼리 키가 변경되면 React Query는 새로운 데이터를 가져와 캐시를 업데이트함
    ['list', String(date.month), String(date.year)],
    // queryFn: 쿼리를 호출하는 함수로 Promise를 반환해야하며, 해당 Promise가 resolve되면 데이터가 반환됨
    fetchDiaryListFn,
    {
      refetchOnWindowFocus: false, // 윈도우가 다시 포커스될 때 쿼리를 다시 호출할지 여부를 설정, 기본값은 true
      refetchOnReconnect: false, // 인터넷 연결이 끊겼다가 다시 연결될 때 데이터를 자동으로 다시 가져오도록 설정, 기본값은 true
      retry: 0, // 실패 시 쿼리 재시도 몇 번 할지 결정, 기본값은 3이고 true로 설정하면 무한 재시도, false로 설정하면 재시도 X
      onSuccess: data => {
        // 성공시 호출
        console.log(data);
      },
      onError: (error: AxiosError) => {
        // 실패시 호출 (401, 404 같은 error가 아니라 정말 api 호출이 실패한 경우만 호출됨)
        console.log(error.message);
      },
    }
  );

  const handlePictureClick = (id: number) => {
    router.push(`/diaries/${id}`);
  };

  useEffect(() => {
    const { year, month } = getTodayDate();
    setDate({ year: year, month: month });
  }, []);

  return (
    <Layout>
      <StPageContainer>
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
                setIsPickerOpen={setIsPickerOpen}
              />
            )}
          </StPickerLayout>
        )}
        {isLoading && <Loading message={'Loading diary pictures...'} />}
        {isError && <></>}
        {data && (
          <StPictureList>
            {data.map((el: any) => {
              return (
                <StPictureItem key={el.diary_id}>
                  <Image
                    src={el.source}
                    sizes='268px'
                    fill
                    alt=''
                    onClick={() => handlePictureClick(el.diary_id)}
                  />
                </StPictureItem>
              );
            })}
          </StPictureList>
        )}
        <StCreateBtn href='/diaries/new'>
          <Edit3 width={30} height={30} strokeWidth={1} />
        </StCreateBtn>
      </StPageContainer>
    </Layout>
  );
}
