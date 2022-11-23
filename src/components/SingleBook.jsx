import Card from "react-bootstrap/Card";
import books from "../components/books/fantasy.json";
const SingleBook = ({ id }) => (
  <>
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={books[id].img} />
      <Card.Body>
        <Card.Title>{books[id].title}</Card.Title>
      </Card.Body>
    </Card>
  </>
);

export default SingleBook;
