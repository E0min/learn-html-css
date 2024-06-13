import { useState } from 'react';

export default function useToggle(initialValue = false) {
  const [value, setValue] = useState(initialValue);

  // 값 토글 함수
  const toggle = () => {
    setValue(currentValue => !currentValue);
  };

  return [value, toggle];
}


