/* eslint-disable @typescript-eslint/no-explicit-any */
import { getStoredNotes, storeNotes } from "~/data/notes";
import NewNote from "../components/NewNote";
import { redirect } from "@remix-run/react";


export default function Notes() {
  return (
    <main className="bg-gradient-to-b from-purple-600 to-purple-400 h-screen flex flex-col items-center py-10 text-white gap-7">
      <NewNote />
    </main>
  )
}

export const action = async ({request}: any) => {
  const formData = await request.formData()
  const noteData = Object.fromEntries(formData)
  const existingNotes = await getStoredNotes()
  noteData.id = new Date().toISOString()

  const updatedNotes = existingNotes.concat(noteData)
  await storeNotes(updatedNotes)

  return redirect('/notes')
} 