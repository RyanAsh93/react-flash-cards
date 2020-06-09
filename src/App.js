import React from 'react';
import './App.css';
import { render } from '@testing-library/react';
import { Container, Header, Button, Icon, Segment } from 'semantic-ui-react';
import Cards from './Cards';
import CardForm from './CardForm'


class App extends React.Component {
  state = {
    cards: [
      {id: 1, name: "What is a function?", answer: "relation from  a set of inputs to relate  exactly to one output" },
      {id: 2, name: "What does JSX stand for?", answer: "JavaScript XML" },
      {id: 3, name: "What is map used for?", answer: "creates new array and calls the function once for each element in that array" },
      {id: 4, name: "Does filter change an array?", answer: "No it passes in the new elements to original array" },
    ],
    showForm: true,
  }

  toggleForm = () => this.setState({ showForm: !this.state.showForm })

renderCards = () => {
  const { cards } = this.state
  return cards.map ( card =>
  <li key={card.id}>{card.name}</li>
  )
}

getId = () => {

}

addCard = (cardData) => {
  let card = { id: this.getId(), ...cardData }
  this.setState({ cards: [card, ...this.state.cards], })
}

removeCard = (id) => {
  const cards = this.state.cards.filter( card => {
    if (card.id !== id )
    return card
  })
  this.setState({ cards: [...cards] })
}

render() {
  return (
    <Container style={{ paddingTop: "25px" }}>
      <Header as="h1">React Flash Cards Q & A</Header>
      <Header as="h2">Create your own cards</Header>
      <br />
      <Segment basic>
        <Button icon color="orange" onClick={this.toggleForm}>
          <Icon name={this.state.showForm ? 'angle double up' : 'angle double down' } />
        </Button>
        {this.state.showForm ? <CardForm add={this.addCard}/> : null }
      </Segment>
      <br />
      <Cards cards={this.state.cards} remove={this.removeCard} />
    </Container>
  )
}

}

export default App;
