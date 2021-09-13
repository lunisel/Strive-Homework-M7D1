import { Component } from "react";
import { Form } from "react-bootstrap";
import JobList from "./JobList";

class Homepage extends Component {
  state = {
    jobs: [],
    jobSelected: null,
  };

  componentDidMount = async () => {
    try {
      let resp = await fetch("https://remotive.io/api/remote-jobs");
      if (resp.ok) {
        let data = await resp.json();
        let jobs = await data.jobs;
        this.setState({ ...this.state, jobs: jobs });
        console.log(this.state);
      } else {
        console.log("error");
      }
    } catch (err) {
      console.log(err);
    }
  };

  changeJob = (job) => this.setState({ jobSelected: job });

  render() {
    return (
      <div className="home-cont">
        <div className="search-cont">
          <Form.Control
            type="text"
            placeholder="Search..."
            className="search-bar"
          ></Form.Control>
        </div>
        <JobList
          jobs={this.state.jobs}
          jobSelected={this.state.jobSelected}
          changeJob={this.changeJob}
        />
      </div>
    );
  }
}

export default Homepage;
