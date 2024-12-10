import React from 'react';
import { Card, CardContent, Typography, Button, Box, Rating, Chip } from '@mui/material';
import { Work, LocationOn, AttachMoney } from '@mui/icons-material';

const JobCard = ({ job }) => (
  <Card sx={{ boxShadow: 3, borderRadius: 2, height: '100%', '&:hover': { transform: 'scale(1.05)' } }}>
    <CardContent>
      <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 1 }}>
        {job.title}
      </Typography>
      <Typography variant="body2" color="textSecondary" sx={{ mb: 1 }}>
        {job.company}
      </Typography>

      <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
        <LocationOn fontSize="small" />
        <Typography variant="body2" color="textSecondary">{job.location}</Typography>
      </Box>

      <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
        <AttachMoney fontSize="small" />
        <Typography variant="body2" color="textSecondary">{job.salary}</Typography>
      </Box>

      <Typography variant="body1" sx={{ mb: 2 }}>
        {job.description}
      </Typography>

      <Box sx={{ mb: 2 }}>
        {job.tags.map((tag) => (
          <Chip key={tag} label={tag} sx={{ marginRight: 1, marginBottom: 1 }} />
        ))}
      </Box>

      <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
        <Rating value={job.rating} precision={0.5} readOnly sx={{ mr: 1 }} />
        <Typography variant="body2" color="textSecondary">{job.rating} / 5</Typography>
      </Box>

      <Button variant="contained" color="primary" size="small" fullWidth>
        Apply Now
      </Button>
    </CardContent>
  </Card>
);

export default JobCard;
