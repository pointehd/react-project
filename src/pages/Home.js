import React, { Component, useState } from 'react';
import { Link } from 'react-router-dom';

class _Home extends Component {
    store = 1;
    constructor(props) {
        super(props);
        this.store = null;
        this.state = { count: 0 };
    }

    componentDidMount() {
        this.fetchData();
    }

    fetchData = async () => {
        const { page } = this.props;
        const articles = await getArticle(page);
        this.setState({ articles });
    }

    countUp() {
        const { count } = this.state;
        this.setState({ count: count + 1 });
    }

    render() {
        const { count } = this.state;
        return (
            <div>
                <h1>home</h1>
                {count}
                <button onClick={this.countUp.bind(this)}> up up</button>
                <div>
                    개발을 시작해보자 redux react-router 등을 이용한 프로젝트<br />
                    하다보면 되겠지...
                </div>
                <Link to="/auth">auth</Link>
                <Link to="/"></Link>
            </div>
        );
    }
}

const Home = () => {
    const [count, setCount] = useState(0);

    const countUp = () => {
        setCount(count + 1);
    }

    return (
        <div>
            Home
            <h1>Hello My Study Project!</h1>
            <div>
                {count}
                <button onClick={countUp}>count up up</button>
                <div>
                    개발을 시작해보자 redux react-router 등을 이용한 프로젝트<br />
                    하다보면 되겠지...
                </div>
            </div>
            <Link to="/auth">auth</Link>
        </div>
    );
}

export default _Home;