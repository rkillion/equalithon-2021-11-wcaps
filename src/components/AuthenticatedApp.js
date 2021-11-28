import ComposeArea from "./discussion-board/ComposeArea";
import HighlightsArea from "./discussion-board/HighlightsArea";
import PostsArea from "./discussion-board/PostsArea";
import CommunityPageHeader from "./headers/CommunityPageHeader";
import Navbar from "./navigation/Navbar";

export default function AuthenticatedApp({ user }) {
    return (
        <div id="authenticated-app-page" className="whole-page">
            <Navbar />
            {/* <CommunityPageHeader /> */}
            <div id="discussion-board-and-highlights">
                <div id="discussion-board">
                    <ComposeArea />
                    <PostsArea />
                </div>
                <HighlightsArea />
            </div>
        </div>
    )
}