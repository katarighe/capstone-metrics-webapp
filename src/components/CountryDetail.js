import React from 'react';
import { useSelector } from 'react-redux';
import rightArrow from '../assets/icons/circle-arrow-right-solid.svg';
import Footer from './Footer';
import NavDetail from './NavDetail';
import './CountryDetail.css';

const CountryDetail = () => {
  const country = useSelector((state) => state.countryDetail.detailCountry);
  return (
    <div className="country_detail_body">
      <NavDetail />
      {country.length > 0 ? (
        <div>
          <div className="country_detail_header_box">
            <div className="country_detail_header_box_map">
              <img src={country[0].map} alt="" />
            </div>
            <div className="country_detail_header_box_text">
              <h1>{country[0].name}</h1>
              <p>
                {' '}
                (
                {country.official}
                {' '}
                )
              </p>
            </div>
          </div>
          <h2 className="country_overview_headline">Country Overview</h2>
          <div className="country_detail_overview_box">
            <div className="country_detail_overview_box_text color_blue">
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
            <div className="country_detail_overview_box_text">
              <h3>Population</h3>
              <p>
                {country[0].population}
                {' '}
              </p>
              <button type="button">
                <img src={rightArrow} alt="Right Arrow" />
              </button>
            </div>
            <div className="country_detail_overview_box_text color_blue">
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
            <div className="country_detail_overview_box_text">
              <h3>Capital</h3>
              <p>{country.capital}</p>
              <button type="button">
                <img src={rightArrow} alt="Right Arrow" />
              </button>
            </div>
            <div className="country_detail_overview_box_text color_blue">
              <h3>Continent</h3>
              <p>{country.continents}</p>
              <button type="button">
                <img src={rightArrow} alt="Right Arrow" />
              </button>
            </div>
            <div className="country_detail_overview_box_text">
              <h3>Timezone</h3>
              <p>{country[0].timezones}</p>
              <button type="button">
                <img src={rightArrow} alt="Right Arrow" />
              </button>
            </div>
            <div className="country_detail_overview_box_text color_blue">
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
