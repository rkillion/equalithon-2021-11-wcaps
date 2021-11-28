import Login from "./Login";

export default function UnauthenticatedApp() {
    return (
        <div>
            {/* to preview the unauthenticated app and the login page, change the id from 1 to null in the setUser in useEffect on the App.js file. This will simulate not having a logged in user. */}
            <Login />
        </div>
    )
}
