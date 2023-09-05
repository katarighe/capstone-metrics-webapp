import React from 'react';
import { useSelector } from 'react-redux';
import rightArrow from '../assets/icons/circle-arrow-right-solid.svg';
import Footer from './Footer';
import NavDetail from './NavDetail';

const CountryDetail = () => {
  const country = useSelector((state) => state.countryDetail.detailCountry);
  return (
    <div className="detail_body">
      <NavDetail />
      {country.length > 0 ? (
        <div>
          <div className="detail__header__box">
            <div className="detail__header__box__map">
              <img src={country[0].map} alt="" />
            </div>
            <div className="detail__header__box__text">
              <h1>{country[0].name}</h1>
              <h2>Current Population</h2>
              <p>
                {country[0].population}
                {' '}
              </p>
            </div>
          </div>
          <h2 className="country__breakdown__text">Country Breakdown</h2>
          <div className="detail__breakdown__box">
            <div className="detail__breakdown__box__text">
              <h3>Area</h3>
              <p>
                {country[0].area}
                {' '}
                km
              </p>
              <button type="button">
                <img src={rightArrow} alt="Right Arrow" />
              </button>
            </div>
            <div className="detail__breakdown__box__text color__dark">
              <h3>Country Flag</h3>
              <img
                className="country_flag"
                src={country[0].flag}
                alt={`${country[0].name} Flag`}
              />
              <button type="button">
                <img src={rightArrow} alt="Right Arrow" />
              </button>
            </div>
            <div className="detail__breakdown__box__text">
              <h3>Capital</h3>
              <p>{country.capital}</p>
              <button type="button">
                <img src={rightArrow} alt="Right Arrow" />
              </button>
            </div>
            <div className="detail__breakdown__box__text color__dark">
              <h3>Continent</h3>
              <p>{country.continents}</p>
              <button type="button">
                <img src={rightArrow} alt="Right Arrow" />
              </button>
            </div>
            <div className="detail__breakdown__box__text">
              <h3>Timezone</h3>
              <p>{country[0].timezones}</p>
              <button type="button">
                <img src={rightArrow} alt="Right Arrow" />
              </button>
            </div>
            <div className="detail__breakdown__box__text color__dark">
              <h3>Languages</h3>
              <p>{country.languages}</p>
              <button type="button">
                <img src={rightArrow} alt="Right Arrow" />
              </button>
            </div>
          </div>
        </div>
      ) : (
        <h1 className="error_back">Sorry, please go back! </h1>
      )}
      <Footer />
    </div>
  );
};

export default CountryDetail;
