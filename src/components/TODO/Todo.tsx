import { atom, selector, useRecoilState } from "recoil";
import { TodoInput } from "./TodoInput";
import { TodoList } from "./TodoList";

export type TodoItem = {
    id: number;
    content: string;
};
export const todoListState = atom<TodoItem[]>({
    key: "todoListState",
    default: [{ id: 1, content: "hoge" }],
});

export const todoListSelector = selector<TodoItem[]>({
    key: "todoListSelector",
    get: ({ get }) => {
        const todoList = get(todoListState);
        return todoList;
    },
});

export const Todo = () => {
    const [todoList, setTodoList] = useRecoilState(todoListState);
    const addTodo = (content: string) => {
        const newId = todoList.length + 1;
        const newTodo: TodoItem = {
            id: newId,
            content,
        };
        setTodoList((prev) => [...prev, newTodo]);
    };
    const deleteTodo = (id: number) => {
        const newTodoList = todoList.filter((t) => t.id !== id);
        setTodoList(newTodoList);
    };
    return (
        <div className="flex space-x-3">
            <div>
                <TodoInput addTodo={addTodo} />
            </div>
            <TodoList todoList={todoList} deleteTodo={deleteTodo} />
        </div>
    );
};
