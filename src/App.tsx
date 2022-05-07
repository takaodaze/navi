import { ChatInput } from "./components/ChatInput";
import { Todo } from "./components/TODO/Todo";

export const App = () => {
    return (
        <div className="p-2">
            <ChatInput />
            <Todo />
        </div>
    );
};
