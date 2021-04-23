import React, { Component } from 'react';
import SearchBox from '../components/SearchBox';

class FoodBox extends Component {
    constructor(){
        super();
        this.state={
            details:[
                {
                    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT74-p3oWpuQhrHdHB20x-eIRy9ksOpkWlMsw&usqp=CAU",
                    name:"Apple",
                    cal:95
                },
                {
                    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRi94BSgqwm6Zzv7mx3DJWxYRWNUPC0gf3pOA&usqp=CAU",
                    name:"Banana",
                    cal:105
                },
                {
                    image:"https://www.telegraph.co.uk/multimedia/archive/01834/orange_1834038b.jpg",
                    name:"Orange",
                    cal:45
                },
                {
                    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3F4wQ9Ezf5Y8VGhTDGVRRw8cYZJyRuANBpw&usqp=CAU",
                    name:"Grapes",
                    cal:55
                },
                {
                    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZMW7OiCvEfO7mYou3iV4q3yZPgSGTnacnKw&usqp=CAU",
                    name:"Dates",
                    cal:282
                },


        ]}
    }
    render(){
        return <SearchBox details={this.state.details}/> //passing the details of food to search box component as props
    }  
}

export default FoodBox