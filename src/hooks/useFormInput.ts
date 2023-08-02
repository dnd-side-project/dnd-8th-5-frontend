import { useState, useCallback } from 'react';
import { PostAuthType } from '../types/auth';

const useInputs = (initialForm: PostAuthType) => {
  const [form, setForm] = useState(initialForm);
  const onChange = useCallback(
    (e: any) => {
      const { name, value } = e.target;
      setForm({ ...form, [name]: value });
    },
    [form]
  );
  const reset = useCallback(() => setForm(initialForm), [initialForm]);
  return { form, onChange, reset };
};

export default useInputs;
