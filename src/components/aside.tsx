'use client';

import { X } from 'lucide-react';
import Link from 'next/link';
import { ModeToggle } from './mode-toggle';
import { Dispatch, SetStateAction } from 'react';

interface AsideProps {
  className: string;
  navigation: string[];
  setIsAside: Dispatch<SetStateAction<boolean>>;
}

export function Aside({ navigation, className, setIsAside }: AsideProps) {
  const onClickCloseAside = () => {
    setIsAside(false);
  };

  return (
    <aside
      className={`fixed top-0 right-0 bottom-0 h-screen w-64 bg-white px-6 py-8 shadow-lg transition duration-300 dark:bg-gray-800 ${
        className ?? ''
      }`}
    >
      <button className="mb-16 cursor-pointer" onClick={onClickCloseAside}>
        <X className="stroke-[2.5px]" />
      </button>
      <ul className="mb-4 space-y-4">
        {navigation.map((el, idx) => (
          <li key={`${el}_${idx}`}>
            <Link href={`#${el}`} className="hover:text-indigo-400">
              {el}
            </Link>
          </li>
        ))}
      </ul>

      <ModeToggle className="flex w-full justify-center rounded-full bg-gray-300" />
    </aside>
  );
}
