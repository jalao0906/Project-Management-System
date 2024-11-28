import React from 'react';
import { Typography, Container, Grid, Card, CardContent, Button } from '@mui/material';
import { Box } from '@mui/system';

const About = () => {
  return (
    <Box sx={{ backgroundColor: '#f5f5f5', py: 6 }}>
      <Container maxWidth="lg">
        {/* Header Section */}
        <Box sx={{ textAlign: 'center', mb: 6 }}>
          <Typography variant="h3" sx={{ color: '#3374ff', fontWeight: 'bold', mb: 2 }}>
            About the Employee Project Management Application
          </Typography>
          <Typography variant="body1" sx={{ color: '#555', fontSize: '1.2rem', lineHeight: 1.8 }}>
            A powerful platform designed to simplify project management, streamline task assignments, and improve team collaboration. 
            Manage your projects with ease and focus on what matters most—getting results.
          </Typography>
        </Box>

        {/* Features Section */}
        <Typography
          variant="h4"
          sx={{ color: '#3374ff', fontWeight: 'bold', textAlign: 'center', mb: 4 }}
        >
          Key Features
        </Typography>
        <Grid container spacing={4}>
          {/* Feature 1 */}
          <Grid item xs={12} sm={6} md={4}>
            <Card elevation={3}>
              <CardContent>
                <Typography variant="h6" sx={{ color: '#1E88E5', fontWeight: 'bold' }}>
                  Centralized Records
                </Typography>
                <Typography variant="body2" sx={{ color: '#555', mt: 1 }}>
                  Store all project details in one place, including start and end dates, comments, and team assignments.
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          {/* Feature 2 */}
          <Grid item xs={12} sm={6} md={4}>
            <Card elevation={3}>
              <CardContent>
                <Typography variant="h6" sx={{ color: '#1E88E5', fontWeight: 'bold' }}>
                  Task Assignment
                </Typography>
                <Typography variant="body2" sx={{ color: '#555', mt: 1 }}>
                  Assign roles to employees and managers efficiently, ensuring accountability and clarity.
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          {/* Feature 3 */}
          <Grid item xs={12} sm={6} md={4}>
            <Card elevation={3}>
              <CardContent>
                <Typography variant="h6" sx={{ color: '#1E88E5', fontWeight: 'bold' }}>
                  Status Tracking
                </Typography>
                <Typography variant="body2" sx={{ color: '#555', mt: 1 }}>
                  Monitor project progress with statuses like "Open," "In Progress," and "Completed" for timely intervention.
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          {/* Feature 4 */}
          <Grid item xs={12} sm={6} md={4}>
            <Card elevation={3}>
              <CardContent>
                <Typography variant="h6" sx={{ color: '#1E88E5', fontWeight: 'bold' }}>
                  User-Friendly Interface
                </Typography>
                <Typography variant="body2" sx={{ color: '#555', mt: 1 }}>
                  An intuitive design makes it easy for users to create, edit, and manage projects without training.
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          {/* Feature 5 */}
          <Grid item xs={12} sm={6} md={4}>
            <Card elevation={3}>
              <CardContent>
                <Typography variant="h6" sx={{ color: '#1E88E5', fontWeight: 'bold' }}>
                  Improved Organization
                </Typography>
                <Typography variant="body2" sx={{ color: '#555', mt: 1 }}>
                  Keep your team and data organized with clear project details and streamlined collaboration tools.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>

        {/* Call-to-Action Section */}
        <Box sx={{ textAlign: 'center', mt: 6 }}>
          <Typography variant="h5" sx={{ color: '#1E88E5', mb: 2 }}>
            Ready to Take Your Project Management to the Next Level?
          </Typography>
          <Button
            variant="contained"
            sx={{
              backgroundColor: '#1E88E5',
              color: '#fff',
              padding: '10px 20px',
              fontSize: '1rem',
              '&:hover': { backgroundColor: '#1565C0' },
            }}
          >
            Get Started Now
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default About;
