import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Homepage from "./routes/Homepage";
import ProductsPage from "./routes/ProductsPage";


const router = createBrowserRouter([
  { path: '/', element: <Homepage /> },
  { path: '/products', element: <ProductsPage /> }
])


function App() {
  return <RouterProvider router={router} />;
}

export default App;
