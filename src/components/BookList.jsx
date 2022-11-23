import SingleBook from "./SingleBook";

const BookList = ({ arr }) => {
  return (
    <>
      <div className="d-flex flex-wrap justify-content-center">
        {arr.map((book) => {
          return <SingleBook book={book} />;
        })}
      </div>
    </>
  );
};

export default BookList;
