import "./ComposeArea.css";


export default function ComposeArea() {
    return (
        <div id="compose-area" class="compose-area">
            <div class="pic">
    			<img src="" id="profile-img" class="pfp" alt="" />
            </div>
            <div class="text">
    			<textarea id="compose" class="textBox" placeholder="What's on your mind?" />
            </div>
            <div class="button">
    			<p><button id="submit" class="btn">Post Now</button></p>
                <p><button id="poll" class="btn">Start a Poll</button></p>
            </div>
        </div>
    )
}