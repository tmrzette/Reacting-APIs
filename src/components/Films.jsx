import React, { Fragment } from 'react';
import 'isomorphic-fetch';
import 'es6-promise';

class Films extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            erorr: null,
            isLoaded: false,
            films: []
        };
    }

    componentDidMount() {
        fetch("https://ghibliapi.herokuapp.com/films")
        .then((res) => res.json())
        .then((result) => {
            this.setState({
                isLoaded: true,
                films: result
            });
        }, (error) => {
            this.setState({
                isLoaded: true,
                error
            });
        })
    }
    
    render() {
     const { error, isLoaded, films } = this.state;
        if (error) {
            return <h1>Error: </h1>
        } else if (!isLoaded) {
            return <h1>....is Loading</h1>
        } else {
            return (
             <Fragment>   
              <ul>
                {films.map(film => (
                    <li key={film.id}>
                      <div className="card" key={film.id}>
                        <div className="card-block">
                            <h2 className="card-title">{film.title}</h2>
                            <h4 className="card-subtitle mb-2 text-muted">Director: {film.director}</h4>
                            <h4 className="card-subtitle mb-2 text-muted">Producer: {film.producer}</h4>
                            <p className="card-text">{film.description}</p>
                            <a href={film.url} className="card-link">Link To Film</a>
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

export default Films;