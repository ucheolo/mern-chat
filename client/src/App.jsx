import axios from "axios";
import { UserContextProvider } from "./UserContext";
import Routes from "./Routes";

function App() {
  axios.defaults.baseURL = 'http://localhost:4000';
  // Axios가 쿠키를 요청과 함께 전송
  axios.defaults.withCredentials = true;
  return (
    <UserContextProvider>
      <Routes/>
    </UserContextProvider>
  )
}

export default App
