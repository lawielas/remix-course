/* eslint-disable @typescript-eslint/no-explicit-any */
import { getStoredNotes, storeNotes } from "~/data/notes";
import NewNote from "../components/NewNote";
import { redirect, useLoaderData } from "@remix-run/react";
import NotesList from "~/components/NotesList";


export default function Notes() {

  const notes = useLoaderData()
  return (
    <main className="bg-gradient-to-b from-purple-600 to-purple-400 h-screen flex flex-col items-center py-10 text-white gap-7">
      <NewNote  />
      <NotesList notes={notes} />
    </main>
  )
}

export async function loader() {
  const notes = await getStoredNotes()
  return notes
}

export async function action ({request}: any) {
  const formData = await request.formData()
  const noteData = Object.fromEntries(formData)
  const existingNotes = await getStoredNotes()
  noteData.id = new Date().toISOString()

  const updatedNotes = existingNotes.concat(noteData)
  await storeNotes(updatedNotes)

  return redirect('/notes')
} 