import { Navigate, createBrowserRouter } from "react-router-dom";
import { lazy } from "react";

import Layout from "@components/Layout";
import Home from "@pages/Home";

const ErrorPage = lazy(() => import('@pages/ErrorPage'));
const About = lazy(() => import('@pages/About'));
const TodoAdd = lazy(() => import('@pages/TodoAdd'));
const TodoDetail = lazy(() => import('@pages/TodoDetail'));
const TodoEdit = lazy(() => import('@pages/TodoEdit'));
const TodoList = lazy(() => import('@pages/TodoList'));

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Navigate to="/home" /> },
      { path: 'home', element: <Home /> },
      { path: 'about', element: <About /> },
      { path: 'add', element: <TodoAdd /> },
      { 
        path: 'list/:_id',
        element: <TodoDetail />,
        children: [
          { path: 'edit', element: <TodoEdit /> },
        ]
      },
      { path: 'list', element: <TodoList /> }
    ]
  }
]);


export default router;