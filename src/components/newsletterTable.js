import React, { Component } from "react";
import Table from "react-bootstrap/Table";
import brainpickings from "./../images/newsletter-icons/brainpickings.jpg";
import hackernews from "./../images/newsletter-icons/hacker-news.png";

class NewsletterComponent extends Component {
  render() {
    return (
      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>(icon)</th>
            <th>(name / url)</th>
            <th>(description)</th>
            <th>(tags)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <img
                class="newsletter-icon"
                src={brainpickings}
                alt="Brainpickings"
              />
            </td>
            <td>Brainpickings</td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>
              {" "}
              <img
                class="newsletter-icon"
                src={hackernews}
                alt="Hacker News"
              />
            </td>
            <td>Hacker News</td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
        </tbody>
      </Table>
    );
  }
}
export default NewsletterComponent;
