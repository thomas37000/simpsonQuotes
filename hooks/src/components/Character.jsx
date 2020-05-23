import React, { useState, useEffect } from 'react';

import { Link, useParams } from 'react-router-dom';
import { Button, Card, Nav } from 'react-bootstrap';
import Axios from 'axios';

import styles from './Character.css';
import { CardFooter } from 'react-bootstrap/Card';

export default function Character() {
  const { id } = useParams();
  //setData c'est comme this.state donc pour changer la data quand on utlise useState
  const [ data, setData ] = useState({});
  const [ likes, setLikes ] = useState(0);
  const [ dislikes, setDisLikes ] = useState(0);

  useEffect(() => {
    // Axios.get('https://github.com/akabab/starwars-api')
   Axios.get(`https://cdn.rawgit.com/akabab/starwars-api/0.2.1/api/id/${id}.json`)
   .then(response => setData(response.data)) 
   // le [] ce sont des valeurs que React va surveiller et si les valeurs changent ils va excecuter les paramètres
    // les hooks et cette fonction [] permet à ne pas avoir à faire componentDidMount, componentDidUpdate, componentWillUpDate
  }, [id])

  //destructuration de data
  const { affiliations, homeworld, image, name } = data;
  return(
    <> 
      {/* <Link to="/"><Button variant="success">Home</Button></Link> */}
      <Card style={{ width: '23rem' }}>
        <Card.Img variant="top" src={image} alt={name} />
        <Card.Body>
          <Card.Title><h2>{name}</h2></Card.Title>
          <Card.Text><h3>homeworld: {homeworld}</h3></Card.Text>
          <Card.Text>
            {affiliations}
          </Card.Text>
          <Card.Link>
            <Button 
              variant="primary"
              type="button" 
              onClick={
                () => setLikes(likes + 1)
                }
                >Like ({likes})
            </Button> 
            <Button 
              variant="danger"
              type="button" 
              onClick={() => setDisLikes(dislikes - 1)}>Dislike ({dislikes})
            </Button>
          </Card.Link>
          <Card.Text>
              <a href="#" class="fa fa-facebook">{' '}</a>
              <a href="#" class="fa fa-twitter">{' '}</a>
            <a href="#" class="fa fa-instagram">{' '}</a>
              <a href="#" class="fa fa-pinterest">{' '}</a>
            {/* <a href="/some/valid/uri" class="fa fa-snapchat-ghost">{' '}</a> */}
          </Card.Text>   
        </Card.Body>
      </Card>
    </>
  )
}

