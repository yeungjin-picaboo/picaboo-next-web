import {
  StErrorMsg,
  StFieldSet,
  StInputBox,
  StInputField,
  StLabel,
  StMsgBox,
} from '@/src/styles/common/Input.style';
import { IsInputProps } from '@/src/types/props.interface';
import { forwardRef, Ref } from 'react';
import { AlertCircle } from 'react-feather';

function Input(
  { id, label, error, icon, ...restProps }: IsInputProps,
  ref: Ref<HTMLInputElement>
) {
  return (
    <StFieldSet>
      {label && (
        <StLabel htmlFor={id} error={error != undefined ? true : false}>
          {label}
        </StLabel>
      )}
      <StInputBox>
        <StInputField
          id={id}
          ref={ref}
          error={error != undefined ? true : false}
          {...restProps}
        />
        {icon && icon}
      </StInputBox>
      {error && (
        <StMsgBox>
          <AlertCircle />
          <StErrorMsg>{error.message}</StErrorMsg>
        </StMsgBox>
      )}
    </StFieldSet>
  );
}

export default forwardRef(Input);
