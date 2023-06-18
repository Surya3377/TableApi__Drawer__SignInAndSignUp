import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Dropdowns = () => {
  const [country, setCountry] = useState('');
  const [state, setState] = useState('');
  const [district, setDistrict] = useState('');

  // Define your options for country, state, and district
  const countries = ['Country 1', 'Country 2', 'Country 3'];
  const statesByCountry = {
    'Country 1': ['State 1.1', 'State 1.2', 'State 1.3'],
    'Country 2': ['State 2.1', 'State 2.2', 'State 2.3'],
    'Country 3': ['State 3.1', 'State 3.2', 'State 3.3']
  };
  const districtsByState = {
    'State 1.1': ['District 1.1.1', 'District 1.1.2', 'District 1.1.3'],
    'State 1.2': ['District 1.2.1', 'District 1.2.2', 'District 1.2.3'],
    'State 1.3': ['District 1.3.1', 'District 1.3.2', 'District 1.3.3'],
    'State 2.1': ['District 2.1.1', 'District 2.1.2', 'District 2.1.3'],
    'State 2.2': ['District 2.2.1', 'District 2.2.2', 'District 2.2.3'],
    'State 2.3': ['District 2.3.1', 'District 2.3.2', 'District 2.3.3'],
    'State 3.1': ['District 3.1.1', 'District 3.1.2', 'District 3.1.3'],
    'State 3.2': ['District 3.2.1', 'District 3.2.2', 'District 3.2.3'],
    'State 3.3': ['District 3.3.1', 'District 3.3.2', 'District 3.3.3']
  };

  const handleCountryChange = (e) => {
    const selectedCountry = e.target.value;
    setCountry(selectedCountry);
    setState('');
    setDistrict('');
  };

  const handleStateChange = (e) => {
    const selectedState = e.target.value;
    setState(selectedState);
    setDistrict('');
  };

  const handleDistrictChange = (e) => {
    const selectedDistrict = e.target.value;
    setDistrict(selectedDistrict);
  };

  return (
    <div>
<div>
<h2>Dropdowns Example</h2>
      <label htmlFor="country">Country:</label>
      <select id="country" value={country} onChange={handleCountryChange}>
        <option value="">Select Country</option>
        {countries.map((country) => (
          <option key={country} value={country}>
            {country}
          </option>
        ))}
      </select>

      <label htmlFor="state">State:</label>
      <select id="state" value={state} onChange={handleStateChange} disabled={!country}>
        <option value="">Select State</option>
        {country &&
          statesByCountry[country].map((state) => (
            <option key={state} value={state}>
              {state}
            </option>
          ))}
      </select>

      <label htmlFor="district">District:</label>
      <select id="district" value={district} onChange={handleDistrictChange} disabled={!state}>
        <option value="">Select District</option>
        {state &&
          districtsByState[state].map((district) => (
            <option key={district} value={district}>
              {district}
            </option>
          ))}
      </select>
</div>
<div>
   
</div>
      
    </div>
  );
};

export default Dropdowns;
