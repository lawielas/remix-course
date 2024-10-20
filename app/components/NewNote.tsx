export default function NewNote() {
    return (
      <form method="post" className="bg-purple-50 rounded-md flex flex-col gap-3 w-[500px] items-center py-6 text-black">
          <p className="flex flex-col items-center gap-2 w-[70%]">
              <label htmlFor="title" className="text-black">Title</label>
              <input type="text" id="title" name="title" required className="bg-purple-200 w-full p-2" />
          </p>
          <p className="flex flex-col items-center gap-2 w-[70%]">
              <label htmlFor="content" className="text-black">Content</label>
              <textarea id="content" rows={5} name="content" className="bg-purple-200 w-full p-2"></textarea>
          </p>
          <div>
              <button className="bg-purple-200 text-black px-6 py-3 rounded-full">Add Note</button>
          </div>
      </form>
    )
  }