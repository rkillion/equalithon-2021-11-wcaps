import ComposeArea from "./discussion-board/ComposeArea";
import HighlightsArea from "./discussion-board/HighlightsArea";
import PostsArea from "./discussion-board/PostsArea";
import CommunityPageHeader from "./headers/CommunityPageHeader";
import Navbar from "./navigation/Navbar";
import { useEffect, useState } from "react";
import { starterPosts } from "./discussion-board/starterPosts";

export default function AuthenticatedApp({ user }) {
    const [posts,setPosts] = useState([]);

    useEffect(() => {
        //fetch posts
        setPosts(starterPosts().sort((a,b)=>b.created_at-a.created_at));
    }, [])

    function addPost(postObject) {
        const postToAdd = {...postObject};
        debugger;
        postToAdd.id = posts[0].id+1;
        setPosts([...posts,postToAdd].sort((a,b)=>b.created_at-a.created_at))
    }

    function editPost(newPost) {
        const replacementPost = {...newPost};
        const filteredPostList = [...posts].filter(post=>post.id!==newPost.id);
        const newPostList = [...filteredPostList,replacementPost];
        setPosts(newPostList.sort((a,b)=>b.created_at-a.created_at));
    }

    return (
        <div id="authenticated-app-page" className="whole-page">
            <Navbar />
            {/* <CommunityPageHeader /> */}
            <div id="discussion-board-and-highlights">
                <div id="discussion-board">
                    <ComposeArea user={user} addPost={addPost}/>
                    <PostsArea posts={posts} user={user} editPost={editPost}/>
                </div>
                <HighlightsArea />
            </div>
        </div>
    )
}