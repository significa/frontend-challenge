import React from "react";

export function Search(props) {
    const base = (
        <>
            <input id="q" onChange={props.changeFun} placeholder={props.placeholder}></input>
            <small id="hint"></small>
            <button disabled={props.disabled} onClick={props.clickFun}>SEARCH</button>
        </>
    );
    return base;
}
