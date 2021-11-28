import { useState } from "react/cjs/react.development"

export default function CommentEditor({ post, user, editPost, toggleCommentEditor }) {
    const [commentConfig,setCommentConfig] = useState({
        user: {...user},
        text: "",
    })

    function handleChange(e) {
        const newConfig = {...commentConfig};
        newConfig[e.target.name] = e.target.value;
        setCommentConfig(newConfig);
    }

    function handleSubmit(e) {
        e.preventDefault();
        const newPost = {...post};
        const newComment = {...commentConfig};
        let now = new Date();
        newComment.created_at = now;
        newComment.updated_at = now;
        newComment.id = newPost.comments.length===0 ? 1 : newPost.comments.sort((a,b)=>b.created_at-a.created_at)[0].id+1;
        newPost.comments.push(newComment);
        editPost(newPost);
        toggleCommentEditor();
    }

    return (
        <form className="comment-editor" onSubmit={handleSubmit}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-person-circle" viewBox="0 0 16 16">
                <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
                <path fillRule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"/>
            </svg>
            <input 
                type="text" 
                name="text" 
                onChange={handleChange}
                value={commentConfig.text}
                placeholder="Comment..."
            />
        </form>
    )
}