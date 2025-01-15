//1. Import Area
import React from 'react';
import ReactDOM from 'react-dom/client';

//Every Component can have its own data/states
class A extends React.Component{
  //1.properties

  //2. Constructor
  constructor(){
    super();
    // state is a Js object of the class which can hold some data
    this.state = {
                 name:"Rakesh",
                 surname:"sharma",
                 address:"Manasha"
                }// state initialization
  

  }


  //3.Methods
     return(){ <>
             <h1>OKLABS {this.state.name} {this.state.surname}</h1>;
             <h1>OKLABS {this.state.address}</h1>;
             <h1>OKLABS {this.props.name}</h1>;
             <h1>OKLABS {this.props.surname}</h1>;
             <h1>OKLABS {this.props.children}</h1>;
           </>
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<A name="Umesh" surname="Dollor">neemuch</A>);
