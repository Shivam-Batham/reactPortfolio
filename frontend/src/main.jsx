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

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route
      path="/"
      element={
        <Suspense fallback={"Loading...."}>
          <App />
        </Suspense>
      }
    >
      <Route
        path=""
        element={
          <Suspense fallback={"Loading..."}>
            <Hero />
          </Suspense>
        }
      />
      <Route
        path="contactme"
        element={
          <Suspense fallback={"Loading..."}>
            <Contactme />
          </Suspense>
        }
      />
      <Route
        path="skills"
        element={
          <Suspense fallback={"Loading..."}>
            <Skills />
          </Suspense>
        }
      />
      <Route
        path="projects"
        element={
          <Suspense fallback={"Loading..."}>
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
