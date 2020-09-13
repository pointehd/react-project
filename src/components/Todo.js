import React from 'react';

class Todo extends React.Component {
    constructor(props){
        super(props);
    }
    
    render () {
        const {otherDone, todo} = this.props;
        return (
            <li>
                {this.props.index} : 
                {this.props.text} <span style={{
                    display: "inline-block",
                    width: "20px"
                }}> </span>
                {
                    !todo.done && <button onClick={this.props.doneTodo}>완료</button>
                }
                {
                    !todo.done && <button onClick={() => otherDone(this.props.index)}>다른방법의 삭제</button>
                }
                {
                    (todo.done && !todo.deleted) && <button onClick={() => this.props.deleted(this.props.index)}>완전삭제</button>
                }
                
            </li>
        );
    }
}

export default Todo;