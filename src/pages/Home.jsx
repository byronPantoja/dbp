import SocialLinks from "../ui/socials/SocialLinks";
import css3 from "./../images/css3.svg";
import html5 from "./../images/html5.svg";
import git from "./../images/git.svg";
import github from "./../images/github.svg";
import javascript from "./../images/javascript.svg";
import nodejs from "./../images/nodejs.svg";
import reactjs from "./../images/reactjs.svg";
import supabase from "./../images/supabase.svg";
import tailwindcss from "./../images/tailwindcss.svg";
import vite from "./../images/vite.svg";
// import ContactForm from "../ui/ContactForm";

const techStack = [
  {
    name: "react",
    svg: reactjs,
  },
  {
    name: "tailwindcss",
    svg: tailwindcss,
  },
  {
    name: "vite",
    svg: vite,
  },
  {
    name: "nodejs",
    svg: nodejs,
  },
  {
    name: "supabase",
    svg: supabase,
  },
  {
    name: "css",
    svg: css3,
  },
  {
    name: "js",
    svg: javascript,
  },
  {
    name: "html",
    svg: html5,
  },
  {
    name: "git",
    svg: git,
  },
  {
    name: "github",
    svg: github,
  },
];

function Home() {
  return (
    <>
      <section className="isolate min-h-full overflow-hidden bg-fill-mainbg lg:px-8">
        <div className="mx-auto max-w-2xl px-4 py-24 sm:px-6 sm:py-32 lg:max-w-7xl lg:px-8">
          <div className="grid grid-cols-1 gap-x-8 gap-y-8 lg:grid-cols-2">
            <div>
              <div className="pb-10">
                <span className="text-2xl font-medium text-gray-500">
                  Hi, my name is Byron. I'm a Front End
                </span>
                <div className="mt-2 text-6xl tracking-tight text-black sm:text-5xl">
                  <h1 className="sm:text-7xl lg:text-6xl">React Developer</h1>
                </div>
                <div className="mt-6 flex max-w-md gap-2.5">
                  {techStack.map((icon) => (
                    <img
                      key={icon.name}
                      src={icon.svg}
                      alt={`${icon.name}-icon`}
                      className="h-[22.5px] text-sm md:h-[25px] lg:h-[30px]"
                    />
                  ))}
                </div>
              </div>
              <div className="mt-4 py-4">
                <p className="pt-5 text-[11px] leading-7 text-grey-dark">
                  I love transforming ideas into user-friendly web applications
                  using React's component-based architecture. I thrive on
                  collaborating with others, constantly learning, and staying up
                  to date with the latest trends and best practices. I'm eager
                  to join a team where I can contribute my skills, learn from
                  experienced professionals, and make a meaningful impact
                  through my work.
                </p>
              </div>
              <div className="flex gap-3 pt-5">
                <SocialLinks />
              </div>
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
        <div>{/* <ContactForm /> */}</div>
      </section>
    </>
  );
}

export default Home;
