import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import Homepage from "./routes/Homepage";
import ProductsPage from "./routes/ProductsPage";
import RootLayout from "./routes/RootLayout";

// const routeDefinitions = createRoutesFromElements(
//   <Route>
//     <Route path="/" element={<Homepage />}/>
//     <Route path="/products" element={<ProductsPage />}/>
//   </Route>
// )

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { path: "/", element: <Homepage /> },
      { path: "/products", element: <ProductsPage /> },
    ],
  },
]);

// const router = createBrowserRouter(routeDefinitions)

function App() {
  return <RouterProvider router={router} />;
}

export default App;
