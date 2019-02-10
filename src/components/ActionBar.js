import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
const Container = styled.div`
  flex-direction: row;
  justify-content: flex-start;
  align-item: center;
  background-color:red;
`;
const Icon = styled.div`
  border-radius:5em;
  color:white;
  font-weight:bold;
  background-color:red;
  width:5em;
  font-size:3em;
  text-align:center;
`;
function ActionBar({onIconClick}) {
    return (
      <Container>
        <Icon onClick={onIconClick}>+</Icon>
      </Container>
    );
  }
  ActionBar.propTypes = {
    onIconClick: PropTypes.func,
  };
  
  export default ActionBar;