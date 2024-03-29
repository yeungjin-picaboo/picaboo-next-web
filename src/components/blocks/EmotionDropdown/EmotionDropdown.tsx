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

interface IEmotionDropdown {
  initialValue?: string;
  hasInitialValue?: boolean;
  emotion: string;
  setEmotion: Dispatch<SetStateAction<string>>;
}

export default function EmotionDropdown({
  initialValue = '',
  hasInitialValue = false,
  emotion,
  setEmotion,
}: IEmotionDropdown) {
  const dropdownRef = useRef<HTMLDivElement>(null);
  const [isOpen, setIsOpen, handleOpen] = useDropdown(dropdownRef);
  return (
    <StDropdownContainer ref={dropdownRef} className='emotion'>
      <StSelectedEmotionBox onClick={handleOpen}>
        <>{emotion}</>
        <ChevronDown strokeWidth={1.5} />
      </StSelectedEmotionBox>
      {isOpen && (
        <StEmotionDropdown>
          {hasInitialValue && (
            <StEmotionItem
              onClick={() => {
                setEmotion(initialValue);
                setIsOpen(false);
              }}
            >
              {initialValue}
            </StEmotionItem>
          )}
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
