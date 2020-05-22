import React, { useRef, useEffect } from 'react'

export function Search(props) {
    const inputMovie = useRef(null);

    useEffect(() => {
        inputMovie.current.focus();
    }, [props.changeFun]);

    return (
        <>
            <p></p>
            <input id="q" ref={inputMovie} onChange={props.changeFun} placeholder={props.placeholder}></input>
            <small id="hint"></small>
            <p></p>
            <button className="btn btn-success" disabled={props.disabled} onClick={props.clickFun}>SEARCH</button>
            <p></p>
        </>
    );
}
