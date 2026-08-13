import { PageHeader } from "@/components/page-header";
import { ProjectCard } from "@/components/project-card";
import { ScreenLayout } from "@/components/screen-layout";
import { projects } from "@/data/portfolio";

export default function ProjectsScreen() {
  return (
    <ScreenLayout>
      <PageHeader
        title="Projects"
        subtitle="Here are a few projects I built:"
      />

      {projects.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </ScreenLayout>
  );
}
