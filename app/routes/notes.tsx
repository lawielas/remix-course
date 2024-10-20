import NewNote from "../components/NewNote";


export default function Notes() {
  return (
    <main className="bg-gradient-to-b from-purple-600 to-purple-400 h-screen flex flex-col items-center py-10 text-white gap-7">
      <NewNote />
    </main>
  )
}