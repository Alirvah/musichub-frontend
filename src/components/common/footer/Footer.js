import React from "react";

const Footer = (counter) => {
  const theYear = new Date();

  return (
    <div>
      <footer className="footer">
        <div className="columns">
          <div className="column">
            <strong> {theYear.getFullYear()} </strong>M
          </div>
          <div className="column">
            <div className="is-pulled-right">
              <span>
                <a
                  target="_blank"
                  href="https://google.com"
                  rel="noopener noreferrer"
                >
                  O nas
                </a>
              </span>
              <span>&nbsp;|&nbsp;</span>
              <span>
                <a
                  target="_blank"
                  href="https://google.com"
                  rel="noopener noreferrer"
                >
                  Kontakt
                </a>
              </span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
