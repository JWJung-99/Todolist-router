import { RouterProvider } from "react-router-dom";
import router from "./routes";

// For Lazy-loading
// import router from "./routes-lazy";
// import { Suspense } from "react";
// import { ReactCsspin } from "react-csspin";
// import 'react-csspin/dist/style.css';

function App() {
  return (
    // <Suspense fallback={<ReactCsspin message="로딩중..." color="bisque" />}>
    <RouterProvider router={router} />
    // </Suspense>
    
  );
}

export default App;