import React from "react";
import { Button, Table, } from "semantic-ui-react";

const Card = ({ id, name, answer, remove }) => (
  <Table.Row>
    <Table.Cell>{name}</Table.Cell>
    <Table.Cell>{answer}</Table.Cell>
    <Table.Cell>
      <Button color="red" onClick={ () => remove(id)}>
        Delete
      </Button>
    </Table.Cell>
  </Table.Row> 
);

export default Card;
