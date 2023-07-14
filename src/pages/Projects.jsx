import ProjectsCard from "../ui/ProjectsCard";

function Projects() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Projects
        </h2>
        <ProjectsCard />
      </div>
    </div>
  );
}

export default Projects;
