import { Dispatch, MouseEvent, ReactElement, SetStateAction } from 'react';
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
  pick: string;
  setPick: Dispatch<SetStateAction<string>>;
}

export default function MetaPicker({
  title,
  list,
  pick,
  setPick,
}: IMetaPicker) {
  const handleIconClick = (e: MouseEvent<HTMLDivElement>) => {
    setPick(e.currentTarget.id);
  };
  return (
    <StMetaPicker>
      <StMetaPickerTitle>{title}</StMetaPickerTitle>
      <StMetaPickerList>
        {list.map(item => (
          <StMetaPickerItem
            id={item.name}
            key={item.name}
            onClick={handleIconClick}
          >
            <StMetaPickerIconBox clicked={item.name === pick}>
              {item.icon}
            </StMetaPickerIconBox>
            <span>{item.name}</span>
          </StMetaPickerItem>
        ))}
      </StMetaPickerList>
    </StMetaPicker>
  );
}
