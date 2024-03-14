import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Homepage from "./routes/Homepage";
import ProductsPage from "./routes/ProductsPage";
import RootLayout from "./routes/RootLayout";
import ErrorPage from "./routes/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { path: "/", element: <Homepage /> },
      { path: "/products", element: <ProductsPage /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
