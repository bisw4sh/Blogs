import { Outlet, Link } from "react-router-dom";

export default function Navbar(): JSX.Element {
  return (
    <>
      <nav className="w-full flex justify-between items-center text-lg ">
        <div className="font-semibold cursor-pointer">
          <Link to="/">
            <span className="text-2xl font-bold text-teal-400">B</span>logs
          </Link>
        </div>
        <ul className="flex gap-3 capitalize">
          <Link to="/contact">
            <li className="cursor-pointer">Contact</li>
          </Link>
          <Link to="/login">
            <li className="cursor-pointer">Login</li>
          </Link>
        </ul>
      </nav>
      <Outlet />
    </>
  );
}
