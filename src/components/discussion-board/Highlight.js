import Post from "./Post";

export default function Highlight({ highlight, user, editPost }) {
    return (
        <div className="highlight">
            <Post 
                post={highlight}
                user={user}
                editPost={editPost}
            />
        </div>
    )
}