import { ReactElement } from 'react';
import {
  StMetaPicker,
  StMetaPickerIconBox,
  StMetaPickerItem,
  StMetaPickerList,
  StMetaPickerTitle,
} from './MetaPicker.styled';

interface IMetaPicker {
  title: 'Mood' | 'Weather';
  list: Array<{ name: string; icon: ReactElement }>;
}

export default function MetaPicker({ title, list }: IMetaPicker) {
  return (
    <StMetaPicker>
      <StMetaPickerTitle>{title}</StMetaPickerTitle>
      <StMetaPickerList>
        {list.map(item => (
          <StMetaPickerItem key={item.name}>
            <StMetaPickerIconBox>{item.icon}</StMetaPickerIconBox>
            <span>{item.name}</span>
          </StMetaPickerItem>
        ))}
      </StMetaPickerList>
    </StMetaPicker>
  );
}
