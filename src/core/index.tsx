import { RouterProvider } from "react-router-dom";

import Router from "~/core/router";

const router = Router();

const Core = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default Core;
