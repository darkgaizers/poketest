import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import LinearProgress from '@material-ui/core/LinearProgress';
import Fab from '@material-ui/core/Fab';
const Container = styled.div`
  flex: 1;
  flex-direction: row;
  justify-content: flex-start;
  align-item: center;
  display:flex;
  margin:5px;
`;
const RowContainer = styled.div`
  flex: 1;
  display:flex;
  flex-direction: row;
  justify-content: flex-start;
  align-item: center;
`;
const ColumnContainer = styled.div`
  flex: 1;
  flex-direction: row;
  justify-content: flex-start;
  align-item: center;
`;
const LeftLayout = styled.div`
  background-color:#ccc;
`;
const RightLayout = styled.div`
background-color:#ccc;
min-width:200px;
`;
const Icon = styled.button`
font-weight:bold;
font-size:2em;
`;
function CardItem({ imageUrl,name,hp,atk,weakness,happiness,action}) {
    return (
      <Container>
        <LeftLayout><img src={imageUrl} alt={"image of "+name} onClick={action.logic} /></LeftLayout>
        <RightLayout>
            <ColumnContainer>
                <RowContainer><div style={{flex:1}}>{name}</div>
                <div>
                {action? <Fab size="small" onClick={action.logic}>{action.text}</Fab>
                :null}
                </div>
                
                </RowContainer>
                <div>HP : <LinearProgress variant="determinate" value={hp} /></div>
                <div>STR : <LinearProgress variant="determinate" value={atk} /></div>
                <div>WEAK : <LinearProgress variant="determinate" value={weakness} /></div>
                <div>HAPPINESS : <LinearProgress variant="determinate" value={happiness} /></div>
                
            </ColumnContainer>
        </RightLayout>
      </Container>
    );
  }
  CardItem.propTypes = {
    imageUrl: PropTypes.string,
    name: PropTypes.string,
    hp: PropTypes.int,
    atk: PropTypes.int,
    weakness: PropTypes.int,
    happiness: PropTypes.int,
    action:PropTypes.func
  };
  
  export default CardItem;