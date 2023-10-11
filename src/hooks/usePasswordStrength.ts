import { useState, useEffect } from 'react';
import { mediumPasswordRules, strongPasswordRules } from '@/constants';

export const usePasswordStrength = (passwordValue: string) => {
  const [strengthPassword, setStrengthPassword] = useState(1);
  const [strengthText, setStrengthText] = useState('Слабый');

  useEffect(() => {
    if (strongPasswordRules.test(passwordValue)) {
      setStrengthPassword(3);
      setStrengthText('Сильный');
    } else if (mediumPasswordRules.test(passwordValue)) {
      setStrengthPassword(2);
      setStrengthText('Средний');
    } else {
      setStrengthPassword(1);
      setStrengthText('Слабый');
    }
  }, [passwordValue]);

  return { strengthPassword, strengthText };
};
