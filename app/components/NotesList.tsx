/* eslint-disable @typescript-eslint/no-explicit-any */
export default function NotesList({notes}: any) {
  return (
    <ul className="flex gap-2">
        {notes.map((note: any, index: any) => (
            <li key={index} className="bg-purple-700 text-white px-4 py-2 rounded-md w-[250px]">
                <article className="flex flex-col gap-3">
                    <header className=" flex flex-col">
                        <ul className="flex  justify-between border-b-[1px] border-white my-3 pb-3">
                            <li>
                                #{index + 1}
                            </li>
                            <li>
                                <time dateTime={note.id}>
                                    {new Date(note.id).toLocaleDateString('en-US', {
                                        day: 'numeric',
                                        month: 'short',
                                        year: 'numeric',
                                        hour: '2-digit',
                                        minute: '2-digit'
                                    })}
                                </time>
                            </li>
                        </ul>
                        <h2 className="text-lg font-semibold">{note.title}</h2>
                    </header>
                    <p>{note.content}</p>
                </article>
            </li>
        ))}
    </ul>
  )
}