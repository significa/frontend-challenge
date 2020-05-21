import React from "react";

export function Search(props) {
    const base = (
        <>
            <input id="q"></input>
            <button onClick={props.click}>Search</button>
        </>
    );

    return base;

}
