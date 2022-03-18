import { Grid, Card, Box, Typography, Rating, Button } from '@mui/material';
import { Book } from '@mui/icons-material';

const BookCard = () => {
  return (
    <Grid item sm={6} md={4} lg={3}>
      <Card variant="outlined">
        <Book sx={{ fontSize: 70 }} />
        <Box px={2}>
          <h3>Harry Potter and The Sorcerer's Stone</h3>
          <p>J. K. Rowling</p>
          <Typography variant="h6" component="p">
            $49.99
          </Typography>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Rating value={3.5} precision={0.5} readOnly />
            <Typography variant="body2" mx={1}>
              3.5
            </Typography>
            <Typography sx={{ fontSize: 10 }}>(69 reviews)</Typography>
          </Box>
          <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <Button variant="contained" sx={{ my: 2 }}>
              Details
            </Button>
            <Button variant="contained" sx={{ my: 2 }}>
              Leave Review
            </Button>
          </Box>
        </Box>
      </Card>
    </Grid>
  );
};

export default BookCard;
