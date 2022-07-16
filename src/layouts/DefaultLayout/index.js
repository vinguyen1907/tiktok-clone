import Header from "../components/Header";
import Sidebar from "../components/SideBar/Sidebar";
import styles from "./DefaultLayout.module.scss";

function DefaultLayout({ children }) {
  return (
    <div className={styles.wrapper}>
      <Header />
      <div className={styles.container}>
        <Sidebar />
        <div className={styles.content}>{children}</div>
      </div>
    </div>
  );
}

export default DefaultLayout;
