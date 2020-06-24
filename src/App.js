import React, { Component } from 'react';
import StarRatings from 'react-star-ratings';
import './App.css'; 


class App extends Component {

  constructor(props)
  {
    console.log('App.js constructor')
    super(props);
    this.state ={
      token:50,
      rating:0,
      ans:[],

    }

    this.changeRating = this.changeRating.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

  }

  handleSubmit(event) {
    event.preventDefault()
    const input_form = document.getElementById('input-form')
    const user = event.target.elements.checkmail.value
    // document.getElementById('p-1').innerHTML='<h2>'+user+'</h2><h2>its rating :'+this.state.rating+'</h2>';
    let user_token_val=50
    if (this.state.rating===5)
    {
      user_token_val=this.state.token+20

    }
    this.state.ans.push({email:user,rating_val:this.state.rating,user_token:user_token_val})
    console.log(this.state.ans)
    this.changeRating(0)
    input_form.reset()

  }

  changeRating( newRating, name ) {
    this.setState({
      rating: newRating
    });
  }



  

  render(){
  return (
    <div className='App'>
      <div>
        <h1>Enter Your Emailaddress</h1>
      </div>
      <form id="input-form" onSubmit={this.handleSubmit}>
        <input className="input1" type="email" name="checkmail" />
        <button className="button1">Submit</button>
        
      </form>
      
      <StarRatings
        rating={this.state.rating}
        starRatedColor="#ffc107"
        changeRating={this.changeRating}
        numberOfStars={5}
        name='rating'
      />
        
   </div>   
  )
  
  }
}

export default App;