import { createBrowserRouter } from "react-router-dom";
import Layout from "@components/Layout";
import ErrorPage from "@pages/ErrorPage";
import Home from "@pages/Home";
import About from "@pages/About";
import TodoAdd from "@pages/TodoAdd";
import TodoDetail from "@pages/TodoDetail";
import TodoEdit from "@pages/TodoEdit";
import TodoList from "@pages/TodoList";


const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Home /> },
      { path: 'home', element: <Home /> },
      { path: 'about', element: <About /> },
      { path: 'add', element: <TodoAdd /> },
      { path: 'list/:_id', element: <TodoDetail /> },
      { path: 'list/:_id/edit', element: <TodoEdit /> },
      { path: 'list', element: <TodoList /> }
    ]
  }
]);


export default router;