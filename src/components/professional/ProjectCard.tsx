type Project = {
  title: string;
  slug: string;
  description: string;
  tech: string[];
  image: string;
  url: string;
  date: string;
};

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <a target="_blank" href={project.url}>
        <div className="bg-white shadow rounded p-4">
        <img src={project.image} alt={project.title} className="rounded mb-2" />
        <h2 className="text-xl font-bold">{project.title}</h2>
        <p className="text-sm text-gray-600">{project.description}</p>
        <div className="text-xs mt-2">{project.tech.join(', ')}</div>
        </div>
    </a>
  );
}