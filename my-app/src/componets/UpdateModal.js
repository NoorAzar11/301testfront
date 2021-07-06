import React, { Component } from 'react'

export class UpdateModal extends Component {
    render() {
        return (
           
      <Modal show={this.props.showModal} onHide={this.props.closeModal}>
      <Modal.Header closeButton>
        <Modal.Title>Update Modal</Modal.Title>
      </Modal.Header>
      <Modal.Body>
          
          
      <Form onSubmit={()=>this.props.updateFun(this.props.item)}>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>UpdateName</Form.Label>

    <Form.Control type="text" placeholder="Enter email" defaultvalue={this.props.strDrink} name="strDrink"/>
    <Form.Text className="text-muted">

    </Form.Text>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>update Drinks</Form.Label>
    <Form.Control type="password" placeholder="Password" defaultvalue={this.props.strDrinkThumb} name="strDrinkThumb"/>
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Check me out" />
  </Form.Group>
  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>

          
         </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={this.props.closeModal}>
          Close
        </Button>
       
      </Modal.Footer>
    </Modal>
        )
    }
}

export default UpdateModal
