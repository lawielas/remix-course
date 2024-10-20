import { NavLink } from "@remix-run/react";

export default function MainNavigation() {
  return (
    <nav className="flex justify-center py-3 bg-purple-800 text-white">
        <ul className="flex gap-4">
            <li>
                <NavLink to={"/"} className="active:text-yellow-600 hover:text-yellow-300">Home</NavLink>
            </li>
            <li>
                <NavLink to={'/notes'} className="hover:text-yellow-300">My Notes</NavLink>
            </li>
        </ul>
    </nav>
  )
}