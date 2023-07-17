import { useQuery } from "@tanstack/react-query";
import { getNotes } from "../../services/apiNotes";

function useNotes() {
  const {
    isLoading,
    data: notes,
    error,
  } = useQuery({
    queryKey: ["notes"],
    queryFn: getNotes,
  });
  return { isLoading, error, notes };
}

export default useNotes;
