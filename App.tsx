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

export default function App() {
  let g: RootObject[] = data;
  console.log(g);
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
              <Center />
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
}
