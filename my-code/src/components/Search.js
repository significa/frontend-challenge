import React from "react";

export function Search(props) {
    return (
        <>
            <p></p>
            <input id="q" onChange={props.changeFun} placeholder={props.placeholder}></input>
            <small id="hint"></small>
            <p></p>
            <button className="btn btn-success" disabled={props.disabled} onClick={props.clickFun}>SEARCH</button>
            <p></p>
        </>
    );
}
