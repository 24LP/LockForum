import React from "react";
import { NavLink } from "react-router-dom";

export default function Home() {
  return (
    <div className="home">
      <h2>Welcome Home!</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur a
        accusantium nostrum eveniet quisquam molestiae nulla, quasi magni dolore
        possimus esse expedita aspernatur consequuntur necessitatibus nesciunt,
        doloribus ad alias. Perspiciatis.
      </p>
      <br />
      <nav className="home-buttons">
        <NavLink to="create">Create Post!</NavLink>
        <NavLink to="posts">See Posts!</NavLink>
      </nav>
    </div>
  );
}
