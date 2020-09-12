import React from 'react';

class Todo extends React.Component {
    constructor(props){
        super(props);
    }
    
    render () {
        return (
            <li>
                {this.props.index} : 
                {this.props.text} 
                {
                    !this.props.isDone && <button onClick={this.props.doneTodo}>삭제</button>
                }
                
            </li>
        );
    }
}

export default Todo;