// assets
import logo from "@/assets/images/logo.png";

// icons
import dashboard from "@/assets/icons/dashboard.svg";
import pie from "@/assets/icons/pie.svg";
import documentImg from "@/assets/icons/document.svg";
import users from "@/assets/icons/users.svg";
import packageImg from "@/assets/icons/package.svg";
import { Link, NavLink } from "react-router";

// css
import css from "./style.module.css";

// component
export default function Aside() {
  // data
  const links = [
    {
      to: "/dashboard",
      title: "Dashboard",
      icon: dashboard,
    },
    {
      to: "/charts",
      title: "Charts",
      icon: pie,
    },
    {
      to: "/report",
      title: "Reports",
      icon: documentImg,
    },
    {
      to: "/clients",
      title: "Clients",
      icon: users,
    },
    {
      to: "/store",
      title: "Store",
      icon: packageImg,
    },
  ];

  // render
  return (
    <aside className={css.aside}>
      <img src={logo} alt="logo" className="w-[45px]" />

      <nav>
        <ul className="flex flex-col gap-6">
          {links.map((link, n) => (
            <li key={n} title={link.title}>
              <NavLink
                to={link.to}
                className={({ isActive }) =>
                  `w-12 h-12 hover:bg-gray-100 flex-center rounded-2xl ${
                    isActive && css.active
                  } `
                }
              >
                <img src={link.icon} alt={link.title} className="block" />
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}
