import REACT from "./reactIcon.svg";
import HTML from "./htmlIcon.svg";
import CSS from "./cssIcon.svg";
import JS from "./jsIcon.svg";
import NODEJS from "./nodejsIcon.svg";
import TAILWINDCSS from "./tailwindIcon.svg";
import SUPABASE from "./supbaseIcon.svg";
import VITE from "./viteIcon.svg";

const techSvg = {
  react: REACT,
  html: HTML,
  css: CSS,
  js: JS,
  nodejs: NODEJS,
  tailwindcss: TAILWINDCSS,
  supbase: SUPABASE,
  vite: VITE,
};

function TechIcon({ techSvg }) {
  return <img src={techSvg} alt="con" />;
}

export default TechIcon;
