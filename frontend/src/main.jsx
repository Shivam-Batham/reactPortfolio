import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import { DarkmodeProvider } from "./Components/context/Darkmode.jsx";
const Hero = React.lazy(() => import("./Components/Hero/Hero"));
const ProjectsContainer = React.lazy(() =>
  import("./Components/Projects/ProjectsContainer")
);
const App = React.lazy(() => import("./App"));
const Contactme = React.lazy(() => import("./Components/Contactme/Contactme"));
const Skills = React.lazy(() => import("./Components/Skills/Skills"));
import Loader from "./Components/Loader/PreLoader.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route
      path="/"
      element={
        <Suspense fallback={<Loader/>}>
          <App />
        </Suspense>
      }
    >
      <Route
        path=""
        element={
          <Suspense fallback={<Loader/>}>
            <Hero />
          </Suspense>
        }
      />
      <Route
        path="contactme"
        element={
          <Suspense fallback={<Loader/>}>
            <Contactme />
          </Suspense>
        }
      />
      <Route
        path="skills"
        element={
          <Suspense fallback={<Loader/>}>
            <Skills />
          </Suspense>
        }
      />
      <Route
        path="projects"
        element={
          <Suspense fallback={<Loader/>}>
            <ProjectsContainer />
          </Suspense>
        }
      />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <DarkmodeProvider>
      <RouterProvider router={router} />
    </DarkmodeProvider>
  </React.StrictMode>
);
