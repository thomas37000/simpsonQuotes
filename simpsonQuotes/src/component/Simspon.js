import React from 'react';
import axios from 'axios';

class QuotesCard extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            simpsons: ''
        };
        //.bind permet d'utliser this
        this.getSimpson = this.getSimpson.bind(this);
    }   
   
    getSimpson (){
        axios.get(`https://simpsons-quotes-api.herokuapp.com/quotes`)
        .then(response => response.data)
            .then(data => {
                this.setState({ simpsons: data[0] });
                //console.log(data);
            });
    }

    render() {
        return (
            <>
                <h1 className="title">Simpsons Quotes in React !!!</h1>
                <button type="button"id="btn" onClick={this.getSimpson}>
                        Select a new quote Simspon</button>

                <div className="content" id="quotes">
                    <p><strong>{this.state.simpsons.quote}</strong></p>
                    <p>{this.state.simpsons.character}</p>
                    <img src={this.state.simpsons.image} alt={this.state.simpsons.character} />
                </div>
            </>
        );
    }
}

export default QuotesCard;

    // componentDidMount() {
    //     axios.get(`https://simpsons-quotes-api.herokuapp.com/quotes`)
    //         // Extract the DATA from the received response
    //         .then(response => response.data)
    //         // Use this data to update the state
    //         .then(data => {
    //             this.setState({ simpsons: data[0] });
    //             console.log(data);
    //         });
    // }