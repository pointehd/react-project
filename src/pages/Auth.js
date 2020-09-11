import React, { Component } from 'react';
import {Link} from 'react-router-dom';

export default class Auth extends Component {
    render() {
        return (
            <div>
                Auth
                <Link to="/">home</Link>
            </div>
        );
    }
}