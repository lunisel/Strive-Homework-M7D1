import SingleJob from "./SingleJob";
import { Row, Col } from "react-bootstrap";

const JobList = (props) => {
  return (
    <div className="job-list-cont">
      <Row>
        <Col xs={12} md={3}>
          <SingleJob />
        </Col>
      </Row>
    </div>
  );
};

export default JobList;
