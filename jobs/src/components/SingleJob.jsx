import { Card } from "react-bootstrap";

const SingleJob = ({ job, changeJob, jobSelected }) => {
  return (
    <Card
      className={
        jobSelected?._id === job._id ? "card-main active" : "card-main"
      }
      onClick={() => changeJob(job)}
      style={{ cursor: "pointer" }}
    >
      <div className="cart-img-cont">
        <img
          className="job-image img-fluid"
          src="http://placehold.it/200x200"
          alt="job cover"
        />
      </div>
      <Card.Body className="d-flex">
        <div>
          <Card.Text className="font-weight-bold">{job.title}</Card.Text>
          <p>{job.company_name}</p>
        </div>
      </Card.Body>
    </Card>
  );
};

export default SingleJob;
