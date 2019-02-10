import React from 'react';
import PropTypes from 'prop-types';
import CardList from "./CardList";
import Dialog from '@material-ui/core/Dialog';
import styled from 'styled-components';
const Container = styled.div`
  flex: 1;
  flex-direction: column;
  justify-content: flex-start;
  align-item: center;
  display:flex;
`;
function CardListDialog({cards,onClose,onSelectCard,onSearch,...other}) {
    console.log(cards)
    return (
        <Dialog onClose={onClose} {...other}>
            <Container>
                <div onClick={onClose}>Close</div>
                <CardList cards={cards} onSelectCard={onSelectCard} onSearch={onSearch} />
            </Container>
        </Dialog>
    );
}

CardListDialog.propTypes = {
    onClose: PropTypes.func,
    cards: PropTypes.array,
    onSelectCard: PropTypes.func,
    onSearch: PropTypes.func,
};

export default CardListDialog