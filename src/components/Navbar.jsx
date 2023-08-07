import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/PuppyForm">Add A Puppy</Link>
    </nav>
  );
};

export default Navbar;
