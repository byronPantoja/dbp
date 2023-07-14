import { NavLink } from "react-router-dom";
import useProjects from "../hooks/useProjects";
import github from "./../images/github.svg";
import vercel from "./../images/vercel.svg";
import complete from "./../images/complete.svg";
import { format } from "date-fns";

function ProjectsCard() {
  const { isLoading, projects } = useProjects();
  if (isLoading) return <p>Loading....</p>;

  return (
    <section className="bg-fill-background isolate min-h-full overflow-hidden">
      <div className="mt-10 grid grid-cols-1 gap-6 space-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16">
        {projects.map((project) => (
          <div
            key={project.id}
            className="grid gap-6 sm:grid-cols-1 lg:grid-cols-2"
          >
            <div>
              <div className="group relative">
                <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                  <NavLink to={project.link}>
                    <span className="absolute inset-0" />
                    {project.name}
                  </NavLink>
                </h3>
                <p className="my-5 line-clamp-3 text-sm leading-6 text-gray-600">
                  {project.description}
                </p>
                <p className="text-xs">
                  {" "}
                  Started on{" "}
                  {format(new Date(project.startDate), "EEE, MMM dd yyyy, p")}
                </p>
                <p className="text-xs">
                  {" "}
                  Completed on{" "}
                  {format(new Date(project.endDate), "EEE, MMM dd yyyy, p")}
                </p>
              </div>

              <ul className="grid-cols-1 pt-10 text-xs">
                <li className="my-3">
                  <div className="flex items-center justify-start gap-8">
                    <img
                      src={complete}
                      alt="Project Complete"
                      aria-hidden="true"
                      className="h-6 w-6"
                    />
                    <p>Project Status:</p>
                    <h3>{project.status}</h3>
                  </div>
                </li>
                <li className="my-3">
                  <NavLink
                    to={projects.demo}
                    className="flex items-center justify-start gap-8"
                  >
                    <img
                      src={github}
                      alt="github"
                      aria-hidden="true"
                      className="h-6 w-6"
                    />
                    <p>{project.repo}</p>
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to={projects.demo}
                    className="flex items-center justify-start gap-8"
                  >
                    <img
                      src={vercel}
                      alt="vercel"
                      aria-hidden="true"
                      className="h-6 w-6"
                    />
                    <p>{project.demo}</p>
                  </NavLink>
                </li>
              </ul>
            </div>
            <div>
              <img src={`${project.featuredImage}`} alt="test" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ProjectsCard;
