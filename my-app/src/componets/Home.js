import React, { Component } from 'react';
import axios from 'axios';
import HomeCard from './HomeCard';

import {Container,Row,Col} from 'react-bootstrap/'

export class Home extends Component {
    constructor(props){
        super(props);
        this.state={
            cocotailData:[],
        }
    }

    componentDidMount=()=>{
        const Url=`${REACT_APP_SERVER}/getDatafromAPI`;
        axios.get(Url)
        .then(reslut =>{
            this.setState({
                cocotailData:reslut.drinks.data
            })
        })
        .catch(err=>{
            console.log("wrong",err)
        })
    }
//we use post to add data to fav

    AddFav=(object)=>{
        const Url=`${REACT_APP_SERVER}/addToFav`;
        axios.post(Url,object)
        .then(reslut=>{
            console.log(reslut.cocotailData)
        })
        .catch(err=>{
            console.log("wrong",err)
        })
        
    }

    render() {
        return (

            <Container>

            <Row>
{this.state.cocotailData.map((item,idx)=>{

return (


              <Col>

              <HomeCard
              key={idx}
              item={item}
              idx={id}
              AddFav={this.AddFav}
              />
              </Col>

           
);
             
            })
        }
            </Row>
          </Container>
        )
    }
}

export default Home
