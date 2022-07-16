import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import styles from "./AccountItem.module.scss";

function AccountItem({ data }) {
  return (
    <Link to={`/@${data.nickname}`} className={styles.wrapper}>
      <img className={styles.avatar} src={data.avatar} alt={data.full_name} />

      <div className={styles.info}>
        <h4 className={styles.name}>
          <span>{data.full_name}</span>

          {data.tick && (
            <FontAwesomeIcon
              className={styles.checkIcon}
              icon={faCheckCircle}
            />
          )}
        </h4>

        <h4 className={styles.username}>{data.nickname}</h4>
      </div>
    </Link>
  );
}

export default AccountItem;
