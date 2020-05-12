import React, { Component } from "react";

import Form from 'react-bootstrap/Form'
import axios from "axios";

import MessageForm from './message';
//import FormList from "./FormList";
import styles from "./Form.module.css"

export default class Formulaire extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      title: "",
      poster:"",
      movies:[]
    };
    this.handleChange = this.handleChange.bind(this);
    this.poster = this.postUrl.bind(this);
    this.submitForm = this.submitForm.bind(this);
    this.getMovie = this.getMovie.bind(this);
    this.getPostMovie = this.getPostMovie.bind(this);
  }

  componentDidMount() {
    this.getMovie();
    this.getPostMovie();
  }

  getMovie() {
    const url = `https://post-a-form.herokuapp.com/api/movies/`;

    axios
      .get(url)
      .then(response => response.data)
      .then(data => {
        this.setState({ movies: data[0] });
      });
    console.log(this.state);
  }

  getPostMovie() {
    const urlPost = `https://post-a-form.herokuapp.com/api/movies/`;

    axios
      .get(urlPost)
      .then(response => response.data)
      .then(data => {
        this.setState({ movies: data });
      });
    console.log(this.state);
  }


  handleChange(event) {
    const forbidden = "*";
    if (!event.target.value.includes(forbidden)) {
      this.setState({ title: event.target.value });
    }
  }

  postUrl(event) {
    // this.setState({
    //   poster: !this.state.poster
    // });
      //this.setState({ poster: event.target.value });
  }

  submitForm(event) {
    event.preventDefault();
  }

  render() {
    const {data,title, comment,createdAt, updatedAt, poster} = this.props;
    const { movies } = this.state;
    console.log(this.state);

    // const movieList = data
    // movies.map((id, title, poster, comment, createdAt, updatedAt) => 
    //         {
    //           return (
    //               <li 
    //               key={id} 
    //               {...title} 
    //               {...poster} 
    //               {...comment}
    //               {...createdAt}
    //               {...updatedAt}
    //               />
    //           );
    //         })

    return (

      <div>
        {/* <ul>lorem ipsum
          {movieList}
        </ul> */}
      <h2>Quel est ton film préféré ?</h2>
      <Form onSubmit={this.submitForm}>
        <div className={styles.formData} onSubmit={this.handleSubmit}>
          <h1>{this.state.title}</h1>

        <label htmlFor="title">Title :{' '}</label>
          <input
            id="title"
            type="text"
            name="title"
            value={this.state.title}
            onChange={this.handleChange}
          />
          </div>
        <br/>
          <div>
            <label htmlFor="poster">Poster :{' '}</label>
            <input
              id="poster"
              type="text"
              name="url"
              value={this.state.poster}
              onChange={this.postUrl}
            />
          </div>

          <br/>
    
          <Form.Group controlId="exampleForm.ControlTextarea1">
            <Form.Label>Write a Comment :</Form.Label>{' '}
            <div>
              <Form.Control as="textarea" rows="5" className={styles.textarea} />
            </div>
           </Form.Group>
           <div>
        <br/>
              {/* <FormList /> */}
          </div>
          
          <MessageForm onClick={this.state.comment} />

          <div>
            <h1>{movies.title}</h1>
            <h2>{movies.comment}</h2>
            <h3>{movies.createdAt}</h3>
            <h3>{movies.updatedAt}</h3>
            <img src={movies.poster} alt={movies.poster} />
          </div>

      </Form>
      </div>
    );
  }
}
