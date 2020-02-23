import React, { Component } from "react";
import Table from "react-bootstrap/Table";
import brainpickings from "./../images/newsletter-icons/brainpickings.jpg";
import hackernews from "./../images/newsletter-icons/hacker-news.png";
import fivebulletfriday from "./../images/newsletter-icons/five-bullet-friday.jpg";
import thebrowser from "./../images/newsletter-icons/the-browser.jpg";

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
              <a
                href="https://www.brainpickings.org/newsletter/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Brainpickings
              </a>
              <span class="description">
                A free Sunday digest of the week’s most interesting and
                inspiring articles across art, science, philosophy, creativity,
                children’s books, and other strands of our search for truth,
                beauty, and meaning.
              </span>
            </td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>
              <img class="newsletter-icon" src={hackernews} alt="Hacker News" />
            </td>
            <td>
              <a
                href="https://hackernewsletter.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Hacker News
              </a>
              <span class="description">
                Since 2010, we've put out a weekly newsletter of the best
                articles on startups, technology, programming, and more. All
                links are curated by hand from Hacker News. Join 60,000+ other
                subscribers and don't miss another week.
              </span>
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
              <a
                href="https://go.tim.blog/5-bullet-friday-1/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Five-Bullet Friday
              </a>
              <span class="description">
                Every Friday, I send out an exclusive email with the five
                coolest things I’ve found (or explored) that week. It could
                include exclusive giveaways or chances to interact with me,
                books, gadgets, albums, articles, new hacks/tricks, and — of
                course — all sorts of weird stuff I dig up around the world.
              </span>
            </td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>
              <img class="newsletter-icon" src={thebrowser} alt="The Browser" />
            </td>
            <td>
              <a
                href="https://thebrowser.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                The Browser
              </a>
              Every day we read hundreds of articles and select the best five
              for you to enjoy so you’ll always have something to read on the
              train and interesting things to say at dinner.
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
