import { AiOutlineSearch } from "react-icons/ai";

type Props = {
    onClick?: () => void;
};
export const SearchButton = (props: Props) => {
    return (
        <div onClick={props.onClick}>
            <AiOutlineSearch size={25} />
        </div>
    );
};
