import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

// Pages
import Home from "./pages/Home";
import Posts from "./pages/Posts";
import Review from "./pages/Review";
import CreatePost from "./pages/CreatePost";

// Layouts
import RootLayout from "./layouts/RootLayout";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="posts" element={<Posts />} />
      <Route path="create" element={<CreatePost />} />
      <Route path="posts/:slug" element={<Review />} />
    </Route>
  )
);
