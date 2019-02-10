import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
const Container = styled.div`
  flex: 1;
  flex-direction: row;
  justify-content: flex-start;
  align-item: center;
`;
function SearchBar({onChange}) {
    return (
      <Container>
        <input type="text" onChange={onChange} placeholder="name"/>
      </Container>
    );
  }
  SearchBar.propTypes = {
    onChange: PropTypes.func,
  };
  
  export default SearchBar;