import { useState, useEffect } from "react";
import { RouterProvider } from "react-router-dom";
import "./App.css";
import { useFetch } from "./useFetch";
import Posts from "./pages/Posts";

// Pages
import CreatePost from "./pages/CreatePost";

// Router
import { router } from "./routerConfig";

function App() {
  return (
    <RouterProvider router={router}>
      <div className="App">
        <CreatePost />
        <Posts />
      </div>
    </RouterProvider>
  );
}

export default App;
