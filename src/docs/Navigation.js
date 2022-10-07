import React, { useState, useCallback } from 'react';
import PropTypes from 'prop-types';

const Navigation = ({ components }) => {
  const [search, setSearch] = useState('');

  const onSearch = useCallback((event) => {
    setSearch(event.target.value);
  }, []);
  const hash = window.location.hash.slice(1) || components[0];

  const filteredComponentList = components
    .filter((name) => name.toLowerCase().includes(search.toLowerCase()))
    .map((name) => {
      return (
        <li
          key={name}
          className={`navigation-item ${name === hash ? 'active' : ''}`}
        >
          <a href={`#${name}`}>{name}</a>
        </li>
      );
    });

  return (
    <nav className="navigation">
      <div>
        <input
          className="search-input"
          type="text"
          placeholder="Search components"
          onChange={onSearch}
        />
      </div>
      <ul className="navigation-list">{filteredComponentList}</ul>
    </nav>
  );
};

Navigation.propTypes = {
  components: PropTypes.array.isRequired,
};

export default Navigation;
