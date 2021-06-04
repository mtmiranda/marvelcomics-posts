import React, { useEffect, useState, useCallback } from "react";

import { Comics } from "../../Components/Comics";
import { Footer } from "../../Components/Footer";
import Button from "../../Components/LoadButton";
import { ScrollButton } from "../../Components/ScrollButton";
import { SearchBar } from "../../Components/SearchBar";
import useFullpageLoader from "../../Hooks/useFullpageLoader";
import { history } from "../../Routes/history";

// import loadComics from "../../Utils/loadComics.js";

import styles from "./styles.module.scss";

const Home = () => {
  const [comics, setComics] = useState([]);
  const [allComics, setAllComics] = useState([]);
  const [page, setPage] = useState(0);
  const [searchValue, setSearchValue] = useState("");
  const [comicsPerPage, setComicsPerPage] = useState(10);
  const [loader, showLoader, hideLoader] = useFullpageLoader();

  const dataTime = Math.floor(Date.now() / 1000);
  console.log(dataTime); // show current timestamp

  const timeStamp = "1621258571";
  const apiKey = "3f12558e4dd3d6d020e101c5f8ecfe0b";
  const md5 = "2e3235cb181efd92ca996eccfdfdb801";

  const handleLoadComics = useCallback(async (page, comicsPerPage) => {
    fetch(
      `https://gateway.marvel.com/v1/public/comics?ts=${timeStamp}&apikey=${apiKey}&hash=${md5}&limit=100&offset=500`
    )
      .then((response) => response.json())
      .then((jsonParsed) => {
        console.log(jsonParsed);
        const comicsPage = jsonParsed.data.results;
        setComics(comicsPage.slice((page, comicsPerPage)));
        setAllComics(comicsPage);

        setTimeout(() => {
          hideLoader();
        }, 2000);
      });
  }, []);

  useEffect(() => {
    showLoader();
    handleLoadComics(0, comicsPerPage);
  }, [handleLoadComics, comicsPerPage]);

  const loadMoreComics = () => {
    const nextPage = page + comicsPerPage;
    const nextComics = allComics.slice(nextPage, nextPage + comicsPerPage);
    comics.push(...nextComics);

    setComics(comics);
    setPage(nextPage);
  };

  const handleChange = (event) => {
    const { value } = event.target;
    setSearchValue(value);
  };

  const handleLogout = () => {
    window.localStorage.clear();
    history.push("/login");
  };

  const noMoreComics = page + comicsPerPage >= allComics.length;

  const filteredComics = !!searchValue
    ? allComics.filter((comic) => {
        return comic.title.toLowerCase().includes(searchValue.toLowerCase());
      })
    : comics;

  console.log(comics);

  return (
    <div className={styles.container}>
      <header className={styles.headerContainer}>
        <div className={styles.searchContainer}>
          <a
            href="https://developer.marvel.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/imgs/marvel-logo.svg" alt="marvel logo" />
          </a>
          {!!searchValue && <p>Searching...: {searchValue}</p>}

          <div className={styles.rightHeaderBox}>
            <SearchBar searchValue={searchValue} handleChange={handleChange} />
            <button className={styles.logoutButton} onClick={handleLogout}>
              test
            </button>
          </div>
        </div>
      </header>

      <main>
        {filteredComics.length > 0 && <Comics comics={filteredComics} />}

        {filteredComics.length === 0 && (
          <p className={styles.emptyComicsTitle}>
            Comics not found... <br />
            Try another one :D
          </p>
        )}
        <ScrollButton />
        {!searchValue && (
          <div className={styles.loadButtonWrapper}>
            <Button
              onClick={loadMoreComics}
              text="Load more comics"
              disabled={noMoreComics}
            ></Button>
          </div>
        )}
      </main>

      <Footer />
      {loader}
    </div>
  );
};

export default Home;
