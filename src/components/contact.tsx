'use client';

import {
  faCreativeCommonsBy,
  faGithub,
  faInstagram,
  faYoutube,
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import { SubmitButton } from './submit-button';

export function Contact() {
  const info = [
    { name: 'GitHub', icon: faGithub },
    { name: 'Youtube', icon: faYoutube },
    { name: 'Instagram', icon: faInstagram },
    { name: 'bruce.lean17@gmail.com', icon: faCreativeCommonsBy },
  ];

  return (
    <section id="연락처" className="mt-16">
      <h2 className="mb-4 text-3xl font-bold">연락처</h2>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        <form className="space-y-2" action={''}>
          <div className="mb-2">
            <label htmlFor="name" className="mb-1">
              이름
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              className="w-full rounded-lg border border-gray-200 px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none dark:border-none dark:bg-gray-700"
            />
          </div>

          <div className="mb-2">
            <label htmlFor="email" className="mb-1">
              이메일
            </label>
            <input
              id="email"
              name="email"
              type="text"
              required
              className="w-full rounded-lg border border-gray-200 px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none dark:border-none dark:bg-gray-700"
            />
          </div>

          <div className="mb-2">
            <label htmlFor="message" className="mb-1">
              메시지
            </label>
            <textarea
              id="message"
              name="message"
              required
              className="w-full rounded-lg border border-gray-200 px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none dark:border-none dark:bg-gray-700"
            />
          </div>

          <SubmitButton className="rounded-lg bg-blue-600 px-4 py-2 text-white hover:bg-blue-500">
            이메일 보내기
          </SubmitButton>
        </form>

        <div className="flex flex-col justify-center gap-y-4 text-center text-gray-600 dark:text-gray-300">
          {info.map((el, idx) => (
            <div key={`${el}_${idx}`} className="space-x-1">
              <FontAwesomeIcon icon={el.icon} />
              <Link href={''}>{el.name}</Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
