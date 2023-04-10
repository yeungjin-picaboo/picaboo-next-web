import {
  forwardRef,
  InputHTMLAttributes,
  MutableRefObject,
  Ref,
  useEffect,
} from 'react';
import { AlertCircle, X } from 'react-feather';
import {
  StErrorMsg,
  StFieldSet,
  StInputBox,
  StInputField,
  StLabel,
  StMsgBox,
} from './Input.styled';
import { FieldError } from 'react-hook-form';
import ViewToggle from '../ViewToggle/ViewToggle';

interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
  id: string;
  label?: string;
  error?: FieldError | undefined;
  resetIconMode?: true;
  handleResetEmail?: () => void;
  viewIconMode?: true;
  _ref?: MutableRefObject<HTMLInputElement | null>;
}

function Input(
  {
    id,
    label,
    error,
    resetIconMode,
    handleResetEmail,
    viewIconMode,
    _ref,
    ...restProps
  }: IInputProps,
  ref: Ref<HTMLInputElement>
) {
  useEffect(() => {
    if (resetIconMode && !handleResetEmail) {
      console.warn(
        'Warning: handleResetEmail is missing while resetIconMode is true'
      );
    }
    if (viewIconMode && !_ref) {
      console.warn('Warning: _ref is missing while viewIconMode is true');
    }
  }, [resetIconMode, handleResetEmail, viewIconMode, _ref]);

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
        {resetIconMode && handleResetEmail && <X onClick={handleResetEmail} />}
        {viewIconMode && _ref && <ViewToggle inputRef={_ref} />}
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
