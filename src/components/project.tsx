import Image from 'next/image';
import Link from 'next/link';

export function Project() {
  const myProject = [
    {
      name: '전자상거래 플랫폼',
      stack: ['React', 'Node.js', 'Express', 'MongoDB'],
      image:
        'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&fm=jpg&q=60&w=3000',
    },
    {
      name: '작업 관리 앱',
      stack: ['React', 'Redux', 'Drag and Drop', 'Firebase'],
      image:
        'https://images.unsplash.com/photo-1485819665514-881a8f294f7a?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&fm=jpg&q=60&w=3000',
    },
    {
      name: '포트폴리오 웹사이트',
      stack: ['HTML', 'CSS', 'JavaScript'],
      image:
        'https://images.unsplash.com/photo-1483058712412-4245e9b90334?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      name: '블로그 플랫폼',
      stack: ['Next.js', 'Tailwind CSS', 'Markdown'],
      image:
        'https://images.unsplash.com/photo-1505330622279-bf7d7fc918f4?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&fm=jpg&q=60&w=3000',
    },
  ];
  return (
    <section id="프로젝트" className="mt-16">
      <h2 className="mb-4 text-3xl font-bold">프로젝트</h2>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {myProject.map((el, idx) => (
          <div
            key={`${el}_${idx}`}
            className="flex flex-col overflow-hidden rounded-xl bg-gray-100 shadow-lg transition duration-300 hover:scale-105 dark:bg-gray-800"
          >
            <Image
              src={el.image}
              alt={el.name}
              width={0}
              height={0}
              className="h-48 w-full flex-none object-cover"
              unoptimized
            />
            <div className="flex-1 px-8 py-6">
              <h3 className="mb-4 text-xl font-bold">{el.name}</h3>

              <div className="mb-4 flex gap-x-2">
                {el.stack.map((stack, sIdx) => (
                  <div
                    key={`${stack}_${sIdx}`}
                    className="shrink-0 rounded-lg border border-gray-400 bg-gray-200 px-2 py-1 text-xs text-gray-600 dark:bg-gray-700 dark:text-gray-300"
                  >
                    {stack}
                  </div>
                ))}
              </div>

              <div className="flex gap-x-2">
                <Link href={''} className="rounded-lg bg-gray-800 px-2 py-1 text-sm text-white">
                  GitHub
                </Link>
                <Link href={''} className="rounded-lg bg-blue-600 px-2 py-1 text-sm text-white">
                  라이브 데모
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
