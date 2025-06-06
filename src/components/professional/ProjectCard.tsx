import DetailItem from "../ui/DetailItem";

type Project = {
  title: string;
  slug: string;
  description: string;
  tech: string[];
  image: string;
  url: string;
  date: string;
  credits: string;
};

export default function ProjectCard({ project }: { project: Project }) {

  return (
    <a target="_blank" href={project.url} className="border rounded-md p-3 block hover:shadow-xl transition-shadow">
      <img src={project.image} alt={project.title} className="rounded mb-4 aspect-video border" />

      <div className="pl-2 pr-2">
        <div className="grid grid-cols-2">
          <DetailItem size="small" title="Website" weight="bold" description={project.url.replace(/https?:\/\/(www\.)?/, "")} />
          <DetailItem size="small" title="Date" weight="bold" description={project.date} align="text-right" />
        </div>
        <DetailItem size="small" title="Key tech" weight="bold" description={project.tech.join(', ')} />
        <DetailItem size="small" title="Description" weight="bold" description={project.description} />
        <DetailItem size="small" title="Credits" weight="bold" description={project.credits} />
      </div>
    </a>
  );
}