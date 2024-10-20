import { Link } from "@remix-run/react";

export default function _index() {
  return (
    <main className="bg-gradient-to-b from-purple-600 to-purple-400 h-screen flex flex-col items-center py-10 text-white gap-7">
      <h1 className="text-3xl font-semibold">A better way of keeping track of your notes</h1>
      <p className="text-sm tracking-wider">Try our early beta and never lose track of your notes again!</p>
      <Link to={"/notes"} className="bg-orange-300 py-3 px-6 text-lg text-black rounded-md">Try Now!</Link>
    </main>
  )
}