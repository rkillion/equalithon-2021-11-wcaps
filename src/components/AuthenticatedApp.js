import DiscussionBoard from "./discussion-board/DiscussionBoard";

export default function AuthenticatedApp({ user }) {
    return (
        <div>
            Main Page for {user.username} {/* placeholder */}
            <DiscussionBoard />
        </div>
    )
}