import { useState } from "react";

export const useInput = (initialValue) => {
  const [value, setValue] = useState(initialValue);

  return [
    {
      value,
      onChange: (e) => setValue({ ...value, [e.target.name]: e.target.value }),
    },
    () => setValue(initialValue),
  ];
};
