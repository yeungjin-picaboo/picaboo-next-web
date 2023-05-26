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
  resetIconMode?: boolean;
  handleReset?: () => void;
  viewIconMode?: boolean;
  _ref?: MutableRefObject<HTMLInputElement | null>;
}

function Input(
  {
    id,
    label,
    error,
    resetIconMode,
    handleReset,
    viewIconMode,
    _ref,
    ...restProps
  }: IInputProps,
  ref: Ref<HTMLInputElement>
) {
  useEffect(() => {
    if (resetIconMode && !handleReset) {
      console.warn(
        'Warning: handleResetEmail is missing while resetIconMode is true'
      );
    }
    if (viewIconMode && !_ref) {
      console.warn('Warning: _ref is missing while viewIconMode is true');
    }
  }, [resetIconMode, handleReset, viewIconMode, _ref]);

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
        {resetIconMode && handleReset && <X onClick={handleReset} />}
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
