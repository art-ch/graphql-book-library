import { BookCard } from './components';
import { Container, Grid, Typography } from '@mui/material';

const App = () => {
  return (
    <div>
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
          <BookCard />
          <BookCard />
          <BookCard />
          <BookCard />
          <BookCard />
          <BookCard />
          <BookCard />
          <BookCard />
        </Grid>
      </Container>
    </div>
  );
};

export default App;
