import { useState } from "react"

export default function ComposeArea({ user, addPost }) {
    const [postConfig,setPostConfig] = useState({
        user: {...user},
        title: "",
        text: "",
        comments: []
    })

    function handleChange(e) {
        const newConfig = {...postConfig};
        newConfig[e.target.name] = e.target.value;
        setPostConfig(newConfig);
    }
    
    function handleSubmit(e) {
        e.preventDefault();
        let now = new Date();
        const newPost = {...postConfig}
        newPost.created_at = now;
        newPost.updated_at = now;
        console.log(newPost);
        addPost(newPost);
        setPostConfig({
            user: {...user},
            title: "",
            text: "",
            comments: []
        })
    }

    return (
        <div id="compose-area">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-person-circle" viewBox="0 0 16 16">
                <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
                <path fillRule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"/>
            </svg>
            <form id="compose-form" onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    id="compose-title" 
                    name="title" 
                    onChange = {handleChange}
                    value = {postConfig.title}
                    placeholder="Post Title"/>
    			<textarea 
                    id="compose-text" 
                    className="textBox" 
                    onChange = {handleChange}
                    value = {postConfig.text}
                    name="text"
                    placeholder="What's on your mind?" />
                <button
                    type="submit"
                >
                    Post
                </button>
            </form>
            {/* <div class="button">
    			<p><button id="submit" class="btn">Post Now</button></p>
                <p><button id="poll" class="btn">Start a Poll</button></p>
            </div> */}
        </div>
    )
}