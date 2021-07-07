import "./App.css";
import WelcomeDialog from "./functionalcomponents/compositionvsinheritance/WelcomeDialog";
import Filter from "./functionalcomponents/skipandfetchpagination/Filter";
function App() {
  return (
    <div className="App">
      <header className="App-header"></header>
      <div>
        Hello chris
        <WelcomeDialog />
        <Filter />
      </div>
    </div>
  );
}

export default App;
