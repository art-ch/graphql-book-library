import { useState } from 'react';
import { Grid, Container, Box, Avatar, Typography } from '@mui/material';
import { AccountBox, Article, Book } from '@mui/icons-material';

import {
  Accordion,
  AccordionSummary,
  AccordionDetails
} from '../styled/Accordion';

const CustomizedAccordion = () => {
  const [expanded, setExpanded] = useState<string | false>(false);

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
      setExpanded(newExpanded ? panel : false);
    };

  return (
    <div>
      <Accordion
        expanded={expanded === 'panel1'}
        onChange={handleChange('panel1')}
      >
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
          <Typography>Characters</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Grid container>
            {Array.from({ length: 5 }).map((_, id) => (
              <Grid item key={id}>
                <AccountBox sx={{ fontSize: 100 }} />
                <Typography sx={{ textAlign: 'center', cursor: 'pointer' }}>
                  Harry Potter
                </Typography>
              </Grid>
            ))}
          </Grid>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === 'panel2'}
        onChange={handleChange('panel2')}
      >
        <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
          <Typography>Reviews</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Grid container>
            {Array.from({ length: 3 }).map((_, id) => (
              <Grid item key={id}>
                <Container sx={{ mb: 3 }}>
                  <Box
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '1rem',
                      mb: 2
                    }}
                  >
                    <Avatar />
                    <Typography variant="body1" component="p">
                      RandomInternetTroll228
                    </Typography>
                  </Box>

                  <Typography sx={{ cursor: 'pointer' }}>
                    Beard snackwave godard hammock actually man braid gentrify
                    pabst art party. Food truck before they sold out neutra,
                    tattooed farm-to-table flexitarian single-origin coffee
                    brunch put a bird on it wayfarers. Small batch tumeric
                    8-bit.
                  </Typography>
                </Container>
              </Grid>
            ))}
          </Grid>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === 'panel3'}
        onChange={handleChange('panel3')}
      >
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
          <Typography>Recommendations</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Grid container>
            {Array.from({ length: 5 }).map((_, id) => (
              <Grid item key={id}>
                <Book sx={{ fontSize: 100 }} />
                <Typography sx={{ textAlign: 'center', cursor: 'pointer' }}>
                  Book
                </Typography>
              </Grid>
            ))}
          </Grid>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === 'panel4'}
        onChange={handleChange('panel4')}
      >
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
          <Typography>News</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Grid container sx={{ flexDirection: 'column' }}>
            {Array.from({ length: 5 }).map((_, id) => (
              <Grid
                item
                key={id}
                sx={{ display: 'flex', alignItems: 'center' }}
              >
                <Article sx={{ fontSize: 100 }} />
                <Box>
                  <Typography variant="h6">
                    Lorem ipsum dolor, sit amet consectetur adipisicing.
                  </Typography>
                  <Typography>
                    Posted on {new Date().toLocaleString()}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default CustomizedAccordion;
