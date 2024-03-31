import React, { useCallback, useState } from 'react';
import Todos from './Todos';

function CallBackhooks() {

    const [todos, setTodos] = useState([]);
    const [count, setCount] = useState(0);

    function increment() {
        setCount(count + 1);
    }

    // const addTodo = () => {
    //     settodos((prev) => [...prev, `new Entry`])
    // }

    const addTodo = useCallback(() => {
        setTodos(prev => [...prev, `new Entry ${prev.length}`]);
    }, [todos]);


    return (
        <>
            <Todos todos={todos} addTodo={addTodo} />
            <hr />
            <div>
                Count: {count}
                <button onClick={increment}> + </button>
            </div>
        </>
    );
}

export default CallBackhooks;



