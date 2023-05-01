import { useEffect, useState, useRef } from 'react';
import { faCircleXmark, faSpinner } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import HeadlessTippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';

import * as searchService from '~/services/searchService';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import AccountItem from '~/components/AccountItem';
import { SearchIcon } from '~/components/Icons';
import { useDebounce } from '~/hook';
import styles from './Search.module.scss';

const cx = classNames.bind(styles);

function Search() {
  const [searchValue, setSearchValue] = useState('');

  const [searchResult, setSearchResult] = useState([]);

  const [showResult, setshowResult] = useState(true);
  const [loading, reloading] = useState(false);

  const debounced = useDebounce(searchValue, 800);

  const inputRef = useRef();

  useEffect(() => {
    if (!debounced.trim()) {
      setSearchResult([]);
      return;
    }

    const fetchApi = async () => {
      reloading(true);

      const result = await searchService.search(debounced);
      setSearchResult(result);

      reloading(false);
    };

    fetchApi();

    /*
    reloading(true);

    const fetchApi = async () => {
      try {
        const res = await request.get('users/search', {
          params: {
            q: debounced,
            type: 'less',
          },
        });
        setSearchResult(res.data);
        reloading(false);
      } catch (error) {
        reloading(false);
      }
    };

    fetchApi();*/
  }, [debounced]);

  /*fetch(`https://tiktok.fullstack.edu.vn/api/users/search?q=${encodeURIComponent(debounced)}&type=less`)
      .then((res) => res.json())
      .then((res) => {
        setSearchResult(res.data);
        reloading(false);
      })
      .catch(() => {
        reloading(false);
      });
  }, [debounced]);*/

  /*request
      .get('users/search', {
        params: {
          q: debounced,
          type: 'less',
        },
      })
      .then((res) => {
        setSearchResult(res.data);
        reloading(false);
      })
      .catch(() => {
        reloading(false);
      });
  }, [debounced]);*/

  const handleClear = () => {
    setSearchValue('');
    setSearchResult([]);
    inputRef.current.focus();
  };

  const handleHideResult = () => {
    setshowResult(false);
  };

  const handleChange = (e) => {
    const searchValue = e.target.value;

    if (!searchValue.startsWith(' ')) {
      setSearchValue(searchValue);
    }
  };

  return (
    //Using a wrapper <div> or <span> tag around the reference element solves this by creating a new parentNode context.
    <div>
      <HeadlessTippy
        interactive
        visible={showResult && searchResult.length > 0}
        render={(attrs) => (
          <div className={cx('search-result')} tabIndex="-1" {...attrs}>
            <PopperWrapper>
              <h4 className={cx('search-title')}>Accounts</h4>
              {searchResult.map((result) => (
                <AccountItem key={result.id} data={result} />
              ))}
            </PopperWrapper>
          </div>
        )}
        onClickOutside={handleHideResult}
      >
        <div className={cx('search')}>
          <input
            ref={inputRef}
            value={searchValue}
            placeholder="Search accounts and videos"
            spellCheck={false}
            onChange={handleChange}
            onFocus={() => setshowResult(true)}
          />

          {!!searchValue && !loading && (
            <button className={cx('clear-btn')} onClick={handleClear}>
              <FontAwesomeIcon icon={faCircleXmark} />
            </button>
          )}

          {loading && <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />}

          <button className={cx('search-btn')} onMouseDown={(e) => e.preventDefault()}>
            <SearchIcon />
          </button>
        </div>
      </HeadlessTippy>
    </div>
  );
}

export default Search;
