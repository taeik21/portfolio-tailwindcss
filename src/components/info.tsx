export function Info() {
  return (
    <section id="소개" className="mt-16">
      <h2 className="mb-4 text-3xl font-bold">소개</h2>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <div className="rounded-xl bg-gray-100 p-6 shadow-md transition duration-300 hover:scale-105 dark:bg-gray-800">
          <h3 className="mb-4 text-xl font-bold">🧑‍🎓 교육 및 활동</h3>
          <ul className="space-y-2 dark:text-gray-300">
            <li>👉 2023 프론트엔드 개발자 인턴십 (ABC Tech)</li>
            <li>👉 2022 웹 개발 부트캠프 수료 (XYZ Coding School)</li>
            <li>👉 2021 오픈소스 프로젝트 참여 (오픈소스 커뮤니티)</li>
            <li>👉 2020 대학 동아리 웹 개발 팀장 활동</li>
          </ul>
        </div>
        <div className="rounded-xl bg-gray-100 p-6 shadow-md transition duration-300 hover:scale-105 dark:bg-gray-800">
          <h3 className="mb-4 text-xl font-bold">📚 자격증</h3>
          <ul className="space-y-2 dark:text-gray-300">
            <li>👉 2023 정보처리기사</li>
            <li>👉 2022 AWS Certified Solutions Architect</li>
            <li>👉 2021 자바 프로그래밍 1급</li>
            <li>👉 2020 웹디자인 기능사</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
