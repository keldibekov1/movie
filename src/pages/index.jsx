import { lazy } from "react";

import { Suspense } from "@/utils";
import { useRoutes } from "react-router-dom";
import { Loading } from "@/utils";
import NotFound from "./notfound/Notfound";
import Login from "./login/Login";
const Home = lazy(() => import("@/pages/home/Home"));
const Movies = lazy(() => import("@/pages/movies/Movies"));
const Saved = lazy(() => import("@/pages/saved/Saved"));
const Search = lazy(() => import("@/pages/search/Search"));
const Layout = lazy(() => import("./layout/Layout"));
const Singlemovie = lazy(() => import("./single-movie/Singlemovie"));

const MainRoutes = () => {
  return useRoutes([
    {
      path: "/",
      element: (
        <Suspense>
          <Layout />
        </Suspense>
      ),
      children: [
        {
          path: "/",
          element: (
            <Suspense>
              <Home />
            </Suspense>
          ),
        },
        {
          path: "/movies",
          element: (
            <Suspense>
              <Movies />
            </Suspense>
          ),
        },
        {
          path: "/saved",
          element: (
            <Suspense>
              <Saved />
            </Suspense>
          ),
        },
        {
          path: "/search",
          element: (
            <Suspense>
              <Search />
            </Suspense>
          ),
        },
        {
          path: "*",
          element: (
            <Suspense fallback={<Loading />}>
              <NotFound />
            </Suspense>
          ),
        },
        {
          path: "/movie/:id",
          element: (
            <Suspense>
              <Singlemovie />
            </Suspense>
          ),
        },
        {
          path: "/login",
          element: (
            <Suspense>
              <Login />
            </Suspense>
          ),
        },
      ],
    },
  ]);
};

export default MainRoutes;
