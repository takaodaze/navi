import { useState } from "react";
import { SearchButton } from "./SearchIcon";

export const SearchInput = () => {
    const [value, setValue] = useState("");

    return (
        <div className="w-96">
            <div className="flex items-center justify-between rounded-full bg-white px-5 py-3">
                <input
                    className="w-full outline-none"
                    type="text"
                    value={value}
                    onChange={(e) => {
                        const v = e.target.value;
                        setValue(v);
                    }}
                />
                <SearchButton />
            </div>
        </div>
    );
};
