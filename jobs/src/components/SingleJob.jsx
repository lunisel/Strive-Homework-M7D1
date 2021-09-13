import { Card } from "react-bootstrap";

const SingleJob = ({ book, changeBook, bookSelected }) => (
    <Card
      /* className={bookSelected?.id === book.id ? "border-thick mt-3" : "mt-3"} */
      
      /* onClick={() => changeBook(book)} */
      style={{ cursor: "pointer" }}
    >
      <Card.Body className="d-flex">
        <img className="book-image" src="http://placehold.it/200x200" alt="book cover" />
        <div>
          <Card.Text className="font-weight-bold">JOB TITLE</Card.Text>
          <p>Description</p>
        </div>
      </Card.Body>
    </Card>
  );
  
  export default SingleJob;