import React from 'react'
import {Post} from "./Post";

export const Posts = ({ posts, loading }) => {

    let data = posts.map((i) => (
        <Post item={i} key={i.id} />
    ));

    let res = loading ? "Loading..." : data;

    return (
        <>
            {res}
        </>
    )
};

