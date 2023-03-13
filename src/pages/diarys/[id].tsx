import { fetchDiaryDetailFn } from '@/src/api/diaryApi';
import Layout from '@/src/components/layout/Layout';
import {
  StDiary,
  StDiaryContent,
  StDiaryDate,
  StDiaryHeader,
  StDiaryIconBox,
  StDiaryInfo,
  StDiaryMetaData,
  StDiaryPictureBox,
  StDiaryTitle,
} from '@/src/styles/layouts/diary.style';
import { AxiosError } from 'axios';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useMemo, useRef, useState } from 'react';
import { ArrowLeft, Calendar, Edit, Smile, Sun, Trash2 } from 'react-feather';
import { useQuery } from 'react-query';
import useDropdown from '@/src/hooks/useDropdown';
import CalendarDropdown from '@/src/components/common/CalendarDropdown';
import getTodayDate from '@/src/utils/getTodayDate';

export default function DiarysDetailPage() {
  const { dateStr: today } = useMemo(() => getTodayDate(), []);
  const [date, setDate] = useState(today);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const [isCalendarOpen, setIsCalendarOpen] = useDropdown(dropdownRef);
  const {
    query: { id },
  } = useRouter();
  const { isLoading, isError, data, error } = useQuery(
    // queryKey: 쿼리를 고유하게 식별하는 문자열이나 배열으로 쿼리 키가 변경되면 React Query는 새로운 데이터를 가져와 캐시를 업데이트함
    ['diary', id],
    // queryFn: 쿼리를 호출하는 함수로 Promise를 반환해야하며, 해당 Promise가 resolve되면 데이터가 반환됨
    fetchDiaryDetailFn,
    {
      enabled: !!id, // id가 있는 경우에만 쿼리 실행
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

  return (
    <Layout>
      <StDiary>
        <StDiaryHeader>
          <ArrowLeft />
          <StDiaryIconBox>
            <div ref={dropdownRef}>
              <Calendar onClick={() => setIsCalendarOpen(!isCalendarOpen)} />
              {isCalendarOpen && (
                <CalendarDropdown
                  date={date}
                  today={today}
                  setDate={setDate}
                  setIsCalendarOpen={setIsCalendarOpen}
                />
              )}
            </div>

            <Edit />
            <Trash2 />
          </StDiaryIconBox>
        </StDiaryHeader>
        {!data && (
          <>
            <StDiaryPictureBox>
              <Image src='/background.png' alt='' fill />
            </StDiaryPictureBox>
            <StDiaryInfo>
              <StDiaryDate>
                <span>17</span>
                &nbsp;&nbsp;January 2023 Monday
              </StDiaryDate>
              <StDiaryMetaData>
                <Smile />
                <Sun />
              </StDiaryMetaData>
            </StDiaryInfo>
            <StDiaryTitle>I visited an old school</StDiaryTitle>
            <StDiaryContent>
              Today, I visited my old school. It brought back so many memories.
              I walked through the halls, remembering all the good times I had
              there. I even ran into some of my old teachers. They were all so
              happy to see me. It was great to walk down memory lane, but it
              also made me realize how much I’ve grown since then. I’m so
              grateful for my education and all the opportunities my school gave
              me. I’m definitely going to visit again soon! Today, I visited my
              old school. It brought back so many memories. I walked through the
              halls, remembering all the good times I had there. I even ran into
              some of my old teachers. They were all so happy to see me. It was
              great to walk down memory lane, but it also made me realize how
              much I’ve grown since then. I’m so grateful for my education and
              all the opportunities my school gave me. I’m definitely going to
              visit again soon! Today, I visited my old school. It brought back
              so many memories. I walked through the halls, remembering all the
              good times I had there. I even ran into some of my old teachers.
              They were all so happy to see me. It was great to walk down memory
              lane, but it also made me realize how much I’ve grown since then.
              I’m so grateful for my education and all the opportunities my
              school gave me. I’m definitely going to visit again soon!
            </StDiaryContent>
          </>
        )}
      </StDiary>
    </Layout>
  );
}
