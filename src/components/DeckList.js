import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import CardItem from './CardItem'
const Container = styled.div`
  flex: 1;
  min-height:500px;
  flex-direction: row;
  justify-content: flex-start;
  align-item: center;
  max-height:30vh;
  overflow:auto;
`;
function DeskList({cards,onSelectCard}) {
    return (
      <Container>
        {
            cards.map((card,idx)=>{
                return <CardItem key={"card_"+idx} {...card} action={{text:"-",logic:onSelectCard}} />
            })
        }
      </Container>
    );
  }
  DeskList.propTypes = {
    cards: PropTypes.array,
    onSelectCard: PropTypes.func,
  };
  
  export default DeskList;