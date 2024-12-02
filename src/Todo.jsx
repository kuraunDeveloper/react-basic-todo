import { useState } from "react";
import "./styles.css";


export const Todo = () => {
    const [todoText, setTodoText] = useState("");
    const [incompleteTodos, setIncompleteTodos] = useState(["TODO1", "TODO2"]);
    const [completeTodos, setCompleteTodos] = useState(["TODOでした1", "TODOでした2"]);
    
    const onChangeTodoText = (event) => {
        setTodoText(event.target.value);
    }

    const onClickAddButton = () => {
        if(!todoText) return;
        const newTodos = [...incompleteTodos, todoText]
        setIncompleteTodos(newTodos);
        setTodoText("");
    }

    const onClickDeleteButton = (index) => {
        const newTodos = [...incompleteTodos];
        newTodos.splice(index, 1);
        setIncompleteTodos(newTodos);
    }

    const onClickCompleteButton = (index) => {
        const newIncompleteTodos = [...incompleteTodos];
        const addCompleteTodo = newIncompleteTodos.splice(index, 1);
        const newCompleteTodos = [...completeTodos, addCompleteTodo];

        setIncompleteTodos(newIncompleteTodos);
        setCompleteTodos(newCompleteTodos);
    }

    const onClickBackButton = (index) => {
        const newCompleteTodos = [...completeTodos];
        const addIncompleteTodo = newCompleteTodos.splice(index, 1);
        const newIncompleteTodos = [...incompleteTodos, addIncompleteTodo];

        setIncompleteTodos(newIncompleteTodos);
        setCompleteTodos(newCompleteTodos);
    }

    return (
        <>
            <div className="input-area">
                <input type="text" placeholder="TODOを入力" value={todoText} onChange={onChangeTodoText} />
                <button onClick={onClickAddButton}>追加</button>
            </div>
            <div className="incomplete-area">
                <p className="title">未完了のTODO</p>
                <ul>
                    {incompleteTodos.map((todo, index) => 
                        (
                            <li key={todo}>
                                <div className="list-row">
                                    <p className="todo-item">{todo}</p>
                                    <button onClick={() => onClickCompleteButton(index)}>完了</button>
                                    <button onClick={() => onClickDeleteButton(index)}>削除</button>
                                </div>
                            </li>
                        )
                    )}
                </ul>
            </div>
            <div className="complete-area">
                <p className="title">完了のTODO</p>
                <ul>
                    {completeTodos.map((todo, index) => (
                        <li key={todo}>
                            <div className="list-row">
                                <p className="todo-item">{todo}</p>
                                <button onClick={() => onClickBackButton(index)}>戻す</button>
                            </div>
                        </li>
                    ))}
                </ul></div>
        </>
    );
};
