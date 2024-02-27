import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page" className="mt-64">
      <h1 className="text-5xl">Oops!</h1>
      <p className="mt-7 text-xl">Sorry, an unexpected error has occurred😒</p>
      <p>
        <i>{error.statusText || error.message}</i>  
      </p>
    </div>
  );
}