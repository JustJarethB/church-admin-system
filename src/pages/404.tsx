import { Link, useNavigate } from "react-router-dom";

export const Error404 = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <h1 className="text-2xl pb-16 font-bold">Whoops!</h1>
      <p>Looks like something didn't quite go to plan.</p>
      <p>If you got here by a link, please let us know.</p>
      <p className="py-2 text-secondary font-bold" onClick={() => navigate(-1)}>
        Take me back
      </p>
      <Link className="py-2 text-primary-light font-bold" to={"/"}>
        Take me home
      </Link>
    </div>
  );
};
