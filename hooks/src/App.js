import React from 'react';
import { Link, Route, Switch, useHistory, useParams } from 'react-router-dom';
import { Button, Nav } from 'react-bootstrap'

import Character from './components/Character';
import styles from './App.css';

const Api = () => <h1>Choose a character from Star Wars</h1>
const ShowDate = (props) => {
  // const { year, month, day } = props.match.params;
  // la même const mais en hooks 
  const { year, month, day } = useParams();
  return <div>
    <p>{year} / {month} / {day}</p>
      {/* history.push permet de rédiriger vers une certaine url 
          dans l'inspect / components, dans history:
          quand dans les props il y a un f c'est une méthode
      */}

    {/* location: c'est tout ce qui concerne l' url
        pathname: c'est le chemin relatif ex: /2020/05/22 
        search: ce sont tous les paramètres qu' on peut avoir
        ex si on veut les paramètres d' un utilisateur 
        /2020/05/22/?name=thomas?age=39 donc search: "?name=thomas?age=39"
    */}

    {/* match: permet de récupérer les valeurs de l' Api
        passées dans la Route ex: Route path="/:year/:month/:day"
    */}

      {/* permet de rediriger de la home vers l'url qui a le bouton back to home via la flèche à côté du loading */}
    <button type="button" onClick={() => props.history.push('/')}>Back to Home !</button>
  </div>
}

function App() {
  const history = useHistory();
  const randomNumber = () => {
    const random = Math.floor(Math.random() * 89);
    return random;
  };
  return (
    <React.Fragment>
        <Nav defaultActiveKey="/home">
          <Nav.Item>
            <Nav.Link href="/">Home</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link-1"><Link to="/character/1">Luke Skywalker</Link></Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link-2"><Link to="/character/5">Leia Organa</Link></Nav.Link>
          </Nav.Item>
          <Nav.Item><Button variant="light" onClick={() => history.push(`/character/${randomNumber()}`)}>Random</Button>
          {/* <Nav.Link eventKey="link-3"><Link to="/character/${randomNumber()">Random Character</Link></Nav.Link> */}
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="disabled" disabled>Star Wars Movies</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="disabled" disabled>Star Wars Video Games</Nav.Link>
          </Nav.Item>
        </Nav>

      <Switch>
        <Route exact path="/" component={Api} />
        {/* /:id permet de récupérer l' id d' un personnage dans l' Api  */}
        <Route path="/character/:id" component={Character} />
        <Route path="/:year/:month/:day" component={ShowDate} />
      </Switch>
    </React.Fragment>
  );
}

export default App;
