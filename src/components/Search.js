import React from 'react';
import { useDispatch } from 'react-redux';
import { search } from '../redux/Home/homeSlice';
import searchLogo from '../assets/icons/magnifying-glass-solid.svg';

const Search = () => {
  const dispatch = useDispatch();
  const onSearchHandler = (e) => {
    dispatch(search(e.target.value));
  };

  return (
    <div className="search_container">
      <img className="icon" src={searchLogo} alt="" />
      <input
        type="text"
        placeholder="Search"
        className="input"
        onChange={onSearchHandler}
      />
    </div>
  );
};

export default Search;
