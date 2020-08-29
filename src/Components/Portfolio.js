import React, { Component } from "react";
import { PopupboxManager, PopupboxContainer } from "react-popupbox";
import "react-popupbox/dist/react-popupbox.css";

class Portfolio extends Component {
  render() {
    if (this.props.data) {
      function openPopupbox(key, image, title, category, url, description) {
        const content = (
          <div className="mfp-content">
            <div id="modal-01" className="popup-modal">
              <img className="mySlides1" src={image} alt="" />
              <div className="description-box">
                <h4>{title}</h4>
                <p>{description}</p>
                <span className="categories">
                  <i className="fa fa-tag"></i>
                  {category}
                </span>
              </div>
              <div className="link-box">
                <a rel="noopener noreferrer" target="_blank" href={url}>
                  Visit
                </a>
                {/*eslint-disable-next-line*/}
                <a
                  className="popup-modal-dismiss"
                  onClick={PopupboxManager.close}
                >
                  Close
                </a>
              </div>
            </div>
          </div>
        );
        PopupboxManager.open({ content });
      }

      var projects = this.props.data.projects.map(function (projects) {
        var projectImage = "images/portfolio/" + projects.image;
        return (
          <div key={projects.title} className="columns portfolio-item">
            <div className="item-wrap">
              <div title={projects.title}>
                <img alt={projects.title} src={projectImage} />
                <div className="overlay">
                  <div className="portfolio-item-meta">
                    <h5>{projects.title}</h5>
                    <p>{projects.category}</p>
                  </div>
                </div>
                <div className="link-icon">
                  <i
                    onClick={() =>
                      openPopupbox(
                        projects.yt,
                        projectImage,
                        projects.title,
                        projects.category,
                        projects.url,
                        projects.description
                      )
                    }
                    className="fa fa-search-plus"
                  ></i>
                </div>
              </div>
            </div>
          </div>
        );
      });
    }

    return (
      <section id="portfolio">
        <div className="row">
          <div className="twelve columns collapsed">
            <h1>Check Out Some of My Works.</h1>

            <div
              id="portfolio-wrapper"
              className="bgrid-thirds s-bgrid-thirds cf"
            >
              {projects}
            </div>
          </div>
        </div>
        <PopupboxContainer />
      </section>
    );
  }
}

export default Portfolio;
