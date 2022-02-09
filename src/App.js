import logo from "./logo.svg";
import "./App.css";
import "./css/main.css";
import SideChatWindow from "./components/SideChatwindow";
import MainChatWindow from "./components/MainChatWindow";
function App() {
  return (
    <div>
      <SideChatWindow />
      <MainChatWindow />
    </div>
  );
}

export default App;
