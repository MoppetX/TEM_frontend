import React, { useState } from 'react';
// import PropTypes from 'prop-types';

const UseDropdown = (label, defaultState, options) => {
  const [state, setState] = useState(defaultState);
  const id = `use-dropdown-${label.replace(' ', '').toLowerCase()}`;

  const Dropdown = () => (
    <label htmlFor={id}>
      {label}
      <select
        disabled={options.length === 0}
        id={id}
        value={state}
        onChange={evt => setState(evt.target.value)}
        onBlur={evt => setState(evt.target.value)}
      >
        <option value="all">All</option>
        {options.map(item => (
          <option key={item} value={item}>
            {item}
          </option>
        ))}
      </select>
    </label>
  );

  return [state, Dropdown, setState];
};

// UseDropdown.propTypes = {};

export default UseDropdown;
