import Link from 'next/link';
import { ArrowLeft, Calendar, Edit, Trash2 } from 'react-feather';
import DeleteModal from '../DeleteModal/DeleteModal';
import useDropdown from '@/hooks/useDropdown';
import useDeleteModal from '@/hooks/useDeleteModal';
import { Dispatch, SetStateAction, useRef } from 'react';
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

interface IDiaryHeaderProps {
  diary: IDiary;
  date: string;
  setDate: Dispatch<SetStateAction<string>>;
}

export default function DiaryHeader({
  diary,
  date,
  setDate,
}: IDiaryHeaderProps) {
  const router = useRouter();
  const { dateStr } = useTodayDate();
  const dropdownRef = useRef<HTMLDivElement>(null);
  const [isCalendarOpen, setIsCalendarOpen, handleCalendarOpen] =
    useDropdown(dropdownRef);
  const { isLoading: datesLoading, data: diaryDates } = useQuery(
    'diaryDates',
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
  const { isModalOpen, handleOpen, handleClose, handleDelete } = useDeleteModal(
    diary?.diary_id,
    mutate
  );

  return (
    <StDiaryHeader>
      <Link href='/diary'>
        <ArrowLeft />
      </Link>
      <StDiaryIconContainer>
        <Link
          href={{
            pathname: `/diary/${router.query.id}/edit`,
            query: { data: JSON.stringify(diary) },
          }}
          as={`/diary/${router.query.id}/edit`}
        >
          <Edit />
        </Link>
        <Trash2 onClick={handleOpen} />
        {isModalOpen && (
          <DeleteModal
            titleMsg='Delete Diary'
            subMsg='Are you sure you want to delete this diary?'
            handleDelete={handleDelete}
            handleClose={handleClose}
          />
        )}
        <StCalendarBox ref={dropdownRef}>
          <Calendar onClick={handleCalendarOpen} />
          {datesLoading && (
            <StCalendarLoadingBox>
              <ClipLoader />
            </StCalendarLoadingBox>
          )}
          {!datesLoading && isCalendarOpen && (
            <DatePicker
              enabled={diaryDates}
              current={dateStr}
              selected={date}
              setSelected={setDate}
              setIsCalendarOpen={setIsCalendarOpen}
            />
          )}
        </StCalendarBox>
      </StDiaryIconContainer>
    </StDiaryHeader>
  );
}
