import { useState } from "react";
import "./styles.css";
import { InputTodo } from "./components/inputTodo";
import { IncompleteTodos } from "./components/incompleteTodos";
import { CompleteTodos } from "./components/completeTodo";


export const Todo = () => {
    const [todoText, setTodoText] = useState("");
    const [incompleteTodos, setIncompleteTodos] = useState([]);
    const [completeTodos, setCompleteTodos] = useState([]);
    
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
    };

    const onClickBackButton = (index) => {
        const newCompleteTodos = [...completeTodos];
        const addIncompleteTodo = newCompleteTodos.splice(index, 1);
        const newIncompleteTodos = [...incompleteTodos, addIncompleteTodo];

        setIncompleteTodos(newIncompleteTodos);
        setCompleteTodos(newCompleteTodos);
    };

    const isMaxLimitIncompleteTodos = incompleteTodos.length >= 5

    return (
        <>
            <InputTodo onChange={onChangeTodoText} onClick={onClickAddButton} todoText={todoText} disabled={isMaxLimitIncompleteTodos} />
            {isMaxLimitIncompleteTodos && (<p style={{color: "red"}}>みやんご:(</p>)}
            
            <IncompleteTodos todos={incompleteTodos} onClickComplete={onClickCompleteButton} onClickDelete={onClickDeleteButton} />
            <CompleteTodos todos={completeTodos} onClickBack={onClickBackButton} />
        </>
    );
};
