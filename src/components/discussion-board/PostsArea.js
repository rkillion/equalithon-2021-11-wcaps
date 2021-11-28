import { useEffect, useState } from "react"
import FilterControls from "./FilterControls";
import Post from "./Post";

export default function PostsArea() {
    const [posts,setPosts] = useState([]);

    useEffect(() => {
        //fetch posts
        const dateThree = new Date();
        const dateTwo = new Date(dateThree-60000);
        const dateOne = new Date(dateThree-600000);
        const samplePosts = [
            {
                id: 1,
                user: {
                    id: 2,
                    username: "sampleUser"
                },
                title: "First Post",
                text: "This is an example of a post!",
                comments: [],
                created_at: dateOne,
                updated_at: dateOne
            },
            {
                id: 2,
                user: {
                    id: 3,
                    username: "anotherUser"
                },
                title: "Second Post",
                text: "Vision! Empowerment! Perserverance! Unity!",
                comments: [],
                created_at: dateTwo,
                updated_at: dateTwo
            },
            {
                id: 3,
                user: {
                    id: 2,
                    username: "sampleUser"
                },
                title: "Hello everyone",
                text: "I'm new to the forum and happy to be here!",
                comments: [
                    {
                        id: 4,
                        user: {
                            id: 2,
                            username: "sampleUser"
                        },
                        title: null,
                        text: "Welcome! Great to have you with us.",
                        created_at: dateThree,
                        updated_at: dateThree
                    }
                ],
                created_at: dateThree,
                updated_at: dateThree
            }
        ];
        setPosts(samplePosts.sort((a,b)=>b.created_at-a.created_at));
    }, [])

    console.log(posts);

    return (
        <div id="posts-area">
            <div id="posts-header">
                <h2>Posts</h2>
                <FilterControls />  
            </div>
            {posts.length===0 ? null : posts.map(post=>{
                return <Post key={post.id} post={post}/>
            })}
        </div>
    )
}