import React, { useEffect, useState } from 'react'


export function Movie(props){
    return (
        <tr>
            <td>{props.item.Title}</td>
            <td>{props.item.Year}</td>
        </tr>
    );

}