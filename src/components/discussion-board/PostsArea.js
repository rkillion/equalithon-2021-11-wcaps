import { useEffect, useState } from "react"

export default function PostsArea() {
    const [posts,setPosts] = useState([]);

    useEffect(() => {
        //fetch posts
    }, [])

    return (
        <div>
            Posts Area {/* placeholder */}
            {/* posts area */}
        </div>
    )
}