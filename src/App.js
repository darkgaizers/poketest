import React, { Component } from 'react'
import './App.css'
import Header from './components/Header'
import DeckList from './components/DeckList'
import ActionBar from './components/ActionBar';
import styled from 'styled-components';
import CardListDialog from './components/CardListDialog'
const _ = require('lodash')
const COLORS = {
  Psychic: "#f8a5c2",
  Fighting: "#f0932b",
  Fairy: "#c44569",
  Normal: "#f6e58d",
  Grass: "#badc58",
  Metal: "#95afc0",
  Water: "#3dc1d3",
  Lightning: "#f9ca24",
  Darkness: "#574b90",
  Colorless: "#FFF",
  Fire: "#eb4d4b"
}
const Container = styled.div`
  flex-direction: row;
  justify-content: flex-start;
  align-item: center;
`;
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      endpoint: 'http://localhost:3030/api/cards',
      allCards: [],
      cards: [],
      dialog: { state: false }
    };
  }
  componentDidMount() {
    this.prepareCards()
  }
  prepareCards() {
    let apiEndpoint = this.state.endpoint
    fetch(apiEndpoint).then(res => res.json()).then(data => {
      
      let cards = this.calcCards(data.cards)
      //console.log(cards)
      this.setState({ "allCards": cards })
    })
  }
  calcCards(cards) {
    let cardArr = []
    cards.map((c, idx) => {
      //console.log(c)
      let newHP = c.hp > 100 ? 100 : 0
      let newWeakness = c.weaknesses ? c.weaknesses.length > 1 ? 100 : 0 : 0
      let newDmg = 0;
      if (c.attacks)
        c.attacks.map((atk, adx) => {
          let pureNumber = atk.damage.replace(/\D/g, '') * 1
          //console.log(pureNumber)
          newDmg += pureNumber
        })
      newDmg = newDmg > 100 ? 100 : newDmg
      let newHap = ((c.hp / 10) + (newDmg / 10) + 10 - (newWeakness)) / 5
      cardArr.push({
        name: c.name,
        hp: newHP,
        atk: newDmg,
        weakness: newWeakness,
        happiness: newHap,
        imageUrl:c.imageUrl,
      })
    })
    return cardArr
  }
  openDialog = () => {
    console.log("open dialog")
    this.setState({ "dialog": { state: true } })
  }
  onClose = () => {
    console.log("close dialog")
    this.setState({ "dialog": { state: false } })
  }

  onSelectCard =(targetCard)=>{
    let cards = this.state.cards
    cards.push(targetCard)
    this.setState({cards:cards})
    let ac =_.filter(this.state.allCards, card => {
      return card.name !== targetCard.name
    })
    this.setState({allCards:ac})
  }
  onRemoveCard =(card)=>{
    let cards = this.state.cards
    cards.pop(card)
    this.setState({cards:cards})
  }
  onSearch=(e)=>{
    console.log(e.target.value)
    let ac =_.filter(this.state.allCards, card => {
      return card.name.toUpperCase().indexOf(e.target.value.toUpperCase()) >= 0
    })
    this.setState({allCards:ac})

}
  render() {
    return (
      <div className="App">
        <Container>
          <Header title="My Pokedex EX" />
          <DeckList cards={this.state.cards} onSelectCard={this.onRemoveCard} />
          {
            this.state.allCards.length > 0 ?
              <ActionBar onIconClick={this.openDialog} />
              : null
          }
          <CardListDialog cards={this.state.allCards} open={this.state.dialog.state} onClose={this.onClose} onSelectCard={this.onSelectCard} onSearch={this.onSearch} />
        </Container>
      </div>
    )
  }
}

export default App
