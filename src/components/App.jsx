import React, { Fragment } from 'react';
import 'isomorphic-fetch';
import 'es6-promise';
import FilmsButton from './FilmsButton';
import PeopleButton from './PeopleButton'


class App extends React.Component {
    render() {
        return(
        <Fragment>
            <img src="logo.png" alt=""/>
            <div>
                <span><FilmsButton /></span><span><PeopleButton /></span>
            </div>
        </Fragment>
    )}

}

export default App;