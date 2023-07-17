import { Link, NavLink } from "react-router-dom";
import useNotes from "./useNotes";

function NotesList() {
  const { isLoading, notes } = useNotes();
  if (isLoading) return <p>Loading....</p>;

  return (
    <>
      {notes.map((note) => (
        <article
          key={note.id}
          className="relative isolate flex flex-col gap-8 lg:flex-row"
        >
          <div className="lg:aspect-square relative aspect-[16/9] sm:aspect-[2/1] lg:w-64 lg:shrink-0">
            <time dateTime={note.createdAt} className="text-gray-500">
              {note.creatAt}
            </time>
          </div>
          <div>
            <div className="flex items-center gap-x-4 text-xs">
              <Link
                to="/notes"
                className="relative z-10 rounded-full py-1.5 pr-3 font-medium text-grey-dark hover:text-pink-main"
              >
                {note.tags}
              </Link>
            </div>
            <div className="group relative max-w-xl">
              <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                <NavLink to="/notes">
                  <span className="absolute inset-0" />
                  {note.title}
                </NavLink>
              </h3>
              <p className="mt-5 text-sm leading-6 text-gray-600">
                {note.content}
              </p>
            </div>
            <div className="mt-5 flex border-b border-gray-900/5 pt-6">
              <div className="relative mb-5 flex items-center gap-x-4">
                <NavLink to="/">
                  <span className="text-sm text-grey-darker">Read More...</span>
                </NavLink>
              </div>
            </div>
          </div>
        </article>
      ))}
    </>
  );
}

export default NotesList;
