import React from 'react';
import Todo from '../components/Todo';
import {Link} from 'react-router-dom';

class TodoList extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            todoList : [
                {
                    text : "zz",
                    done : false,
                    deleted : false
                }
            ],
            addContent : ""
        }
    }
    
    chageInput = (e) => {
        const aa = e.target.value;
        this.setState({
            addContent : aa
        });
    }

    addContent = () =>{
        const { todoList, addContent } = this.state
        const todoOb = {
            text: addContent,
            done: false,
            deleted : false
        };
        todoList.push(todoOb);

        this.setState({
            todoList,
            addContent: ""
        })

    }
    press = (e) => {
        if(e.key == 'Enter'){
            this.addContent();
        }
    }

    doneTodo = (index) =>{
        console.log(index);
    }



    render (){
        const {todoList, addContent} = this.state;
        console.log("todo List");
        // 이게왜 두번나와????
        return (
            <div>
                <h1>안녕 투두리스트</h1>
                
                <div>
                    <input value={addContent} onKeyPress={this.press} onChange={this.chageInput}></input><button onClick={this.addContent}>추가</button>
                </div>
                <ul>
                    {
                        todoList.map(
                            (todo, index) => {
                                return <Todo key={index} index={index} text={todo.text} doneTodo={() =>this.doneTodo(index)}/>
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