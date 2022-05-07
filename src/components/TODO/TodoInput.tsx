import { useState } from "react";
import { EnterButton } from "./EnterButton";

type Props = {
    addTodo: (content: string) => void;
};
export const TodoInput = (props: Props) => {
    const [value, setValue] = useState("");

    const handleEnter = () => {
        if (value.length === 0) {
            return;
        }
        props.addTodo(value);
        setValue("");
    };

    return (
        <div className="flex">
            <input
                type="text"
                value={value}
                onChange={(e) => {
                    const v = e.currentTarget.value;
                    setValue(v);
                }}
                className="rounded-l-sm p-2 outline-none"
                onKeyDown={(e) => {
                    if (e.key === "Enter") handleEnter();
                }}
            />
            <EnterButton onClick={handleEnter} />
        </div>
    );
};
