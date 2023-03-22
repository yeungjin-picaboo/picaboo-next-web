import {
  StMetaPickerBox,
  StMetaPickerIcon,
  StMetaPickerItem,
  StMetaPickerList,
  StMetaPickerTitle,
} from '@/src/styles/common/MetaPicker.styled';
import { IsMetaPickerProps } from '@/src/types/props.interface';

export default function MetaPickerBox({ title, list }: IsMetaPickerProps) {
  return (
    <StMetaPickerBox>
      <StMetaPickerTitle>{title}</StMetaPickerTitle>
      <StMetaPickerList>
        {list.map(item => (
          <StMetaPickerItem key={item.id}>
            <StMetaPickerIcon>{item.icon}</StMetaPickerIcon>
            <span>{item.id}</span>
          </StMetaPickerItem>
        ))}
      </StMetaPickerList>
    </StMetaPickerBox>
  );
}
