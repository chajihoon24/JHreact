import { createBrowserRouter } from "react-router-dom"
import { Suspense, lazy } from "react";
import ListPage from "../pages/todo/ListPage";
import todoRouter from "./todoRouter";

const Loading = <div><span className="mx-auto">Loading...</span></div>

const Main = lazy(() => import("../pages/MainPage"))
const About = lazy(() => import("../pages/AboutPage"))
const TodoIndex = lazy(() => import("../pages/todo/IndexPage"))
const TodoList = lazy(()=> import("../pages/todo/ListPage"))


const root = createBrowserRouter([
    {
        path: "",
        element: <Suspense fallback={Loading}><Main /></Suspense>

    },
    {
        path: "about",
        element: <Suspense fallback={Loading}><About /></Suspense>
    },
    {
        path: "todo",
        element: <Suspense fallback={Loading}><TodoIndex /></Suspense>,
        children: todoRouter()
    }


])

export default root;