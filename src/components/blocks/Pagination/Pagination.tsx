import { ChevronLeft, ChevronRight } from 'react-feather';
import {
  ControlBox,
  PageContainer,
  PageNum,
  PageNumBox,
} from './Pagination.styled';
import { Dispatch, SetStateAction } from 'react';

interface IPagination {
  ITEMS_PER_PAGE: number;
  currentPage: number;
  numOfToken: number;
  setCurrentPage: Dispatch<SetStateAction<number>>;
}

export default function Pagination({
  ITEMS_PER_PAGE,
  currentPage,
  numOfToken,
  setCurrentPage,
}: IPagination) {
  // 페이지 변경 시 호출되는 함수
  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };
  return (
    <PageContainer>
      <ControlBox>
        <ChevronLeft />
      </ControlBox>
      {Array.from(
        { length: Math.ceil(numOfToken / ITEMS_PER_PAGE) },
        (_, index) => (
          <PageNumBox key={index} isCurrentPage={currentPage === index + 1}>
            <PageNum onClick={() => handlePageChange(index + 1)}>
              {index + 1}
            </PageNum>
          </PageNumBox>
        )
      )}
      <ControlBox>
        <ChevronRight />
      </ControlBox>
    </PageContainer>
  );
}
