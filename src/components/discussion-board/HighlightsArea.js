import Events from "./Events";
import PinnedPost from "./PinnedPost";
import Trending from "./Trending";
import Polls from "./Polls";

export default function HighlightsArea() {
  return (
    <div id="highlights-area">
    	<h2 id="highlights-header">Highlights</h2>
		<div id="highlights-list">

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

			</div>
    </div>
  )
}