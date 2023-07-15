import { useMutation, useQueryClient } from "@tanstack/react-query";
import { signin as signinApi } from "../../services/apiAuth";
import { useNavigate } from "react-router-dom";

export function useSignin() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { mutate: signin, isLoading } = useMutation({
    mutationFn: ({ email, password }) => signinApi({ email, password }),
    onSuccess: (user) => {
      queryClient.setQueryData(["user"], user.user);
      navigate("/admin", { replace: true });
    },
    onError: (err) => {
      console.log("ERROR", err);
      alert.error("Looking for Byron?");
    },
  });

  return { signin, isLoading };
}
