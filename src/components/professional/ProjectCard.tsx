import DetailItem from "../ui/DetailItem";

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
    <a target="_blank" href={project.url} className="border rounded-md p-3 block">
      <img src={project.image} alt={project.title} className="rounded mb-4" />

      <div className="pl-2 pr-2">
        <div className="grid grid-cols-2">
          <DetailItem title={"Website"} description={project.url} />
          <DetailItem title={"Date"} description={project.date} align="text-right" />
        </div>
        <DetailItem title={"Key tech"} description={project.tech.join(', ')} />
        <DetailItem title={"Description"} description={project.description} />
      </div>
    </a>
  );
}