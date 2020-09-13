import React from 'react';

class Todo extends React.Component {
    constructor(props){
        super(props);
    }
    
    render () {
        const {otherDone} = this.props;
        return (
            <li>
                {this.props.index} : 
                {this.props.text} 
                {
                    !this.props.isDone && <button onClick={this.props.doneTodo}>삭제</button>
                }
                {
                    !this.props.other && <button onClick={() => otherDone(this.props.index)}>다른방법의 삭제</button>
                }
                
            </li>
        );
    }
}

export default Todo;