import DiscussionBoard from "./discussion-board/DiscussionBoard";
import CommunityPageHeader from "./headers/CommunityPageHeader";
import Navbar from "./navigation/Navbar";

export default function AuthenticatedApp({ user }) {
    return (
        <div id="authenticated-app-page" className="whole-page">
            <Navbar />
            <CommunityPageHeader />
            Main Page for {user.username} {/* placeholder */}
            <DiscussionBoard />
        </div>
    )
}