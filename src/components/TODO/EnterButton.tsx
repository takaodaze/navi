type Props = {
    onClick: () => void;
};
export const EnterButton = (props: Props) => {
    return (
        <button
            className="rounded-r-md bg-orange-500 p-3 font-bold text-white"
            onClick={props.onClick}
        >
            Add TODO !
        </button>
    );
};
