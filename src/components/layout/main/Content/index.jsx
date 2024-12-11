import { Box } from "@mui/material";

// assets
import camera from "@/assets/icons/camera.svg";
import user from "@/assets/images/user.jpg";

// css
import css from "./style.module.css";
import { NavLink, Outlet } from "react-router";

// component
export default function Content({ children }) {
  // data
  const links = [
    {
      to: "/dashboard/hrManager/employees/1/personal",
      title: "Personal Information",
    },
    {
      to: "/dashboard/hrManager/employees/1/financial",
      title: "Financial Information",
    },
  ];

  //   render
  return (
    <main className="grid grid-cols-4 p-8 gap-8 flex-1 overflow-hidden">
      <div>
        <Box className="box">
          <div
            className={css.avatar}
            style={{ backgroundImage: `url(${user})` }}
          >
            <div className={css.icon}>
              <img src={camera} alt="camera" />
            </div>
          </div>

          <div className="my-3">
            <h3 className="text-[#051D49] font-semibold text-xl">John Smith</h3>
            <p className="sub-text text-base">Senior Product Manager</p>
          </div>

          <hr style={{ borderColor: "#ECEEF1" }} />

          <nav>
            <ul className="flex flex-col gap-2 py-4">
              {links.map((i, n) => (
                <li key={n}>
                  <NavLink
                    to={i.to}
                    className={({ isActive }) =>
                      `${css.item} ${isActive && css.active}`
                    }
                  >
                    {i.title}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>
        </Box>
      </div>
      <div className="col-span-3 h-full overflow-auto">
        <Outlet />
      </div>
    </main>
  );
}
