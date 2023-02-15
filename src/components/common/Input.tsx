import {
  ErrorMsg,
  FieldSet,
  InputBox,
  InputField,
  Label,
  MsgBox,
} from '@/src/styles/Input.style';
import { InputProps } from '@/src/types/form.interface';
import { forwardRef, Ref } from 'react';
import { AlertOctagon } from 'react-feather';

function Input(
  { id, label, error, ...restProps }: InputProps,
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
      </InputBox>
      {error && (
        <MsgBox>
          <AlertOctagon />
          <ErrorMsg>{error.message}</ErrorMsg>
        </MsgBox>
      )}
    </FieldSet>
  );
}

export default forwardRef(Input);
