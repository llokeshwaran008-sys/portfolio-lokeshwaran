// components/SystemCapabilities.jsx
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaPython, FaDatabase, FaGitAlt, FaGithub } from 'react-icons/fa';

const categories = [
  {
    title: 'Frontend',
    items: [
      { name: 'HTML', icon: <FaHtml5 className="text-3xl" /> },
      { name: 'CSS', icon: <FaCss3Alt className="text-3xl" /> },
      { name: 'JS', icon: <FaJs className="text-3xl" /> },
      { name: 'React', icon: <FaReact className="text-3xl text-blue-500" /> },
    ],
  },
  {
    title: 'Backend',
    items: [
      { name: 'Python', icon: <FaPython className="text-3xl text-yellow-600" /> },
      { name: 'Django', icon: <FaPython className="text-3xl text-yellow-600" /> },
      { name: 'MySQL', icon: <FaDatabase className="text-3xl text-blue-700" /> },
      { name: 'Supabase', icon: <FaDatabase className="text-3xl text-pink-600" /> },
    ],
  },
  {
    title: 'Tools',
    items: [
      { name: 'Git', icon: <FaGitAlt className="text-3xl text-orange-600" /> },
      { name: 'GitHub', icon: <FaGithub className="text-3xl" /> },
    ],
  },
];

export default function SystemCapabilities() {
  return (
    <div className="max-w-6xl mx-auto px-4">
      <h2 className="text-3xl font-bold text-center mb-12 text-primary">System Capabilities</h2>
      <div className="grid gap-8 md:grid-cols-3">
        {categories.map((cat) => (
          <div key={cat.title} className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 text-center">
            <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-200">{cat.title}</h3>
            <ul className="space-y-3">
              {cat.items.map((item) => (
                <li key={item.name} className="flex items-center justify-center space-x-2">
                  {item.icon}
                  <span className="text-gray-700 dark:text-gray-300">{item.name}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
