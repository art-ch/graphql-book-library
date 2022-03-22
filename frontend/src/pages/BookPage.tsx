import { useParams } from 'react-router-dom';
import { useQuery } from 'react-query';
import { useNavigate } from 'react-router-dom';
import {
  CircularProgress,
  Container,
  Grid,
  Box,
  Button,
  Typography,
  Rating
} from '@mui/material';
import { Book } from '@mui/icons-material';

import { CustomizedAccordion } from '../components';

import { GET_SINGLE_BOOK } from '../graphql/queries';
import { fetchData } from '../api';

const BookPage = () => {
  const { id } = useParams() as {
    id: string;
  };
  const navigate = useNavigate();

  const { isLoading, data } = useQuery(`book${id}`, () =>
    fetchData(GET_SINGLE_BOOK(id))
  );

  if (!isLoading) {
    const { name, price, rating, reviews } = data.book;
    return (
      <main>
        <Container sx={{ display: 'flex', width: 900 }}>
          <Book sx={{ fontSize: 300 }} />
          <Container>
            <Box>
              <h1>{name}</h1>
              <Box
                sx={{ display: 'flex', gap: '8.1rem', alignItems: 'center' }}
              >
                <h2 style={{ fontWeight: '500' }}>{price}</h2>
                <Button variant="contained" sx={{ width: '131px' }}>
                  Buy
                </Button>
              </Box>
            </Box>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: '3rem'
              }}
            >
              <Box>
                <Box
                  sx={{ display: 'flex', gap: '10px', alignItems: 'center' }}
                >
                  <Rating value={parseFloat(rating)} precision={0.2} readOnly />
                  <h3>{rating}</h3>
                </Box>
                <Typography variant="h6" component="h3" sx={{ marginTop: '0' }}>
                  ({reviews} reviews)
                </Typography>
              </Box>
              <Box>
                <Button variant="contained">Leave Review</Button>
              </Box>
            </Box>
          </Container>
        </Container>
        <Container sx={{ width: 800 }}>
          <Grid container spacing={3}>
            <Grid item sx={{ lineHeight: 1.5, textTransform: 'justify' }}>
              <Typography variant="h4" component="h2" mb={1}>
                Synopsis
              </Typography>
              <Typography variant="body1" component="p">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa ab
                soluta quas labore veniam sed rem aperiam nulla earum eos! Quae
                facilis ipsum unde dolorem vel quisquam officia modi quaerat
                dolorum ea recusandae debitis architecto nemo alias nobis rem
                tenetur corrupti fuga quibusdam reiciendis earum aspernatur,
                dolor cupiditate quos? Modi atque natus aperiam ut doloremque,
                voluptatem eos nulla ipsam explicabo suscipit quos aliquid dicta
                exercitationem non beatae error consectetur iusto at eligendi
                tenetur repellat quia. Cumque sed earum, dicta placeat quod
                consequuntur praesentium aliquid libero eius laudantium saepe
                architecto voluptas repellat rerum corrupti accusamus!
                Laudantium blanditiis repudiandae aperiam eligendi odio.
              </Typography>
            </Grid>
            <Grid item>
              <CustomizedAccordion />
            </Grid>
          </Grid>
          <Button
            variant="contained"
            onClick={() => navigate(`/`)}
            sx={{ my: 5, width: '100%' }}
          >
            Go Back
          </Button>
        </Container>
      </main>
    );
  }

  return <CircularProgress sx={{ transform: 'translate (50%, 50%)' }} />;
};

export default BookPage;
