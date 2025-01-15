class A{
    //1.Properties/Variable
    name; // This is only decleration
    surname=''; // This is delcleration and initialization
    address='neemuch';// This is decleration and initialzation
    state;

    //2. Constructor
    constructor(){
        // The role of constructor is initilize the properties
        //this.member
        this.name = 'Umesh';
        this.surname="prajapati";
        this.fatherName='Ramlal';
    }

//3. Methods
showName(){
    console.log(this.name+this.surname+this.address+this.fatherName); // this is an internal object
}

setState(data){
    this.state = data;

}

showState(){
    console.log(this.state)
}

}

class B extends A{
    //1 Properties
    friends1; // This is only decleration
    friends2=''; // This is decleration and initialization
    //2. Constructor
    constructor(frnd3){ //frnd3 is formal argument
        super();
        this.friends1='Rakesh';
        this.friends2='Dev';
        this.friends3=frnd3;
    }


    //3. Methods
    listMyFriends(){
        console.log(this.friends1);
        console.log(this.friends2);
        console.log(this.friends3);


    }
}

let obj2 = new B('Raj');

obj2.listMyFriends();
obj2.showName();

obj2.setState({
    name:"anil",
    surname:"shrama"
});

obj2.showState();




// Lets create the class Object
// let object = new ClassName();

//let obj = new A();

// this obj is an external object
// object.member

//obj.showName() // . is member selection operator