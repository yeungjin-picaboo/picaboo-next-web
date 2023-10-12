import { IdenticonImg } from '@/components/atoms/IdenticonImg/IdenticonImg';
import {
  StCommentContainer,
  StCommentCreation,
  StCommentInput,
  StCommentList,
  StCommentTitle,
  StUserImageBox,
} from './Comment.styled';

export default function Comment() {
  return (
    <StCommentContainer>
      <StCommentCreation>
        <StUserImageBox>
          <IdenticonImg
            username={''}
            saturation='90'
            width={60}
            height={60}
            lightness={undefined}
          />
        </StUserImageBox>
        <StCommentInput />
      </StCommentCreation>
      <StCommentList>
        <StCommentTitle>ALL COMMENTS({})</StCommentTitle>
      </StCommentList>
    </StCommentContainer>
  );
}
