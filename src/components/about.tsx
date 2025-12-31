import Image from 'next/image';

export function About() {
  return (
    <section id="홈" className="mt-24 flex flex-col items-center gap-y-4 md:flex-row md:gap-x-8">
      <Image
        src="https://api.dicebear.com/9.x/notionists-neutral/svg?seed=Adrian"
        alt="나의 이미지"
        width={0}
        height={0}
        className="w-48 flex-none rounded-full border-2 border-gray-200 object-cover"
        unoptimized
      />
      <div className="text-center md:text-right">
        <h2 className="mb-1 text-3xl font-bold">김개발</h2>
        <p className="mb-4 text-lg">혁신적인 개발자</p>
        <p className="leading-relaxed text-gray-500 dark:text-gray-400">
          5년 이상의 경력을 가진 열정적인 풀스택 개발자입니다. 확장 가능한 웹 애플리케이션 구축에
          전문성을 갖추고 있으며, 최신 JavaScript 프레임워크와 클라우드 기술에 대한 전문 지식을
          보유하고 있습니다. 항상 새로운 도전과 학습을 즐깁니다.
        </p>
      </div>
    </section>
  );
}
