import Navbar from "../navigation/Navbar";


export default function Login() {
    return (
        <div className="login-page">
            {/* to preview the unauthenticated app and the login page, change the id from 1 to null in the setUser in useEffect on the App.js file. This will simulate not having a logged in user. */}
            <Navbar />
            <div className="login-container">
            <h1> Sign In </h1>

              <form>
                  <label htmlFor="email"><b>Email Address</b></label>
                  <input type="text" name="email" required />

                  <label htmlFor="psw"><b>Password</b></label>
                  <input type="password" name="psw" required />
                  <input type="submit" />
              </form>

              <p> I don't have an account </p> 
            </div>
        </div>
    )
}
