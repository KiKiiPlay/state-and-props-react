import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import WarningSign from "./components/WarningSign";
import MyBadge from "./components/MyBadge";
import BookList from "./components/BookList";
import books from "./components/books/history.json";
// import SingleBook from "./components/SingleBook";

function App() {
  return (
    <div className="App">
      <WarningSign />
      <MyBadge text="test" color="success" />
      <BookList arr={books} />
    </div>
  );
}

export default App;
