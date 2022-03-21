import { useQuery } from 'react-query';
import { CircularProgress, Container, Grid, Typography } from '@mui/material';

import { BookCard } from '../components';

import { fetchData } from '../api';
import { BOOKS_QUERY } from '../graphql/queries';

const HomePage = () => {
  const { data } = useQuery('data', () => fetchData(BOOKS_QUERY));

  if (data) {
    return (
      <main>
        <Typography
          variant="h4"
          component="h1"
          sx={{
            textAlign: 'center',
            my: 2
          }}
        >
          GraphQL Book Store
        </Typography>
        <Container>
          <Grid container spacing={3}>
            {data.books.map((book: any) => {
              const { id } = book;
              return <BookCard key={id} book={book} />;
            })}
          </Grid>
        </Container>
      </main>
    );
  }

  return <CircularProgress sx={{ transform: 'translate (50%, 50%)' }} />;
};

export default HomePage;
