import {
  faCss3Alt,
  faHtml5,
  faNode,
  faReact,
  faSquareJs,
  faVuejs,
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export function Skill() {
  const mySkill = [
    { name: 'HTML5', icon: faHtml5, color: 'text-red-500' },
    { name: 'CSS3', icon: faCss3Alt, color: 'text-blue-500' },
    { name: 'JavaScript', icon: faSquareJs, color: 'text-yellow-500' },
    { name: 'React', icon: faReact, color: 'text-blue-500' },
    { name: 'Vue.js', icon: faVuejs, color: 'text-green-500' },
    { name: 'Node.js', icon: faNode, color: 'text-green-500' },
  ];

  return (
    <section id="기술" className="mt-16">
      <h2 className="mb-4 text-3xl font-bold">기술</h2>
      <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
        {mySkill.map((el, idx) => (
          <div
            key={`${el}_${idx}`}
            className="flex flex-col items-center gap-y-2 rounded-xl bg-gray-100 p-6 font-bold shadow-md transition duration-300 hover:scale-110 dark:bg-gray-800"
          >
            <FontAwesomeIcon icon={el.icon} className={`text-4xl ${el.color}`} />
            <p className="text-xl font-bold">{el.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
