import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class Home extends Component {
    render() {
        return (
            <div>
                Home
                <h1>Hello My Study Project!</h1>
                <div>
                    개발을 시작해보자 redux react-router 등을 이용한 프로젝트<br/>
                    하다보면 되겠지...
                </div>
                <Link to="/auth">auth</Link>
            </div>
        );
    }
}

export default Home;