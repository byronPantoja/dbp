import NotesList from "../features/notes/NotesList";

function Notes() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:max-w-4xl">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Notes
          </h2>
          <div className="mt-16 space-y-20 lg:mt-20 lg:space-y-20">
            <NotesList />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Notes;
