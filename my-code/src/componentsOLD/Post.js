import React from 'react'

export const Post = ({item}) =>(
    <ul>
        <li>{item.id} - {item.title}</li>
    </ul>
);