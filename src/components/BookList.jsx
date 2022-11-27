import SingleBook from "./SingleBook";
import { Component } from "react";
import Form from "react-bootstrap/Form";

class BookList extends Component {
  state = {
    searchQuery: "",
  };

  render() {
    return (
      <>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Search</Form.Label>
            <Form.Control
              type="text"
              placeholder="Search here"
              value={this.state.searchQuery}
              onChange={(e) => this.setState({ searchQuery: e.target.value })}
            />
            <Form.Text className="text-muted">
              Here you can find anything you want
            </Form.Text>
          </Form.Group>
        </Form>
        <div className="d-flex flex-wrap justify-content-center">
          {this.props.arr
            .filter((n) =>
              n.title.toLowerCase().includes(this.state.searchQuery)
            )
            .map((book) => {
              return <SingleBook book={book} />;
            })}
        </div>
      </>
    );
  }
}

export default BookList;
