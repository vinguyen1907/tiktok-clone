import styles from "./Sidebar.module.scss";
import Menu, { MenuItem } from "./Menu";
import {
  HomeIcon,
  UsersIcon,
  LiveIcon,
  HomeActiveIcon,
  UsersActiveIcon,
  LiveActiveIcon,
} from "~/components/Icons";

function Sidebar() {
  return (
    <aside className={styles.wrapper}>
      <Menu>
        <MenuItem
          title="For you"
          to="/"
          icon={<HomeIcon />}
          activeIcon={<HomeActiveIcon />}
        />
        <MenuItem
          title="Following"
          to="/following"
          icon={<UsersIcon />}
          activeIcon={<UsersActiveIcon />}
        />
        <MenuItem
          title="LIVE"
          to="/live"
          icon={<LiveIcon />}
          activeIcon={<LiveActiveIcon />}
        />
      </Menu>
    </aside>
  );
}

export default Sidebar;
