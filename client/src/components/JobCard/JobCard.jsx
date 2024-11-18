import React from 'react';

const JobCard = ({ job }) => {
  return (
    <div style={{ border: '1px solid #ccc', margin: '10px', padding: '10px' }}>
      <h3>{job.title}</h3>
      <p>{job.description}</p>
      <p><strong>Location:</strong> {job.location}</p>
      <button>Apply</button>
    </div>
  );
};

export default JobCard;
