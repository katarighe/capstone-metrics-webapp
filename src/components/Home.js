import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getCountries } from '../redux/Home/homeSlice';
import {
  getCountryDetail,
  countrySelectedAction,
} from '../redux/countryDetail/countryDetailSlice';
import Search from './Search';
import Population from './Population';
import Nav from './Nav';
import Footer from './Footer';
import CircleArrow from '../assets/icons/circle-arrow-right-solid.svg';

const Home = () => {
  const dispatch = useDispatch();
  const countries = useSelector((state) => state.country.countriesData);
  const searchField = useSelector((state) => state.country.searchResult);
  const status = useSelector((state) => state.country.status);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(getCountries());
    }
  }, [status, dispatch]);

  const filteredCountries = () => {
    if (searchField.length > 0) {
      return countries.filter((country) => country.name.toLowerCase().includes(searchField.toLowerCase()));
    }
    return countries;
  };

  const onCardHandler = (e) => {
    dispatch(getCountryDetail(e.target.id));
    dispatch(countrySelectedAction(e.target.id));
  };

  return (
    <div className="home_container">
      <Nav />
      <Population />
      <Search />
      <div className="country_grid">
        {filteredCountries().length > 0 ? (
          filteredCountries().map((country) => (
            <div className="card__flex-column" key={country.name}>
              <Link
                to={`/countrydetail/${country.id}`}
                id={country.name}
                onClick={(e) => {
                  onCardHandler(e);
                }}
                className="card__link"
              >
                <button
                  type="button"
                  id={country.name}
                  className="country_arrow_link"
                >
                  <img
                    src={CircleArrow}
                    id={country.name}
                    alt="Circle Arrow Button Link"
                  />
                </button>
                <div id={country.name} className="grid_image">
                  <img id={country.name} src={country.map} alt={country.cca2} />
                </div>
                <div id={country.name} className="card_text">
                  <h1 id={country.name}>{country.name}</h1>
                  <p id={country.name}>{country.population}</p>
                </div>
              </Link>
            </div>
          ))
        ) : (
          <h1 className="card_text_none">
            Country not found, please try again!
          </h1>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default Home;
