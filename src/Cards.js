import React from "react"
import { Table, Button } from "semantic-ui-react"
import Card from './Card'


const Cards = ({ cards, remove }) => (
  <Table celled padded>
  <Table.Header>
    <Table.Row>
      <Table.HeaderCell>Question example</Table.HeaderCell>
      <Table.HeaderCell>Answer example</Table.HeaderCell>
      <Table.HeaderCell>Options</Table.HeaderCell>
    </Table.Row>
  </Table.Header>

  <Table.Body>
    {
      cards.map( card => ( 
        <Card key={card.id} {...card} remove={remove} />
      ))
    }
  </Table.Body>
</Table>
);

export default Cards;
