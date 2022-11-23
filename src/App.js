import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import WarningSign from "./components/WarningSign";
import MyBadge from "./components/MyBadge";
import BookList from "./components/BookList";
// import SingleBook from "./components/SingleBook";

function App() {
  return (
    <div className="App">
      <WarningSign />
      <MyBadge text="test" color="success" />
      <BookList arr={[85, 66, 2, 149]} />
    </div>
  );
}

export default App;
