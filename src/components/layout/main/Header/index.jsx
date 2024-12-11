// assets
import user from "@/assets/images/user.jpg";
import bill from "@/assets/icons/bill.svg";
import config from "@/assets/icons/config.svg";
import mail from "@/assets/icons/mail.svg";

// css
import css from "./style.module.css";

export default function Header() {
  const sublinks = [
    "Dashboard",
    "HR manage",
    "Employees",
    "John Smith Profile",
  ];

  return (
    <header className="flex justify-between items-center px-10 py-7 ">
      <div className="flex flex-col gap-4">
        <h3 className="text-[26px] leading-10 tracking-wider text-color font-semibold ">
          John Smith Profile
        </h3>
        <ul className="flex gap-[10px]">
          {sublinks.map((l, n) => (
            <li
              className={" font-semibold text-xs text-[#959FB0] " + css.text}
              key={n}
            >
              {l}
            </li>
          ))}
        </ul>
      </div>

      {/* Icons Section */}
      <div className="flex items-center gap-7">
        <div className={`${css.link} ${css.active}`}>
          <img src={bill} alt="bill" className="w-6 h-6 cursor-pointer" />
        </div>
        <div className={css.link}>
          <img src={config} alt="config" className="w-6 h-6 cursor-pointer" />
        </div>
        <div className={css.link}>
          <img src={mail} alt="mail" className="w-6 h-6 cursor-pointer" />
        </div>

        <div
          style={{ backgroundImage: `url(${user})` }}
          alt="alt"
          className={css.user}
        />
      </div>
    </header>
  );
}
