import useDropdown from '@/hooks/useDropdown';
import { Dispatch, SetStateAction, useRef } from 'react';
import {
  StDropdownContainer,
  StEmotionDropdown,
  StEmotionItem,
  StSelectedEmotionBox,
} from './EmotionDropdown.styled';
import moods from '@/data/moods';
import { ChevronDown } from 'react-feather';

interface IMoodDropdown {
  emotion: string;
  setEmotion: Dispatch<SetStateAction<string>>;
}

export default function MoodDropdown({ emotion, setEmotion }: IMoodDropdown) {
  const dropdownRef = useRef<HTMLDivElement>(null);
  const [isOpen, setIsOpen, handleOpen] = useDropdown(dropdownRef);
  return (
    <StDropdownContainer ref={dropdownRef}>
      <StSelectedEmotionBox onClick={handleOpen}>
        <>{emotion}</>
        <ChevronDown strokeWidth={1.5} />
      </StSelectedEmotionBox>
      {isOpen && (
        <StEmotionDropdown>
          {moods.map(item => {
            return (
              <StEmotionItem
                key={item.name}
                onClick={() => {
                  setEmotion(item.name);
                  setIsOpen(false);
                }}
              >
                <>{item.name}</>
                {item.icon}
              </StEmotionItem>
            );
          })}
        </StEmotionDropdown>
      )}
    </StDropdownContainer>
  );
}
