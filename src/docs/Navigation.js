import React, { useState, useCallback } from 'react';
import PropTypes from 'prop-types';

const Navigation = ({ components }) => {
  const [search, setSearch] = useState('');

  const onSearch = useCallback((event) => {
    setSearch(event.target.value);
  }, []);

  const filteredComponentList = components
    .filter((name) => name.toLowerCase().includes(search.toLowerCase()))
    .map((name) => {
      return (
        <li key={name}>
          <a href={`#${name}`}>{name}</a>
        </li>
      );
    });

  return (
    <nav className="navigation">
      <input type="text" placeholder="Search components" onChange={onSearch} />
      <ul className="navigation-list">{filteredComponentList}</ul>
    </nav>
  );
};

Navigation.propTypes = {
  components: PropTypes.array.isRequired,
};

export default Navigation;
