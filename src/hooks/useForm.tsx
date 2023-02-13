import { ChangeEvent, SyntheticEvent, useEffect, useState } from 'react';
import { UseFormProps } from '../types/hook.interface';

const useForm = ({ initialState, onSubmit, validate }: UseFormProps) => {
  const [formData, setFormData] = useState(initialState);
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setErrors(validate(formData));
  };
  useEffect(() => {
    (async () => {
      if (isLoading) {
        if (Object.keys(errors).length === 0) {
          await onSubmit(formData);
        }
        setIsLoading(false);
      }
    })();
  }, [errors]);
  return { formData, errors, isLoading, handleChange, handleSubmit };
};

export default useForm;
