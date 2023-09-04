import React from 'react';
import { useDispatch } from 'react-redux';
import { search } from '../redux/Home/homeSlice';

const Search = () => {
  const dispatch = useDispatch();
  const onSearchHandler = (e) => {
    dispatch(search(e.target.value));
  };
  return (
    <div className="search_box">
      {/* <img className="" src={} alt="" /> */}
      <input
        type="text"
        placeholder="Search"
        className="search_input"
        onChange={onSearchHandler}
      />
    </div>
  );
};

export default Search;
