import Link from 'next/link';
import { ArrowLeft, Calendar, Edit, Trash2 } from 'react-feather';
import DeleteModal from '../DeleteModal/DeleteModal';
import useDropdown from '@/hooks/useDropdown';
import useDeleteModal from '@/hooks/useDeleteModal';
import { Dispatch, SetStateAction, useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/router';
import { deleteDiaryFn, fetchDiaryDatesFn } from '@/apis/diaryApi';
import { useMutation, useQuery } from 'react-query';
import { AxiosError } from 'axios';
import IDiary from '@/types/IDiary';
import {
  StCalendarBox,
  StCalendarLoadingBox,
  StDiaryHeader,
  StDiaryIconContainer,
} from './DiaryHeader.styled';
import { ClipLoader } from 'react-spinners';
import DatePicker from '@/components/atoms/DatePicker/DatePicker';
import useTodayDate from '@/hooks/useTodayDate';
import Image from 'next/image';
import useModal from '@/hooks/useModal';
import MintModal from '../MintModal/MintModal';

interface IDiaryHeaderProps {
  diary: IDiary;
  emotion: string;
  selectedDate: string;
  setSelectedDate: Dispatch<SetStateAction<string>>;
}

export default function DiaryHeader({
  diary,
  emotion,
  selectedDate,
  setSelectedDate,
}: IDiaryHeaderProps) {
  const router = useRouter();
  const { dateStr } = useTodayDate();
  const dropdownRef = useRef<HTMLDivElement>(null);
  const [enableDates, setEnableDates] = useState<Array<string>>([]);
  const [isCalendarOpen, setIsCalendarOpen, handleCalendarOpen] =
    useDropdown(dropdownRef);
  const { isLoading: calendarLoading, data: calendar } = useQuery(
    'calendar',
    fetchDiaryDatesFn,
    { retry: 0, enabled: isCalendarOpen }
  );
  const { mutate } = useMutation(deleteDiaryFn, {
    onSuccess: data => {
      alert(data.message);
      router.push('/diary');
    },
    onError: (error: AxiosError) => {
      alert(error.message);
      // message 결과에 따라 input 필드 초기화 구현해야함
    },
  });
  const {
    isModalOpen: isDeleteModalOpen,
    handleOpen: handleDeleteModalOpen,
    handleClose: handleDeleteModalClose,
    handleDelete,
  } = useDeleteModal(diary?.diary_id, '/diary', mutate);
  const {
    isModalOpen: isNftModalOpen,
    handleModalOpen: handleNftModalOpen,
    handleModalClose: handleNftModalClose,
  } = useModal();

  useEffect(() => {
    if (calendar !== undefined && calendar.length > 0) {
      setEnableDates(
        calendar.map((el: { diary_id: string; date: string }) => el.date)
      );
    }
  }, [calendar]);

  useEffect(() => {
    if (calendar !== undefined && calendar.length > 0) {
      const selectedId = calendar.map(
        (el: { diary_id: string; date: string }) => {
          if (el.date === selectedDate) {
            return el.diary_id;
          }
        }
      );
      router.push(`/diary/${selectedId}`);
    }
  }, [selectedDate]);

  return (
    <StDiaryHeader>
      <Link href='/diary'>
        <ArrowLeft strokeWidth={1.5} />
      </Link>
      <StDiaryIconContainer>
        <Image
          src='/icons/hexagon-letter-n.svg'
          alt=''
          width={32}
          height={32}
          onClick={handleNftModalOpen}
        />
        {isNftModalOpen && (
          <MintModal
            emotion={emotion}
            imageUrl={process.env.NEXT_PUBLIC_DIARY_IMAGE_URL + diary.source}
            handleClose={handleNftModalClose}
          />
        )}
        <Link
          href={{
            pathname: `/diary/${router.query.id}/edit`,
            query: { data: JSON.stringify(diary) },
          }}
          as={`/diary/${router.query.id}/edit`}
        >
          <Edit strokeWidth={1.5} />
        </Link>
        <Trash2 strokeWidth={1.5} onClick={handleDeleteModalOpen} />
        {isDeleteModalOpen && (
          <DeleteModal
            handleDelete={handleDelete}
            handleClose={handleDeleteModalClose}
          />
        )}
        <StCalendarBox ref={dropdownRef}>
          <Calendar strokeWidth={1.5} onClick={handleCalendarOpen} />
          {calendarLoading && (
            <StCalendarLoadingBox>
              <ClipLoader />
            </StCalendarLoadingBox>
          )}
          {!calendarLoading && isCalendarOpen && (
            <DatePicker
              enabled={enableDates}
              current={dateStr}
              selected={selectedDate}
              setSelected={setSelectedDate}
              setIsCalendarOpen={setIsCalendarOpen}
            />
          )}
        </StCalendarBox>
      </StDiaryIconContainer>
    </StDiaryHeader>
  );
}
