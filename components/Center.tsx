import { Box, Card, Grid, Typography, Button, IconButton } from '@mui/material';
import * as React from 'react';
import { FunctionComponent } from 'react';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import { RootObject } from './types';

interface IRootObject {
  data: RootObject;
}

const Center: FunctionComponent<IRootObject> = (props) => {
  const { data } = props;
  const unAssign: Number = data?.filter(
    (x) => x.riskLikelihood === null && x.riskImpact === null
  ).length;

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
            left: '-30px',
            top: '45%',
          }}
          endIcon={<ArrowRightAltIcon />}
        >
          Likelihood
        </Button>
      </Grid>

      <Grid item md={11} xs={10} sx={{ mt: 1 }}>
        {/* High */}
        <Grid container spacing={0.5} sx={{ mb: 0.5 }}>
          <Grid item md={1.5} xs={1}>
            <Typography
              sx={{
                fontSize: '12px',
                textAlign: 'center',
                marginTop: '41%',
                color: '#6E6B8C',
              }}
            >
              High
            </Typography>
          </Grid>
          <Grid item md={2.625} xs={2.75}>
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
          <Grid item md={2.625} xs={2.75}>
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
          <Grid item md={2.625} xs={2.75}>
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
          <Grid item md={2.625} xs={2.75}>
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
          <Grid item md={1.5} xs={1}>
            <Typography
              sx={{
                fontSize: '12px',
                textAlign: 'center',
                marginTop: '41%',
                color: '#6E6B8C',
              }}
            >
              Medium
            </Typography>
          </Grid>
          <Grid item md={2.625} xs={2.75}>
            <Box
              sx={{
                p: 2,
                border: '1px solid white',
                backgroundColor: '#FFF0B3',
                textAlign: 'center',
              }}
            >
              <Typography sx={{ fontSize: '12px', color: '#6E6B8C' }}>
                Medium
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
          <Grid item md={2.625} xs={2.75}>
            <Box
              sx={{
                p: 2,
                border: '1px solid white',
                backgroundColor: '#FFF0B3',
                textAlign: 'center',
              }}
            >
              <Typography sx={{ fontSize: '12px', color: '#6E6B8C' }}>
                Medium
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
          <Grid item md={2.625} xs={2.75}>
            <Box
              sx={{
                p: 2,
                border: '1px solid white',
                backgroundColor: '#FFF0B3',
                textAlign: 'center',
              }}
            >
              <Typography sx={{ fontSize: '12px', color: '#6E6B8C' }}>
                Medium
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
          <Grid item md={2.625} xs={2.75}>
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
          <Grid item md={1.5} xs={1}>
            <Typography
              sx={{
                fontSize: '12px',
                textAlign: 'center',
                marginTop: '41%',
                color: '#6E6B8C',
              }}
            >
              Low
            </Typography>
          </Grid>
          <Grid item md={2.625} xs={2.75}>
            <Box
              sx={{
                p: 2,
                border: '1px solid white',
                backgroundColor: '#ABF5D1',
                textAlign: 'center',
              }}
            >
              <Typography sx={{ fontSize: '12px', color: '#6E6B8C' }}>
                Low
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
          <Grid item md={2.625} xs={2.75}>
            <Box
              sx={{
                p: 2,
                border: '1px solid white',
                backgroundColor: '#ABF5D1',
                textAlign: 'center',
              }}
            >
              <Typography sx={{ fontSize: '12px', color: '#6E6B8C' }}>
                Low
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
          <Grid item md={2.625} xs={2.75}>
            <Box
              sx={{
                p: 2,
                border: '1px solid white',
                backgroundColor: '#FFF0B3',
                textAlign: 'center',
              }}
            >
              <Typography sx={{ fontSize: '12px', color: '#6E6B8C' }}>
                Medium
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
          <Grid item md={2.625} xs={2.75}>
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
          <Grid item md={1.5} xs={1}>
            <Typography
              sx={{
                fontSize: '12px',
                textAlign: 'center',
                marginTop: '41%',
                color: '#6E6B8C',
              }}
            >
              Unassigned
            </Typography>
          </Grid>
          <Grid item md={2.625} xs={2.75}>
            <Box
              sx={{
                p: 2,
                border: '1px solid white',
                backgroundColor: '#E0DFE6',
                textAlign: 'center',
              }}
            >
              <Typography sx={{ fontSize: '12px', color: '#6E6B8C' }}>
                Unassigned
              </Typography>
              <Typography
                sx={{
                  fontSize: '15px',
                  fontWeight: 'bolder',
                  color: '#6E6B8C',
                }}
              >
                {unAssign}
              </Typography>
            </Box>
          </Grid>
          <Grid item md={2.625} xs={2.75}>
            <Box
              sx={{
                p: 2,
                border: '1px solid white',
                backgroundColor: '#ABF5D1',
                textAlign: 'center',
              }}
            >
              <Typography sx={{ fontSize: '12px', color: '#6E6B8C' }}>
                Low
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
          <Grid item md={2.625} xs={2.75}>
            <Box
              sx={{
                p: 2,
                border: '1px solid white',
                backgroundColor: '#FFF0B3',
                textAlign: 'center',
              }}
            >
              <Typography sx={{ fontSize: '12px', color: '#6E6B8C' }}>
                Medium
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
          <Grid item md={2.625} xs={2.75}>
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

        {/* Bottom */}
        <Grid container spacing={0.5} sx={{ my: 0.5 }}>
          <Grid item md={1.5} xs={1}>
            <Typography
              sx={{
                fontSize: '12px',
                textAlign: 'center',
                marginTop: '19%',
                color: '#6E6B8C',
              }}
            ></Typography>
          </Grid>
          <Grid item md={2.625} xs={2.75}>
            <Box
              sx={{
                textAlign: 'center',
              }}
            >
              <Typography sx={{ fontSize: '12px', color: '#6E6B8C' }}>
                Unassigned
              </Typography>
            </Box>
          </Grid>
          <Grid item md={2.625} xs={2.75}>
            <Box
              sx={{
                textAlign: 'center',
              }}
            >
              <Typography sx={{ fontSize: '12px', color: '#6E6B8C' }}>
                Low
              </Typography>
            </Box>
          </Grid>
          <Grid item md={2.625} xs={2.75}>
            <Box
              sx={{
                textAlign: 'center',
              }}
            >
              <Typography sx={{ fontSize: '12px', color: '#6E6B8C' }}>
                Medium
              </Typography>
            </Box>
          </Grid>
          <Grid item md={2.625} xs={2.75}>
            <Box
              sx={{
                textAlign: 'center',
              }}
            >
              <Typography sx={{ fontSize: '12px', color: '#6E6B8C' }}>
                High
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};
export default Center;
