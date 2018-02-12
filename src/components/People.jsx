import React, { Fragment } from 'react';
import 'isomorphic-fetch';
import 'es6-promise';

class People extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            erorr: null,
            isLoaded: false,
            people: []
        };
    }

    componentDidMount() {
        fetch("https://ghibliapi.herokuapp.com/people")
        .then((res) => res.json())
        .then((result) => {
            this.setState({
                isLoaded: true,
                people: result
            });
        }, (error) => {
            this.setState({
                isLoaded: true,
                error
            });
        })
    }
    
    render() {
     const { error, isLoaded, people } = this.state;
        if (error) {
            return <h1>Error: </h1>
        } else if (!isLoaded) {
            return <h1>....is Loading</h1>
        } else {
            return (
             <Fragment>   
              <ul>
                {people.map(person => (
                    <li key={people.id}>
                      <div class="card text-center" key={people.id}>
                        <div class="card-block">
                            <h2 class="card-title">Name: {person.name}</h2>
                            <h4 class="card-subtitle mb-2 text-muted">Gender: {person.gender}</h4>
                            <h4 class="card-subtitle mb-2 text-muted">Age: {person.age}</h4>
                            <p class="card-text">Eye Color: {person.eye_color} <br/> Hair Color: {person.hair_color}</p>
                            <a href={person.url} class="card-link">Link To Person</a>
                        </div>
                      </div>
                    </li>
                ))}
              </ul>
             </Fragment> 
            )
        }
    }
}

export default People;