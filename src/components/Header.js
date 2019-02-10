import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
const Container = styled.div`
  flex-direction: row;
  justify-content: flex-start;
  align-item: center;
`;
const Title = styled.div`
  font-size:3em;
`;
function Header({title}) {
    return (
      <Container>
        <Title>{title}</Title>
      </Container>
    );
  }
  Header.propTypes = {
    title: PropTypes.string,
  };
  
  export default Header;