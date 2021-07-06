import React, { Component } from 'react'
import {Card,Buuton} from 'react-bootstrap/'

export class FavPageCard extends Component {
    render() {
        return (

            <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={this.props.item.drinks.strDrinkThumb}/>
            <Card.Body>
     
              <Card.Title>Pick Your drinks  </Card.Title>
              <Card.Text>
              {this.props.item.drinks.strDrink}
              </Card.Text>
              <Button variant="primary" onClick={()=>this.props.deleteFun(this.props.item.drinks.idDrink)}> Delete</Button>
              <Button variant="primary"  onClick={()=>this.props.showModal(this.props.item)}> Update</Button>
            </Card.Body>
          </Card> 
        
        )
    }
}

export default FavPageCard
