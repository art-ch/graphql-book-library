import { useNavigate } from 'react-router-dom';

import {
  ThemeProvider,
  Grid,
  Card,
  Box,
  Typography,
  Rating,
  Button
} from '@mui/material';
import { Book } from '@mui/icons-material';

import { theme } from '../styled/BookCard';

export interface BookProps {
  book: {
    id: number;
    name: string;
    price: string;
    rating: string;
    reviews: string;
    author: {
      name: string;
    };
  };
}

const BookCard = ({ book }: BookProps) => {
  const navigate = useNavigate();

  const {
    id,
    name,
    price,
    rating,
    reviews,
    author: { name: author }
  } = book;

  return (
    <Grid item sm={6} md={4} lg={3}>
      <ThemeProvider theme={theme}>
        <Card variant="outlined">
          <Book sx={{ fontSize: 70 }} />
          <Box px={2}>
            <h3>{name}</h3>
            <p>{author}</p>
            <Typography variant="h6" component="p">
              {price}
            </Typography>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <Rating value={parseFloat(rating)} precision={0.2} readOnly />

              <Typography variant="body1">{rating}</Typography>
              <Typography variant="body2">({reviews} reviews)</Typography>
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
              <Button variant="contained" onClick={() => navigate(`/${id}`)}>
                Details
              </Button>
              <Button variant="contained">Leave Review</Button>
            </Box>
          </Box>
        </Card>
      </ThemeProvider>
    </Grid>
  );
};

export default BookCard;
