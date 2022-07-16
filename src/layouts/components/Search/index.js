import {
  faCircleXmark,
  faMagnifyingGlass,
  faSpinner,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import HeadlessTippy from "@tippyjs/react/headless";
import { useEffect, useRef, useState } from "react";
import AccountItem from "../../../components/AccountItem";
import { Wrapper as PopperWrapper } from "../../../components/Popper";
import styles from "./Search.module.scss";

function Search() {
  const [searchValue, setSearchValue] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [showResults, setShowResults] = useState(true);
  const [loading, setLoading] = useState(false);

  const inputRef = useRef();

  useEffect(() => {
    if (!searchValue.trim()) {
      setSearchResults([]);
      return;
    }

    setLoading(true);

    fetch(
      `https://tiktok.fullstack.edu.vn/api/users/search?q=${encodeURIComponent(
        searchValue
      )}&type=more`
    )
      .then((res) => res.json())
      .then((res) => {
        setSearchResults(res.data);
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
      });
  }, [searchValue]);

  const handleClear = () => {
    setSearchValue("");
    inputRef.current.focus();
  };

  const handleHideResults = () => {
    setShowResults(false);
    console.log(showResults);
  };

  const handleChange = (e) => {
    const searchValue = e.target.value;
    if (!searchValue.startsWith(" ")) {
      setSearchValue(searchValue);
    }
  };

  return (
    <div>
      <HeadlessTippy
        interactive
        visible={showResults && searchResults.length > 0}
        onClickOutside={handleHideResults}
        render={(attrs) => (
          <div className={styles.searchResult} tabIndex="-1" {...attrs}>
            <PopperWrapper>
              <h4 className={styles.searchTitle}>Accounts</h4>
              {searchResults.map((item) => (
                <AccountItem key={item.id} data={item} />
              ))}
            </PopperWrapper>
          </div>
        )}
      >
        <div className={styles.search}>
          <input
            ref={inputRef}
            placeholder="Search account and video"
            spellCheck={false}
            value={searchValue}
            onChange={handleChange}
            onFocus={() => setShowResults(true)}
          />
          {!!searchValue && !loading && (
            <button className={styles.clear} onClick={handleClear}>
              <FontAwesomeIcon icon={faCircleXmark} />
            </button>
          )}
          {loading && (
            <FontAwesomeIcon className={styles.loading} icon={faSpinner} />
          )}
          <button className={styles.searchButton}>
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </button>
        </div>
      </HeadlessTippy>
    </div>
  );
}

export default Search;
