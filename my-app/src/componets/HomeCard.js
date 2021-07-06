import React, { Component } from 'react'
import {Card,Button} from 'react-bootstrap/'

export class HomeCard extends Component {
    render() {
        return (

            <Card style={{ width: '18rem' }}>

            <Card.Img variant="top" src={this.props.item.strDrinkThumb} />
            <Card.Body>
              <Card.Title>{this.props.item.strDrink}</Card.Title>
              <Card.Text>
              
              </Card.Text>
              <Button variant="primary" onClick={()=>this.props.AddFav(this.props.item)}>Added To Fav</Button>
            </Card.Body>
          </Card>
        )
    }
}

export default HomeCard
