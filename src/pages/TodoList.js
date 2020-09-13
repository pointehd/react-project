import React, { createRef } from 'react';
import Todo from '../components/Todo';
import { Link } from 'react-router-dom';

class TodoList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            todoList: [
                {
                    text: "zz",
                    done: false,
                    deleted: false
                }
            ],
            addContent: ""
        };
        this.inputRef = createRef();
    }

    componentDidMount() {
        this.inputRef.current.focus();
    }

    aa = 12;
    chageInput = (e) => {
        console.log(this.aa);
        const aa = e.target.value;
        this.setState({
            addContent: aa
        });
    }

    addContent = () => {
        const { todoList, addContent } = this.state
        if(addContent.length ==0){
            return ;
        }
        const todoOb = {
            text: addContent,
            done: false,
            deleted: false
        };
        todoList.push(todoOb);

        this.setState({
            todoList,
            addContent: ""
        })
    }

    press = (e) => {
        if (e.key == 'Enter') {
            this.addContent();
        }
    }

    doneTodo = (index) => {
        const {todoList} = this.state;
        const {todo} = todoList[index];
        
        todoList[index] = {
            ...todoList[index],
            done: true
        }
        console.log(todoList);

        this.setState({
            todoList
        })
        console.log(index);
    }

    deletedTodo =(index) =>{
        const {todoList} = this.state;

        const {todo} = todoList[index];
        
        todoList[index] = {
            ...todoList[index],
            deleted: true
        }
        console.log(todoList);

        this.setState({
            todoList
        })

    }

    render() {
        const { todoList, addContent } = this.state;
        return (
            <div>
                <h1>안녕 투두리스트</h1>
                {this.aa}
                <div>
                    <input ref={this.inputRef} value={addContent} onKeyPress={this.press} onChange={this.chageInput}></input><button onClick={this.addContent}>추가</button>
                </div>
                <ul>
                    {
                        todoList.map(
                            (todo, index) => {
                                if(todo.deleted == true){
                                    return null;
                                }
                                return <Todo key={index} index={index} text={todo.text} todo={todo} doneTodo={() => this.doneTodo(index) } deleted={this.deletedTodo} otherDone={this.doneTodo} />
                            }

                        )
                    }
                </ul>
                <Link to="/">홈으로</Link>
            </div>
        );
    }
}

export default TodoList;