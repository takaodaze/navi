import { TodoItem } from "./Todo";

type Props = { todoList: TodoItem[]; deleteTodo: (id: number) => void };
export const TodoList = (props: Props) => {
    return (
        <div className="flex-col space-y-2 rounded-lg bg-white p-4">
            {props.todoList.map((todoItem) => (
                <div
                    key={todoItem.id}
                    className="flex items-center justify-between gap-4 rounded-md bg-gray-200 p-3"
                >
                    <div>{todoItem.content}</div>
                    <div
                        className="weight rounded-md bg-green-500 p-1 text-white"
                        onClick={() => {
                            props.deleteTodo(todoItem.id);
                        }}
                    >
                        Done!
                    </div>
                </div>
            ))}
        </div>
    );
};
