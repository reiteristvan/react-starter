
import React from 'react';

export default class FirstPage extends React.Component{
    constructor(props){
        super(props);

        this.click = this.click.bind(this);
    }
    
    click(){
        console.log(this.props);
        console.log('clicked');
    }

    render(){
        return (
            <div>
                <h1>First Page</h1>
                <br />
                <input type="button" onClick={this.click} value="Click" />
            </div>
        );
    }
}