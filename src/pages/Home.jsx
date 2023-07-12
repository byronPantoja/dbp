import REACT from "../ui/tech-icons/react-icon.svg";
import HTML from "../ui/tech-icons/html-icon.svg";
import CSS from "../ui/tech-icons/css-icon.svg";
import JS from "../ui/tech-icons/js-icon.svg";
import NODEJS from "../ui/tech-icons/nodejs-icon.svg";
import TAILWINDCSS from "../ui/tech-icons/tailwindcss-icon.svg";
import SUPABASE from "../ui/tech-icons/supabase-icon.svg";
import VITE from "../ui/tech-icons/vite-icon.svg";

const techStack = [
  {
    name: "react",
    svg: REACT,
  },
  {
    name: "tailwindcss",
    svg: TAILWINDCSS,
  },
  {
    name: "vite",
    svg: VITE,
  },
  {
    name: "nodejs",
    svg: NODEJS,
  },
  {
    name: "supabase",
    svg: SUPABASE,
  },
  {
    name: "css",
    svg: CSS,
  },
  {
    name: "js",
    svg: JS,
  },
  {
    name: "html",
    svg: HTML,
  },
];

function Home() {
  return (
    <section className="isolate overflow-hidden bg-fill-mainbg px-6 lg:px-8">
      <div className="mx-auto max-w-2xl px-4 py-24 sm:px-6 sm:py-32 lg:max-w-7xl lg:px-8">
        <div className="grid grid-cols-1 gap-x-8 gap-y-8 lg:grid-cols-2">
          <div>
            <div className=" pb-10">
              <span className="text-2xl font-medium text-gray-500">
                Hi, my name is Byron. I'm a Front End
              </span>
              <p className="mt-2 text-6xl font-bold tracking-tight text-grey-dark sm:text-5xl">
                <h1 className=" text-pink-main hover:text-blue-main sm:text-7xl lg:text-6xl">
                  React Developer
                </h1>
              </p>
              <div className="mt-4 flex max-w-sm">
                {techStack.map((icon) => (
                  <img
                    key={icon.name}
                    src={icon.svg}
                    alt={`${icon.name}-icon`}
                    className="h-[2rem] text-sm"
                  />
                ))}
              </div>
            </div>
            <p className="mt-20 pt-10 text-[11px] leading-7 text-grey-dark">
              I love transforming ideas into user-friendly web applications
              using React's component-based architecture. I thrive on
              collaborating with others, constantly learning, and staying up to
              date with the latest trends and best practices. I'm eager to join
              a team where I can contribute my skills, learn from experienced
              professionals, and make a meaningful impact through my work. Let's
              connect and build incredible experiences together!
            </p>
            <div className="mt-3">Social Icons</div>
          </div>
          <div className="w-17 lg:row-span-4 lg:w-[34rem] lg:pl-24">
            <img
              src="avatar.jpg"
              alt="Byron Pantoja - Front End React Developer"
              className="rounded-xl bg-indigo-50 lg:rounded-3xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
