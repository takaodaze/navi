import { useState } from "react";

type Props = {
    addTodo: (content: string) => void;
};
export const TodoInput = (props: Props) => {
    const [value, setValue] = useState("");

    return (
        <div className="flex space-x-2">
            <input
                type="text"
                value={value}
                onChange={(e) => {
                    const v = e.currentTarget.value;
                    setValue(v);
                }}
                className="rounded-sm p-2"
            />
            <button
                className="rounded-md bg-blue-500 p-3"
                onClick={() => {
                    props.addTodo(value);
                }}
            >
                enter!
            </button>
        </div>
    );
};
