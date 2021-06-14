import React from "react";
//import JobOffer from "./components/JobOffer";

const JobList = ({ filteredOffers, handleAddTag }) => {
  return (
    <div>
      {filteredOffers.map((job, i) => {
        return (
          <div className="job-offer" key={i} style={job.featured ? { borderLeft: "hsl(180, 29%, 50%) solid 5px" } : {}}>
            <div className="job-offer__wrapper">
              <img src={job.logo} alt="" />
              <div className="job-offer-spec">
                <div className="job-offer__title">
                  <h4>{job.company}</h4>
                  <div className="new" style={job.new ? { display: "block" } : { display: "none" }}>
                    NEW!
                  </div>
                  <div className="featured" style={job.featured ? { display: "block" } : { display: "none" }}>
                    FEATURED
                  </div>
                </div>
                <h3 className="job-offer-spec-position">{job.position}</h3>
                <div className="job-offer-spec-detail">
                  <div>{job.postedAt}</div>
                  <div>{job.contract}</div>
                  <div>{job.location}</div>
                </div>
              </div>
            </div>
            <div className="tags">
              <button onClick={handleAddTag}>{job.role}</button>
              <button onClick={handleAddTag}>{job.level}</button>
              {job.languages.map((lang, k) => (
                <button onClick={handleAddTag} key={k}>
                  {lang}
                </button>
              ))}
              {job.tools.map((tool, l) => (
                <button onClick={handleAddTag} key={l}>
                  {tool}
                </button>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default JobList;
