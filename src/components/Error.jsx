import { Link, useRouteError } from "react-router-dom";

const Error = () => {
  const err = useRouteError();

  return (
    <div className="flex flex-col justify-evenly items-center h-screen">
      <div className="flex flex-col justify-center items-center gap-4 ">
        <div className="text-6xl text-amber-600">Ye kya ho gaya?</div>
        <div className="text-2xl">Chalo Wapis Chalte</div>
        <Link to="/">
          <div className="rounded bg-amber-600 text-xl px-4 py-2">Wapis</div>
        </Link>
      </div>

      <div className="text-amber-600">
        {err.status} : {err.statusText}
      </div>
    </div>
  );
};

export default Error;
