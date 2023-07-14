const posts = [
  {
    id: 1,
    postTitle: "Test",
    href: "#",
    description: "test description",
    imageUrl:
      "https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3603&q=80",
    date: "Mar 16, 2020",
    datetime: "2020-03-16",
    tags: { title: "Marketing", href: "#" },
  },
];

function Notes() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:max-w-4xl">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Notes
          </h2>
          <div className="mt-16 space-y-20 lg:mt-20 lg:space-y-20">
            {posts.map((post) => (
              <article
                key={post.id}
                className="relative isolate flex flex-col gap-8 lg:flex-row"
              >
                <div className="lg:aspect-square relative aspect-[16/9] sm:aspect-[2/1] lg:w-64 lg:shrink-0">
                  <time dateTime={post.datetime} className="text-gray-500">
                    {post.date}
                  </time>
                </div>
                <div>
                  <div className="flex items-center gap-x-4 text-xs">
                    <a
                      href={post.category.href}
                      className="relative z-10 rounded-full py-1.5 pr-3 font-medium text-grey-dark hover:text-pink-main"
                    >
                      {post.category.postTitle}
                    </a>
                  </div>
                  <div className="group relative max-w-xl">
                    <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                      <a href={post.href}>
                        <span className="absolute inset-0" />
                        {post.title}
                      </a>
                    </h3>
                    <p className="mt-5 text-sm leading-6 text-gray-600">
                      {post.description}
                    </p>
                  </div>
                  <div className="mt-5 flex border-b border-gray-900/5 pt-6">
                    <div className="relative mb-5 flex items-center gap-x-4">
                      <p className="text-sm text-grey-darker">Read More...</p>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Notes;
