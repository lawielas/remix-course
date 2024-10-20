export default function NewNote() {
    return (
      <form method="post" className="bg-purple-50 rounded-md flex flex-col gap-3 w-[500px] items-center py-6">
          <p className="flex flex-col items-center gap-2 w-[70%]">
              <label htmlFor="title" className="text-black">Title</label>
              <input type="text" id="title" required className="bg-purple-200 w-full" />
          </p>
          <p className="flex flex-col items-center gap-2 w-[70%]">
              <label htmlFor="content" className="text-black">Content</label>
              <textarea id="content" rows={5} className="bg-purple-200 w-full"></textarea>
          </p>
          <div>
              <button className="bg-purple-200 text-black px-6 py-3 rounded-full">Add Note</button>
          </div>
      </form>
    )
  }