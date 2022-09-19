import {
  Box,
  Card,
  Grid,
  Typography,
  Button,
  IconButton,
  Container,
  CardContent,
} from '@mui/material';
import * as React from 'react';
import './style.css';
import WarningAmberIcon from '@mui/icons-material/WarningAmber';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import Header from './components/Head';
import Center from './components/Center';
import data from './tasks.json';
import { RootObject } from './types';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';

export default function App() {
  return (
    <Container>
      <Grid
        container
        justifyContent="center"
        direction="column"
        alignItems="center"
        sx={{ height: '100vh' }}
      >
        <Grid item>
          <Card sx={{ minHeight: '423px', minWidth: '630px' }}>
            <CardContent>
              {/* Head Part */}
              <Header />

              {/* Center Part */}
              <Center data={data} />

              {/* Bottom Line */}
              <Grid item md={12} sx={{ mt: 2, textAlign: 'center' }}>
                <Button
                  sx={{
                    textTransform: 'capitalize',
                    color: 'black',
                    fontWeight: 500,
                    fontSize: '12px',
                    p: 0,
                  }}
                  endIcon={<ArrowRightAltIcon />}
                >
                  Impact
                </Button>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
}
