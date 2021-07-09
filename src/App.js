import "./App.css";
import WelcomeDialog from "./functionalcomponents/compositionvsinheritance/WelcomeDialog";
import Report from "./functionalcomponents/skipandfetchpagination/Report";
function App() {
  return (
    <div className="App">
      <header className="App-header"></header>
      <div>
        Hello chris
        <WelcomeDialog />
        <Report />
      </div>
    </div>
  );
}

export default App;
