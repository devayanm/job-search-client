import React from 'react';
import { Card, CardContent, Typography, Button } from '@mui/material';

const JobCard = ({ job }) => (
  <Card sx={{ boxShadow: 3 }}>
    <CardContent>
      <Typography variant="h6">{job.title}</Typography>
      <Typography variant="body2" color="textSecondary" sx={{ mb: 2 }}>
        {job.company}
      </Typography>
      <Typography variant="body1" sx={{ mb: 1 }}>
        {job.description}
      </Typography>
      <Button variant="contained" color="primary" size="small">
        Apply Now
      </Button>
    </CardContent>
  </Card>
);

export default JobCard;
