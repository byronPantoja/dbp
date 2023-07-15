import Signout from "../features/authentication/Signout";

function Admin() {
  return (
    <div className="flex justify-center gap-10 align-middle">
      <p>Hello Byron</p>

      <Signout />
    </div>
  );
}

export default Admin;
