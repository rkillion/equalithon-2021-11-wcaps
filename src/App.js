import { useEffect, useState } from "react";
import AuthenticatedApp from "./components/AuthenticatedApp";
import UnauthenticatedApp from "./components/unauthenticated/UnauthenticatedApp";

function App() {
  const [user,setUser] = useState({})
  //fetch user data, set or redirect to unauthenticated
  useEffect(()=>{
    setUser({id: 1,username: "CurrentUser"}) //placeholder
  }, [])

  return (
    <div className="App">
      {user.id ? <AuthenticatedApp user={user}/> : <UnauthenticatedApp />}
    </div>
  );
}

export default App;
