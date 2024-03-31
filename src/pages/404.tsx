import { Link } from "react-router-dom";

export const Error404 = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <h1 className="text-2xl pb-16 font-bold">Whoops!</h1>
      <p>Looks like something didn't quite go to plan.</p>
      <p>If you got here by a link, please let us know.</p>
      <Link className="py-2 text-primary-light font-bold" to="/">
        Take me home
      </Link>
    </div>
  );
};
