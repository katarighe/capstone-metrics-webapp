import React from 'react';
import { useSelector } from 'react-redux';

const Population = () => {
  const countries = useSelector((state) => state.country.countriesData);
  const totalPopulation = () => {
    const total = countries.map((country) => country.population).reduce((a, b) => a + b);
    const formatter = total.toLocaleString('en-US');
    return formatter;
  };
  return (
    <div className="population_container">
      <div className="population_img_box">
        <img className="world__img" src="https://svgsilh.com/svg/151588.svg" alt="World Map" />
      </div>
      <div className="center-line" />
      <div className="population_text">
        <h1>Europe</h1>
        <p>
          {countries.length > 0 ? totalPopulation() : 'Loading...'}
          {' '}
          Population
        </p>
      </div>
    </div>
  );
};

export default Population;
