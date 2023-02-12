import { InputBox, InputField, Label } from '@/src/styles/basicInput.style';
import { InputProps } from '@/src/types/common.interface';
import { X } from 'react-feather';

export default function BasicInput({
  id,
  label,
  value,
  onChange,
  handleReset,
  ...restProps
}: InputProps) {
  return (
    <fieldset>
      <Label htmlFor={id}>{label}</Label>
      <InputBox>
        <InputField id={id} value={value} onChange={onChange} {...restProps} />
        <X onClick={handleReset} />
      </InputBox>
    </fieldset>
  );
}
