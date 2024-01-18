import { useState } from 'react';

const useIsSubmitting = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  return {
    isSubmitting,
    setIsSubmitting,
  };
};

export { useIsSubmitting };
