
import React from "react";
import { Link } from "react-router-dom";
import Button from './Button'

function Nav() {
  return (
    <div>
      <Link to="/">
        <Button>main</Button>
      </Link>
      <Link to="/editor">
        <Button>editor</Button>
      </Link>
      <Link to="/roller">
        <Button>roller</Button>
      </Link>
      <Link to="/windmill">
        <Button>windmill</Button>
      </Link>
    </div>
  );
}

export default Nav;