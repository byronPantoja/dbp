import { useQuery } from "@tanstack/react-query";
import { getProjects } from "../services/apiProjects";

function useProjects() {
  const {
    isLoading,
    data: projects,
    error,
  } = useQuery({
    queryKey: ["projects"],
    queryFn: getProjects,
  });
  return { isLoading, error, projects };
}

export default useProjects;
