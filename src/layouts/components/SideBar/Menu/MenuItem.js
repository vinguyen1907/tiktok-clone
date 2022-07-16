import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import styles from "./Menu.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

function MenuItem({ title, to, icon, activeIcon }) {
  return (
    <NavLink
      className={(nav) => cx("menuItem", { active: nav.isActive })}
      to={to}
    >
      <span className={styles.icon}>{icon}</span>
      <span className={styles.activeIcon}>{activeIcon}</span>
      <span className={styles.title}>{title}</span>
    </NavLink>
  );
}

MenuItem.protoTypes = {
  title: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
  icon: PropTypes.node.isRequired,
};

export default MenuItem;
