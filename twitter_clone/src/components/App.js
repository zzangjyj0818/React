import { useState } from "react";
import AppRouter from "components/Router";
import {authService} from "fbase";

function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(authService.currentUsers);
  console.log(authService.currentUsers);
  return(
    <>
      <AppRouter isLoggedIn={isLoggedIn}/>
      <footer>&copy; {new Date().getFullYear()}Twitter</footer>
    </>
  );
}

export default App;