import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import App from '../App';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "sub_app_1",
        element: <div>{'sub_app_1'}</div>,
      },
      {
        path: "sub_app_2",
        element: <div>{'sub_app_2'}</div>,
      },
    ],
  },
]);

export default router;