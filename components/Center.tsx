import { Box, Card, Grid, Typography, Button, IconButton } from '@mui/material';
import * as React from 'react';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';

export default function Center() {
  return (
    <Grid container sx={{ minHeight: '14em' }}>
      <Grid item md={1}>
        <Button
          sx={{
            transform: 'rotate(-90deg)',
            textTransform: 'capitalize',
            color: 'black',
            fontWeight: 500,
            fontSize: '12px',
            p: 0,
            left: '-35px',
            top: '45%',
          }}
          endIcon={<ArrowRightAltIcon />}
        >
          Likelihood
        </Button>
      </Grid>

      <Grid item md={11} sx={{ mt: 1 }}>
        {/* High */}
        <Grid container spacing={0.5} sx={{ mb: 0.5 }}>
          <Grid item md={3}>
            <Typography
              sx={{
                fontSize: '12px',
                textAlign: 'center',
                marginTop: '19%',
                color: '#6E6B8C',
              }}
            >
              High
            </Typography>
          </Grid>
          <Grid item md={2}>
            <Box
              sx={{
                p: 2,
                border: '1px solid white',
                backgroundColor: '#FFBDAD',
                textAlign: 'center',
              }}
            >
              <Typography sx={{ fontSize: '12px', color: '#6E6B8C' }}>
                High
              </Typography>
              <Typography
                sx={{
                  fontSize: '15px',
                  fontWeight: 'bolder',
                  color: '#6E6B8C',
                }}
              >
                9
              </Typography>
            </Box>
          </Grid>
          <Grid item md={2}>
            <Box
              sx={{
                p: 2,
                border: '1px solid white',
                backgroundColor: '#FFBDAD',
                textAlign: 'center',
              }}
            >
              <Typography sx={{ fontSize: '12px', color: '#6E6B8C' }}>
                High
              </Typography>
              <Typography
                sx={{
                  fontSize: '15px',
                  fontWeight: 'bolder',
                  color: '#6E6B8C',
                }}
              >
                9
              </Typography>
            </Box>
          </Grid>
          <Grid item md={2}>
            <Box
              sx={{
                p: 2,
                border: '1px solid white',
                backgroundColor: '#FFBDAD',
                textAlign: 'center',
              }}
            >
              <Typography sx={{ fontSize: '12px', color: '#6E6B8C' }}>
                High
              </Typography>
              <Typography
                sx={{
                  fontSize: '15px',
                  fontWeight: 'bolder',
                  color: '#6E6B8C',
                }}
              >
                9
              </Typography>
            </Box>
          </Grid>
          <Grid item md={2}>
            <Box
              sx={{
                p: 2,
                border: '1px solid white',
                backgroundColor: '#FFBDAD',
                textAlign: 'center',
              }}
            >
              <Typography sx={{ fontSize: '12px', color: '#6E6B8C' }}>
                High
              </Typography>
              <Typography
                sx={{
                  fontSize: '15px',
                  fontWeight: 'bolder',
                  color: '#6E6B8C',
                }}
              >
                9
              </Typography>
            </Box>
          </Grid>
        </Grid>

        {/* Medium */}
        <Grid container spacing={0.5} sx={{ mb: 0.5 }}>
          <Grid item md={3}>
            <Typography
              sx={{
                fontSize: '12px',
                textAlign: 'center',
                marginTop: '19%',
                color: '#6E6B8C',
              }}
            >
              Medium
            </Typography>
          </Grid>
          <Grid item md={2}>
            <Box
              sx={{
                p: 2,
                border: '1px solid white',
                backgroundColor: '#FFF0B3',
                textAlign: 'center',
              }}
            >
              <Typography sx={{ fontSize: '12px', color: '#6E6B8C' }}>
                High
              </Typography>
              <Typography
                sx={{
                  fontSize: '15px',
                  fontWeight: 'bolder',
                  color: '#6E6B8C',
                }}
              >
                9
              </Typography>
            </Box>
          </Grid>
          <Grid item md={2}>
            <Box
              sx={{
                p: 2,
                border: '1px solid white',
                backgroundColor: '#FFF0B3',
                textAlign: 'center',
              }}
            >
              <Typography sx={{ fontSize: '12px', color: '#6E6B8C' }}>
                High
              </Typography>
              <Typography
                sx={{
                  fontSize: '15px',
                  fontWeight: 'bolder',
                  color: '#6E6B8C',
                }}
              >
                9
              </Typography>
            </Box>
          </Grid>
          <Grid item md={2}>
            <Box
              sx={{
                p: 2,
                border: '1px solid white',
                backgroundColor: '#FFF0B3',
                textAlign: 'center',
              }}
            >
              <Typography sx={{ fontSize: '12px', color: '#6E6B8C' }}>
                High
              </Typography>
              <Typography
                sx={{
                  fontSize: '15px',
                  fontWeight: 'bolder',
                  color: '#6E6B8C',
                }}
              >
                9
              </Typography>
            </Box>
          </Grid>
          <Grid item md={2}>
            <Box
              sx={{
                p: 2,
                border: '1px solid white',
                backgroundColor: '#FFBDAD',
                textAlign: 'center',
              }}
            >
              <Typography sx={{ fontSize: '12px', color: '#6E6B8C' }}>
                High
              </Typography>
              <Typography
                sx={{
                  fontSize: '15px',
                  fontWeight: 'bolder',
                  color: '#6E6B8C',
                }}
              >
                9
              </Typography>
            </Box>
          </Grid>
        </Grid>

        {/* Low */}
        <Grid container spacing={0.5} sx={{ mb: 0.5 }}>
          <Grid item md={3}>
            <Typography
              sx={{
                fontSize: '12px',
                textAlign: 'center',
                marginTop: '19%',
                color: '#6E6B8C',
              }}
            >
              Medium
            </Typography>
          </Grid>
          <Grid item md={2}>
            <Box
              sx={{
                p: 2,
                border: '1px solid white',
                backgroundColor: '#ABF5D1',
                textAlign: 'center',
              }}
            >
              <Typography sx={{ fontSize: '12px', color: '#6E6B8C' }}>
                High
              </Typography>
              <Typography
                sx={{
                  fontSize: '15px',
                  fontWeight: 'bolder',
                  color: '#6E6B8C',
                }}
              >
                9
              </Typography>
            </Box>
          </Grid>
          <Grid item md={2}>
            <Box
              sx={{
                p: 2,
                border: '1px solid white',
                backgroundColor: '#ABF5D1',
                textAlign: 'center',
              }}
            >
              <Typography sx={{ fontSize: '12px', color: '#6E6B8C' }}>
                High
              </Typography>
              <Typography
                sx={{
                  fontSize: '15px',
                  fontWeight: 'bolder',
                  color: '#6E6B8C',
                }}
              >
                9
              </Typography>
            </Box>
          </Grid>
          <Grid item md={2}>
            <Box
              sx={{
                p: 2,
                border: '1px solid white',
                backgroundColor: '#FFF0B3',
                textAlign: 'center',
              }}
            >
              <Typography sx={{ fontSize: '12px', color: '#6E6B8C' }}>
                High
              </Typography>
              <Typography
                sx={{
                  fontSize: '15px',
                  fontWeight: 'bolder',
                  color: '#6E6B8C',
                }}
              >
                9
              </Typography>
            </Box>
          </Grid>
          <Grid item md={2}>
            <Box
              sx={{
                p: 2,
                border: '1px solid white',
                backgroundColor: '#FFBDAD',
                textAlign: 'center',
              }}
            >
              <Typography sx={{ fontSize: '12px', color: '#6E6B8C' }}>
                High
              </Typography>
              <Typography
                sx={{
                  fontSize: '15px',
                  fontWeight: 'bolder',
                  color: '#6E6B8C',
                }}
              >
                9
              </Typography>
            </Box>
          </Grid>
        </Grid>

        {/* Unassigned */}
        <Grid container spacing={0.5} sx={{ mb: 0.5 }}>
          <Grid item md={3}>
            <Typography
              sx={{
                fontSize: '12px',
                textAlign: 'center',
                marginTop: '19%',
                color: '#6E6B8C',
              }}
            >
              Unassigned
            </Typography>
          </Grid>
          <Grid item md={2}>
            <Box
              sx={{
                p: 2,
                border: '1px solid white',
                backgroundColor: '#E0DFE6',
                textAlign: 'center',
              }}
            >
              <Typography sx={{ fontSize: '12px', color: '#6E6B8C' }}>
                High
              </Typography>
              <Typography
                sx={{
                  fontSize: '15px',
                  fontWeight: 'bolder',
                  color: '#6E6B8C',
                }}
              >
                9
              </Typography>
            </Box>
          </Grid>
          <Grid item md={2}>
            <Box
              sx={{
                p: 2,
                border: '1px solid white',
                backgroundColor: '#ABF5D1',
                textAlign: 'center',
              }}
            >
              <Typography sx={{ fontSize: '12px', color: '#6E6B8C' }}>
                High
              </Typography>
              <Typography
                sx={{
                  fontSize: '15px',
                  fontWeight: 'bolder',
                  color: '#6E6B8C',
                }}
              >
                9
              </Typography>
            </Box>
          </Grid>
          <Grid item md={2}>
            <Box
              sx={{
                p: 2,
                border: '1px solid white',
                backgroundColor: '#FFF0B3',
                textAlign: 'center',
              }}
            >
              <Typography sx={{ fontSize: '12px', color: '#6E6B8C' }}>
                High
              </Typography>
              <Typography
                sx={{
                  fontSize: '15px',
                  fontWeight: 'bolder',
                  color: '#6E6B8C',
                }}
              >
                9
              </Typography>
            </Box>
          </Grid>
          <Grid item md={2}>
            <Box
              sx={{
                p: 2,
                border: '1px solid white',
                backgroundColor: '#FFBDAD',
                textAlign: 'center',
              }}
            >
              <Typography sx={{ fontSize: '12px', color: '#6E6B8C' }}>
                High
              </Typography>
              <Typography
                sx={{
                  fontSize: '15px',
                  fontWeight: 'bolder',
                  color: '#6E6B8C',
                }}
              >
                9
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
