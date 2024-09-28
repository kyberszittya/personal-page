// app/projects/page.tsx

import Navbar from '@/components/Navbar';
import Link from 'next/link';

const projectList = [
  {
    id: 'himeko',
    title: 'Himeko Hypergaph',
    description: 'Hypergraph description and tensor transformation.',
  },
  {
    id: 'project-2',
    title: 'Project 2',
    description: 'This is a short description for project 2.',
  },
  {
    id: 'project-3',
    title: 'Project 3',
    description: 'This is a short description for project 3.',
  },
];

export default function ProjectsPage() {
  return (
    <div className="text-gray-300 bg-gray-900 min-h-screen flex flex-col justify-between">
      <Navbar />
      <div className="container mx-auto py-8">
          
          <main className="max-w-5xl mx-auto p-8 flex-grow">
              <h1 className="text-4xl font-bold mb-6 text-center">My Projects</h1>
              <ul className="space-y-4">
                  {projectList.map((project) => (
                  <li
                      key={project.id}
                      className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow duration-300"
                  >
                      <h2 className="text-2xl font-semibold">{project.title}</h2>
                      <p className="text-gray-700 mb-4">{project.description}</p>
                      <Link
                      href={`/projects/${project.id}`}
                      className="text-blue-600 hover:underline"
                      >
                      View Project →
                      </Link>
                  </li>
                  ))}
              </ul>
          </main>
      </div>
    </div>
  );
}