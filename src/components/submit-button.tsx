'use client';

import { ReactNode } from 'react';
import { useFormStatus } from 'react-dom';

interface SProps {
  children: ReactNode;
  className?: string;
}

export function SubmitButton({ children, className }: SProps) {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      className={`${pending ? 'cursor-not-allowed bg-gray-400!' : 'cursor-pointer'} ${className}`}
      disabled={pending}
    >
      {pending ? '처리중...' : children}
    </button>
  );
}
