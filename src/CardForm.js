import React from 'react'
import { Form } from "semantic-ui-react"

class CardForm extends React.Component {
  state = { name: "", answer: "" }

  handleSubmnit = (e) => {
    e.preventDefault()
    this.props.add(this.state)
    this.setState({ name: "", answer: "" })

  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }
  render() {
    return (
      <Form onSubmit={this.handleSubmnit}>
        <Form.Group widths="equal">
          <Form.Input
          fluid
          label="Question"
          placeholder="Question"
          name="name"
          value={this.state.name}
          onChange={this.handleChange}
          />
          <Form.Input
          fluid
          label="Answer"
          placeholder="Answer"
          name="answer"
          value={this.state.answer}
          onChange={this.handleChange}
          />
          <Form.Button>Submit</Form.Button>
        </Form.Group>
      </Form>
    )
  }
} 

export default CardForm;
