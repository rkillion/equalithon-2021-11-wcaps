import Events from "./Events";
import PinnedPost from "./PinnedPost";
import Trending from "./Trending";
import Polls from "./Polls";
import Highlight from "./Highlight";

export default function HighlightsArea({ highlights, user, editPost }) {	
  return (
    <div id="highlights-area">
    	<h2 id="highlights-header">Highlights</h2>
		{highlights.length===0 ? null : highlights.map(highlight=><Highlight 
			key={`highlight${highlight.id}`}
			highlight={highlight}
			user={user}
			editPost={editPost}
		/>)}
		{/* <div id="highlights-list">

				<div class="card">
					<Events />
				</div>
				<div class="card">
					<PinnedPost />
				</div>
				<div class="card">
					<Trending />
				</div>
				<div class="card">
					<Polls />
				</div>

			</div> */}
    </div>
  )
}