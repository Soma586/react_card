import React from 'react';
import ReactDom from 'react-dom';
import "./style.css";


/*
const element = <h1>Hello World</h1>;

console.log(element);

ReactDom.render(element,document.getElementById('root'));
*/

/*
ReactDom.render(
    <h1>Hello World</h1>, document.getElementById('root')
);*/


class ContactCard extends React.Component{
    render(){
        return (
            <div className ="card">
            


            <p>Name: {this.props.name}</p>
            <p>Email: {this.props.email}</p>
            <p>Phone: {this.props.number} </p>
            <p>LinkedIn: {this.props.url}</p>
            </div>

        );
    }
}

//const element = <ContactCard name = "Mary"/>;

/*ReactDom.render(
    element, document.getElementById('root')
);*/


function App(){
    return(
        <div>
            <ContactCard name = "Tarik" email = "random@gmail"  number = "123-321-1231" url = "linkedin.com/in/user" />
        </div>
    )
}

/*
const element = <ContactCard name = "Tarik"/>

ReactDom.render(

    element, document.getElementById('root')
);*/


ReactDom.render(

    <App/>, document.getElementById('root')
);


/*
const name = "Tarik"

const element = <h1>Hello , {name}</h1>

ReactDom.render(element , document.getElementById('root'));
*/