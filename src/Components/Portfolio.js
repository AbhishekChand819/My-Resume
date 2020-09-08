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

      var designs = this.props.data.designs.map(function (designs) {
        var designsImage = "images/portfolio/" + designs.image;
        return (
          <div key={designs.title} className="columns portfolio-item">
            <div className="item-wrap">
              <div title={designs.title}>
                <img alt={designs.title} src={designsImage} />
                <div className="overlay">
                  <div className="portfolio-item-meta">
                    <h5>{designs.title}</h5>
                    <p>{designs.category}</p>
                  </div>
                </div>
                <div className="link-icon">
                  <i
                    onClick={() =>
                      openPopupbox(
                        designs.yt,
                        designsImage,
                        designs.title,
                        designs.category,
                        designs.url,
                        designs.description
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
            <h1>Web Developement Projects</h1>

            <div
              id="portfolio-wrapper"
              className="bgrid-thirds s-bgrid-thirds cf"
            >
              {projects}
            </div>
          </div>
          <div className="twelve columns collapsed">
            <h1>UI/UX Designs</h1>

            <div
              id="portfolio-wrapper"
              className="bgrid-thirds s-bgrid-thirds cf"
            >
              {designs}
            </div>
          </div>
        </div>
        <PopupboxContainer />
      </section>
    );
  }
}

export default Portfolio;
