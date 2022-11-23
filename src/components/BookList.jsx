import SingleBook from "./SingleBook";

const BookList = ({ arr }) => {
  return (
    <>
      <div className="d-flex flex-wrap justify-content-center">
        {arr.map((title) => {
          return <SingleBook id={title} />;
        })}
      </div>
    </>
  );
};

export default BookList;
