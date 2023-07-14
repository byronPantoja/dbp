import { NavLink } from "react-router-dom";
import github from "../../images/github.svg";
import vercel from "../../images/vercel.svg";
import instagram from "../../images/instagram.svg";

const socials = [
  {
    name: "GitHub",
    href: "https://github.com/byronPantoja",
    svg: github,
  },
  {
    name: "Vercel",
    href: "https://vercel.com/byronpantoja",
    svg: vercel,
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/dbp.833/",
    svg: instagram,
  },
];

function SocialLinks() {
  return (
    <>
      {socials.map((item) => (
        <NavLink
          key={item.name}
          to={item.href}
          className="text-gray-400 hover:text-gray-500"
        >
          <span className="sr-only">{item.name}</span>
          <img
            key={item.name}
            src={item.svg}
            alt={item.name}
            className="h-6 w-6"
            aria-hidden="true"
          />
        </NavLink>
      ))}
    </>
  );
}

export default SocialLinks;
