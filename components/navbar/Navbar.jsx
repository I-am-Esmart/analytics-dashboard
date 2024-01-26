import styles from "./navbar.module.css";
import { CiSearch } from "react-icons/ci";
import { FaBars, FaRegCalendarAlt } from "react-icons/fa";
import { IoNotificationsOutline } from "react-icons/io5";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import Image from "next/image";
import userImage from "../../public/assets/images/user-image.png";
import { useState } from "react";
import { FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [showLogout, setShowLogout] = useState(false);

  const handleLogout = () => {
    setShowLogout(!showLogout);
  };

  const handleShowMenuItems = () => {
    setShowMenuItems(!showMenuItems);
  };

  return (
    <>
      <nav className={styles.navbar}>
        <div className={styles.navbar_wrapper}>
          <div className={styles.navbar_container}>
            <div className={styles.navbar_container_left}>
              <p>Dashboard</p>
              <div className={styles.navbar_container_left_input_container}>
                <input type="search" placeholder="search..." />
                <button>
                  <CiSearch />
                </button>
              </div>
            </div>

            <div className={styles.navbar_container_right}>
              <div className={styles.navbar_container_right_date_container}>
                <FaRegCalendarAlt />
                <p>November 15, 2023</p>
              </div>

              <div className={styles.navbar_container_right_notif_container}>
                <IoNotificationsOutline />
              </div>

              <div className={styles.navbar_container_right_user_container}>
                <div>
                  <Image src={userImage} alt="" />
                </div>
                <div
                  className={
                    styles.navbar_container_right_user_container_details
                  }
                >
                  <p>Justin Bergson</p>
                  <p>Justin@gmail.com</p>
                </div>
                <button className={styles.logout_button} onClick={handleLogout}>
                  <MdOutlineKeyboardArrowDown />
                  {showLogout && <span>Logout</span>}
                </button>
              </div>
            </div>
          </div>

          {/* navbar mobile view */}
          <div className={styles.navbar_mobile_container}>
            <div className={styles.navbar_mobile_container_left}>
              <div
                className={styles.navbar_mobile_container_left_input_container}
              >
                <input type="search" placeholder="search..." />
                <button>
                  <CiSearch />
                </button>
              </div>

              <div className={styles.navbar_mobile_container_left_notif}>
                <IoNotificationsOutline />
              </div>

              <div className={styles.navbar_container_right_hamburger}>
                <FaBars />
              </div>
            </div>
          </div>
        </div>
      </nav>

      <div className={styles.navbar_mobile_overlay_container}>
        <div className={styles.navbar_mobile_menu_container}>
          <div className={styles.navbar_mobile_menu_container_items}>
            <div className={styles.navbar_mobile_menu_container_date}>
              <FaRegCalendarAlt />
              <p>November 15, 2023</p>
            </div>

            <div className={styles.navbar_mobile_menu_container_user}>
              <div>
                <Image src={userImage} alt="" />
              </div>

              <div className={styles.navbar_mobile_menu_container_user_details}>
                <p>Justin Bergson</p>
                <p>Justin@gmail.com</p>
              </div>

              <button className={styles.logout_button} onClick={handleLogout}>
                <MdOutlineKeyboardArrowDown />
                {showLogout && <span>Logout</span>}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
