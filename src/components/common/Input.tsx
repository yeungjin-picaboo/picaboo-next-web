import {
  ErrorMsg,
  FieldSet,
  InputBox,
  InputField,
  Label,
  MsgBox,
} from '@/src/styles/common/Input.style';
import { IsInputProps } from '@/src/types/props.interface';
import { forwardRef, Ref } from 'react';
import { AlertCircle } from 'react-feather';

function Input(
  { id, label, error, icon, ...restProps }: IsInputProps,
  ref: Ref<HTMLInputElement>
) {
  return (
    <FieldSet>
      {label && (
        <Label htmlFor={id} error={error != undefined ? true : false}>
          {label}
        </Label>
      )}
      <InputBox>
        <InputField
          id={id}
          ref={ref}
          error={error != undefined ? true : false}
          {...restProps}
        />
        {icon && icon}
      </InputBox>
      {error && (
        <MsgBox>
          <AlertCircle />
          <ErrorMsg>{error.message}</ErrorMsg>
        </MsgBox>
      )}
    </FieldSet>
  );
}

export default forwardRef(Input);
