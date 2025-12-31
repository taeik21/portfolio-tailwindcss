'use client';

import Link from 'next/link';

export function Header() {
  const navigation = ['홈', '소개', '기술', '프로젝트', '연락처'];

  return (
    <header className="fixed top-0 right-0 left-0 z-50 bg-white/25 px-8 py-4 backdrop-blur-md dark:bg-gray-900/25">
      <nav className="container mx-auto flex max-w-4xl items-center justify-between">
        <div className="flex items-center gap-x-4">
          <h1 className="text-2xl font-bold">김개발</h1>
          <span className="text-gray-700 dark:text-gray-200">풀스택 개발자</span>
        </div>
        <div className="hidden gap-x-4 md:flex">
          <ul className="flex items-center gap-x-4">
            {navigation.map((el, idx) => (
              <li key={`${el}_${idx}`}>
                <Link href={`#${el}`} className="hover:text-indigo-400">
                  {el}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
}
