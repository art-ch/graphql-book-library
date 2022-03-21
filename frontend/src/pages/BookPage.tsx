import { useParams } from 'react-router-dom';
import { useQuery } from 'react-query';
import {
  CircularProgress,
  Container,
  Box,
  Typography,
  Rating
} from '@mui/material';
import { Book } from '@mui/icons-material';

import { GET_SINGLE_BOOK } from '../graphql/queries';
import { fetchData } from '../api';
import { useEffect } from 'react';

const BookPage = () => {
  const { id } = useParams() as {
    id: string;
  };

  const { data } = useQuery('data', () => fetchData(GET_SINGLE_BOOK(id)));
  console.log(data);

  if (data) {
    const { name, price, rating, reviews } = data.book;
    return (
      <main>
        <Container sx={{ display: 'flex', width: 900 }}>
          <Book sx={{ fontSize: 300 }} />
          <Container>
            <h1>{name}</h1>
            <h2>{price}</h2>
            <Box sx={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
              <Rating value={parseFloat(rating)} precision={0.2} readOnly />

              <h3>{rating}</h3>
            </Box>
            <h2>({reviews} reviews)</h2>
          </Container>
        </Container>
        <Container
          sx={{ width: 800, lineHeight: 1.5, textTransform: 'justify' }}
        >
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa ab
            soluta quas labore veniam sed rem aperiam nulla earum eos! Quae
            facilis ipsum unde dolorem vel quisquam officia modi quaerat dolorum
            ea recusandae debitis architecto nemo alias nobis rem tenetur
            corrupti fuga quibusdam reiciendis earum aspernatur, dolor
            cupiditate quos? Modi atque natus aperiam ut doloremque, voluptatem
            eos nulla ipsam explicabo suscipit quos aliquid dicta exercitationem
            non beatae error consectetur iusto at eligendi tenetur repellat
            quia. Cumque sed earum, dicta placeat quod consequuntur praesentium
            aliquid libero eius laudantium saepe architecto voluptas repellat
            rerum corrupti accusamus! Laudantium blanditiis repudiandae aperiam
            eligendi odio.
          </p>
        </Container>
      </main>
    );
  }

  return <CircularProgress sx={{ transform: 'translate (50%, 50%)' }} />;
};

export default BookPage;
