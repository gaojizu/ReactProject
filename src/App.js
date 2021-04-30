import Hello from "./components/jsx/Hello.jsx";
import Btn from "./components/jsx/Btn.jsx";
import Input from "./components/jsx/Input.jsx";
import CustomTextInput from "./components/jsx/CustomTextInput.jsx";
import Clock from "./components/jsx/Clock.jsx";
import Com1 from "./components/jsx/Component1.jsx";
import Lifecycle from "./components/jsx/lifecycle.jsx";
import Listview from "./components/jsx/axiosContentList.jsx";
import Father from "./components/jsx/father.jsx";
import UseRtable from "./components/jsx/useRtable.jsx";
import UsePage from "./components/jsx/useRpage.jsx";
import UseForm from "./components/jsx/useform.jsx";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Clock />
        {/*<Hello />*/}
        <UseForm />
        {/* <Listview />
        <UseRtable />
        <UsePage /> */}
        {/*<Btn />
        <Input />
        <CustomTextInput />
        <Com1 />
        <Lifecycle />
        <Father />*/}
      </header>
    </div>
  );
}

export default App;
