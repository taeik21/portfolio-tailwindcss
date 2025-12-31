import { Copyright } from 'lucide-react';

export function Footer() {
  return (
    <footer className="mt-16 bg-gray-100 dark:bg-gray-800">
      <div className="container mx-auto flex max-w-4xl items-center justify-center gap-x-1 px-8 py-6">
        <Copyright className="w-4" />
        <span>2024 김개발. All rights reserved.</span>
      </div>
    </footer>
  );
}
