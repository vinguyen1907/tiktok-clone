import { useState } from "react";
import Tippy from "@tippyjs/react/headless";
import styles from "./Menu.module.scss";
import PopperWrapper from "../Wrapper";
import Button from "../../Button";
import Header from "./Header";

function Menu({ items = [], hideOnClick = false, children }) {
  const [history, setHistory] = useState([{ data: items }]);
  const current = history[history.length - 1];

  const renderItems = () => {
    return current.data.map((item, index) => {
      let classes;

      if (!!item.separate) {
        classes = `${styles.separate} ${styles.menuItem}`;
      } else {
        classes = styles.menuItem;
      }

      return (
        <Button
          key={index}
          className={classes}
          leftIcon={item.icon}
          to={item.to}
          onClick={() => {
            if (!!item.children) {
              setHistory([...history, item.children]);
            }
          }}
        >
          {item.title}
        </Button>
      );
    });
  };

  const handleResetToFirstPage = () => {
    setHistory([{ data: items }]);
  };

  const handleBack = () => {
    setHistory((prev) => prev.splice(prev.length - 1, 1));
  };

  const renderResults = (attrs) => (
    <div className={styles.content} tabIndex="-1" {...attrs}>
      <PopperWrapper className={styles.menuPopper}>
        {history.length > 1 ? (
          <Header title="Language" onBack={handleBack} />
        ) : null}
        <div className={styles.menuBody}>{renderItems()}</div>
      </PopperWrapper>
    </div>
  );

  return (
    <Tippy
      interactive
      delay={[0, 500]}
      offset={[16, 8]}
      placement="bottom-end"
      onHide={handleResetToFirstPage}
      hideOnClick={hideOnClick}
      render={renderResults}
    >
      {children}
    </Tippy>
  );
}

export default Menu;
