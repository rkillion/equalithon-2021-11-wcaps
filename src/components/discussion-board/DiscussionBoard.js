import { useEffect, useState } from "react"

export default function DiscussionBoard() {
    const [posts,setPosts] = useState([]);

    useEffect(() => {
        //fetch posts
    }, [])

    return (
        <div>
            Discussion Board {/* placeholder */}
            {/* posts area */}
        </div>
    )
}