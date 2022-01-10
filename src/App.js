import React, { Component } from "react";
import {getCharacters , getCharacterWithUrl} from "./Fetcher";

class App extends Component {

  state = {
      StarwarsApi : [],
      loading : false ,
      individual : {},
      cardClicked  : false
  }

 async componentDidMount() {
     /*This change is to overide master*/ 
   /* master changed again*/
   /*shabareesh rebasing again test*/
   const data =  getCharacters()
      data.then(data =>{
          if(data.message === 'ok'){

             this.setState({
                 loading : true ,
                 StarwarsApi : data.results
             })
          }
      })

  }
 async getdetails  (star) {

    const data =  getCharacterWithUrl(star.url)

     data.then(data =>{
         if(data.message ===  'ok'){
      //console.log(data.result)
             this.setState({...this.state , individual : data.result ,  cardClicked  : true } , () =>{
                 console.log(this.state.individual)
             })
         }

     })
  }

  render() {
    return <div className="App">

        Star Wars (May the Force be with you )
        {this.state.cardClicked ? <div className={"details"}> {
            this.state.individual.description
        }<div>
            <div>  name: {this.state.individual.properties.name} </div>
            <div>  eye_color:{this.state.individual.properties.eye_color} </div>
            <div>   gender: {this.state.individual.properties.gender} </div>
            <div>    hair_color: {this.state.individual.properties.hair_color} </div>
            <div>   homeworld: {this.state.individual.properties.homeworld} </div>
            <div>   mass: {this.state.individual.properties.mass} </div>

        height : {this.state.individual.properties.height}
        </div>
            <div>
            birth_year: {this.state.individual.properties.birth_year}
            </div>
            <div>created: {this.state.individual.properties.created} </div>
        <div> edited:{this.state.individual.properties.edited} </div>

            <div> skin_color: {this.state.individual.properties.skin_color} </div>
        </div> :  null}
        {this.state.loading ?  this.state.StarwarsApi.map(star => {
            return (
                <div key={star.uid} className={"Star"}>

                    <div className={"StarwarCard"} onClick={ () =>  this.getdetails (star)}>   {star.name} </div>

                </div>
            )
        }): 'Loading ...'}
    </div>;
  }
}

export default App;
