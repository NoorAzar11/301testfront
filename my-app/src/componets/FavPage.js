import React, { Component } from 'react'
import axios from 'axios'
import UpdateModal from './UpdateModal';
import FavPageCard from './FavPageCard';

export class FavPage extends Component {
    constructor(props){
        super(props);
        this.state={
            cocoktailArray:[],
            show:false,
            strDrink:"",
            strDrinkThumb:"",
            id:-1,
        }
    }

    //to get data from DB 
componentDidMount =()=>{
    const Url=`${REACT_APP_SERVER}/getDatafromDB`;
    axios.get(Url)
    .then((reslut)=>{
        this.setState({

            reslut:cocoktailArray.drinks.data
        })
    })
    .catch(err=>{
        console.log("wrong",err)
    })

}
//Delete
 deleteFun=()=>{
    const Url=`${REACT_APP_SERVER}/delete/${id}`;
    axios.delete(Url)
    .then((reslut)=>{
        this.setState({
            reslut:cocoktailArray.drinks.data
        })

    })
    .catch((err) =>{
        console.log("wrong",err)
    });


 };

///Update 

showModal=(object) =>{
    this.setState({
        show:true,
        strDrink:object.strDrink,
        strDrinkThumb:object.strDrinkThumb

    })
}

closeModal =()=>{
    this.setState({
        show:false
    })
}

updateFun=(event)=>{
    event.preventDefault(); 
    const updateObj={
        id:this.state,
        strDrink:event.target.strDrink.value,
        strDrinkThumb:event.target.strDrinkThumb.value,
    }
   const Url=`${REACT_APP_SERVER}/update`;
    axios.put(Url)
    .then((reslut)=>{
        this.setState({
            show:false,
            reslut:cocoktailArray.drinks.data

        })
    })

    .catch((err) =>{
        console.log("try again",err)
    });

}


    render() {
        return (

 <Container>
  <Row>
      {this.state.cocoktailArray.map((item,idx) =>{

     
return(
    <Col key={idx}>
        <FavPageCard 
        key={idx}
        item={item}
        idx={idx}
        deleteFun={this.deleteFun}
        showModal={this.showModal}
        />
    </Col>
);
     })
     }
  </Row>

<UpdateModal

showModal={this.showModal}
updateFun={this.updateFun}
closeModal={this.closeModal}
strDrink={this.state.strDrink}
strDrinkThumb={this.state.strDrinkThumb}

/>
</Container>
          
        )
    }
}

export default FavPage
