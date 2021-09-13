import { Component } from "react";
import { Col, Row } from "react-bootstrap";

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
        console.log(this.state)
      } else {
        console.log("error");
      }
    } catch (err) {
      console.log(err);
    }
  };

  changeJob = (job) => this.setState({ jobSelected: job });

  render() {
    return <Row></Row>;
  }
}

export default Homepage;
