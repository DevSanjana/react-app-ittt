import React from "react";
import "./NewsLetter.css";

const NewsLetter = () => {
  return (
    <div>
      <section className="news-letter">
        <div className="news-letter-wrapper">
          <form className="news-letter-content" action="action_page.php">
            <h3 className="nl-title">
              Subscribe to ittoolstraining for Updates
            </h3>
            <p>
              Subscribe to our monthly News Letter for Updates on Courses,
              Internship opportunities and Heavy Discount Coupons.
            </p>
            <div className="nl-form">
              <input type="text" placeholder="Name" name="name" required />
              <input
                type="text"
                placeholder="Email address"
                name="mail"
                required
              />
              <div className="nl-btn">
                <input type="submit" value="Subscribe" />
              </div>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};

export default NewsLetter;
