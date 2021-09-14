import { Form } from "react-bootstrap";
import JobList from "./JobList";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import { useEffect, useState } from "react";

const Category = (props) => {
  const [jobs, setJobs] = useState([]);
  const [jobSelected, setJobSelected] = useState(null);

  const getJobs = async () => {
    try {
      let resp = await fetch(
        "https://strive-jobs-api.herokuapp.com/jobs?category=" +
          props.match.params.name
      );
      if (resp.ok) {
        let data = await resp.json();
        let jobsData = data.data;
        setJobs(jobsData);
        console.log(jobs);
      } else {
        console.log("error");
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(async () => {
    await getJobs();
    console.log(props.match.params.name);
  }, [props.match.params.name]);

  const changeJob = (job) => setJobSelected(job);

  return (
    <div className="home-cont">
      <div className="search-cont">
        <Form.Control
          type="text"
          placeholder="Search..."
          className="search-bar"
          onClick={() => props.history.push("/search")}
        ></Form.Control>
      </div>
      <JobList jobs={jobs} jobSelected={jobSelected} changeJob={changeJob} />
    </div>
  );
};

export default Category;
