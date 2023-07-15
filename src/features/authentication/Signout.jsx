import { useSignout } from "./useSignout";

function Signout() {
  const { signout, isLoading } = useSignout();
  return (
    <button
      type="button"
      className="rounded-full bg-white px-2.5 py-1 text-xs font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
      disabled={isLoading}
      onClick={signout}
    >
      {!isLoading ? "Sign Out" : "See ya!"}
    </button>
  );
}

export default Signout;
