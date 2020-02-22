import React, { Component } from "react";
import Table from "react-bootstrap/Table";
import brainpickings from "./../images/newsletter-icons/brainpickings.jpg";
import hackernews from "./../images/newsletter-icons/hacker-news.png";
import fivebulletfriday from "./../images/newsletter-icons/five-bullet-friday.jpg";

class NewsletterComponent extends Component {
  render() {
    return (
      <Table id="newsletter-table" striped bordered hover variant="dark">
        <thead>
          {/* <tr>
            <th>(icon)</th>
            <th>(name / url)</th>
            <th>(description)</th>
            <th>(tags)</th>
          </tr> */}
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
            <td>
              <a href="https://www.brainpickings.org/newsletter/">
                Brainpickings
              </a>
            </td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>
              <img class="newsletter-icon" src={hackernews} alt="Hacker News" />
            </td>
            <td>
              <a href="https://hackernewsletter.com/">Hacker News</a>
            </td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>
              <img
                class="newsletter-icon"
                src={fivebulletfriday}
                alt="Five Bullet Friday"
              />
            </td>
            <td>
              <a href="https://go.tim.blog/5-bullet-friday-1/">
                Five-Bullet Friday
              </a>
            </td>
            <td></td>
            <td></td>
          </tr>
        </tbody>
      </Table>
    );
  }
}
export default NewsletterComponent;
