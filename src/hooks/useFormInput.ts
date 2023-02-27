import { useState, useCallback } from 'react';

interface Form {
  name: string;
  password: string;
}

const useInputs = (initialForm: Form) => {
  const [form, setForm] = useState(initialForm);
  const onChange = useCallback(
    (e: any) => {
      const { name, value } = e.target;
      console.warn(name, value, { ...form, [name]: value });
      setForm({ ...form, [name]: value });
    },
    [form]
  );
  const reset = useCallback(() => setForm(initialForm), [initialForm]);
  return { form, onChange, reset };
};

export default useInputs;
