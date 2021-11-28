import { useEffect, useState } from "react"
import FilterControls from "./FilterControls";
import Post from "./Post";
import { starterPosts } from "./starterPosts";

export default function PostsArea({ posts, user, editPost }) {

    return (
        <div id="posts-area">
            <div id="posts-header">
                <h2>Posts</h2>
                <FilterControls />  
            </div>
            {posts.length===0 ? null : posts.map(post=>{
                return <Post key={post.id} post={post} user={user} editPost={editPost}/>
            })}
        </div>
    )
}