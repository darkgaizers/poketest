import React, { Component } from 'react'
import PropTypes from 'prop-types';
import styled from 'styled-components';
import CardItem from './CardItem'
import SearchBar from './SeachBar'
const Container = styled.div`
  flex: 1;
  flex-direction: row;
  justify-content: flex-start;
  align-item: center;
  background-color:#fefefe;
  min-height:300px;
  min-width:100vw;
`;
const Content = styled.div`
  flex: 1;
  flex-direction: row;
  justify-content: flex-start;
  align-item: center;
`;
class CardList extends Component {
    onSelect = (card)=>{
        this.props.onSelectCard(card)
    }
    render() {
        let {cards,onSearch} = this.props
        return (
            <Container>
                <SearchBar onChange={onSearch}/>
                <Content>
                    {
                        cards.map((card, idx) => {
                            return <CardItem key={"card_" + idx} {...card} action={{text:"+",logic:()=>{this.onSelect(card)}}} />
                        })
                    }
                </Content>
    
            </Container>
        );
    }
}
CardList.propTypes = {
    cards: PropTypes.array,
    onSelectCard: PropTypes.func,
    onSearch: PropTypes.func,
};

export default CardList;