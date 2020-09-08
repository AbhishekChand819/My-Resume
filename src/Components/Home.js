import React, { Component } from 'react';

class Home extends Component {
  render() {

    if(this.props.data){
      var name = this.props.data.name;
      var occupation1= this.props.data.occupation1;
      var occupation2= this.props.data.occupation2;
      var description= this.props.data.description;
      var city= this.props.data.address.city;
      var networks= this.props.data.social.map(function(network){
        return <li key={network.name}><a href={network.url}><i className={network.className}></i></a></li>
      })
    }

    return (
      <section id="home">
      <div className="row banner">
         <div className="banner-text">
            <h1 className="responsive-headline">I'm {name}.</h1>
            <h3>I'm a {city} based <span>{occupation1}</span> and <span>{occupation2}</span> {description}</h3>
            <hr />
            <ul className="social">
               {networks}
            </ul>
         </div>
      </div>
   </section>
    );
  }
}

export default Home;
