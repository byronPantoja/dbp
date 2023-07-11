function Home() {
  return (
    <section className="isolate overflow-hidden bg-white px-6 lg:px-8">
      <section className="isolate overflow-hidden bg-white px-6 lg:px-8">
        <div className="mx-auto max-w-2xl px-4 py-24 sm:px-6 sm:py-32 lg:max-w-7xl lg:px-8">
          <div className="grid grid-cols-1 gap-x-8 gap-y-8 lg:grid-cols-2">
            <div>
              <div className="border-b border-gray-200 pb-10">
                <h2 className="font-medium text-gray-500">
                  Hi, my name is Byron. I'm a Front End
                </h2>
                <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                  <span className="font-semibold text-[#FF8482] hover:text-[#564FC1]">
                    React Developer
                  </span>
                </p>
                <div className="mt-3">techicons</div>
              </div>
              <p className="mt-16 text-base leading-7 text-gray-600">
                I love transforming ideas into user-friendly web applications
                using React's component-based architecture. I thrive on
                collaborating with others, constantly learning, and staying up
                to date with the latest trends and best practices. I'm eager to
                join a team where I can contribute my skills, learn from
                experienced professionals, and make a meaningful impact through
                my work. Let's connect and build incredible experiences
                together!
              </p>
              <div className="mt-3">Social Icons</div>
            </div>
            <div className="w-16 grid-cols-2 lg:row-span-4 lg:w-72">
              <img
                src="avatar.jpg"
                alt="Byron Pantoja - Front End React Developer"
                className="rounded-xl bg-indigo-50 lg:rounded-3xl"
              />
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}

export default Home;
