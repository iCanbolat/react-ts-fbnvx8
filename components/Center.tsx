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
  const dataByCols = {
    //Unassigned Task Column
    unassigned: {
      unAssign: data?.filter(
        (x) => x.riskLikelihood === null && x.riskImpact === null
      ).length,
      low: data?.filter(
        (x) => x.riskImpact === null && x.riskLikelihood === 'low'
      ).length,
      medium: data?.filter(
        (x) => x.riskImpact === null && x.riskLikelihood === 'medium'
      ).length,
      high: data?.filter(
        (x) => x.riskImpact === null && x.riskLikelihood === 'high'
      ).length,
    },
    //Low Task Col
    low: {
      unAssign: data?.filter(
        (x) => x.riskImpact === 'low' && x.riskLikelihood === null
      ).length,
      low: data?.filter(
        (x) => x.riskImpact === 'low' && x.riskLikelihood === 'low'
      ).length,
      medium: data?.filter(
        (x) => x.riskImpact === 'low' && x.riskLikelihood === 'medium'
      ).length,
      high: data?.filter(
        (x) => x.riskImpact === 'low' && x.riskLikelihood === 'high'
      ).length,
    },
    //Medium Task Col
    medium: {
      unAssign: data?.filter(
        (x) => x.riskImpact === 'medium' && x.riskLikelihood === null
      ).length,
      low: data?.filter(
        (x) => x.riskImpact === 'medium' && x.riskLikelihood === 'low'
      ).length,
      medium: data?.filter(
        (x) => x.riskImpact === 'medium' && x.riskLikelihood === 'medium'
      ).length,
      high: data?.filter(
        (x) => x.riskImpact === 'medium' && x.riskLikelihood === 'high'
      ).length,
    },
    //High Task Col
    high: {
      unAssign: data?.filter(
        (x) => x.riskImpact === 'high' && x.riskLikelihood === null
      ).length,
      low: data?.filter(
        (x) => x.riskImpact === 'high' && x.riskLikelihood === 'low'
      ).length,
      medium: data?.filter(
        (x) => x.riskImpact === 'high' && x.riskLikelihood === 'medium'
      ).length,
      high: data?.filter(
        (x) => x.riskImpact === 'high' && x.riskLikelihood === 'high'
      ).length,
    },
  };

  console.log(dataByCols.unassigned.low);
  return (
    <Grid container sx={{ minHeight: '14em' }}>
      <Grid item md={1} xs={1}>
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

      <Grid item md={11} xs={11} sx={{ mt: 1 }}>
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
                p: 3.1,
                border: '1px solid white',
                backgroundColor: '#FFBDAD',
                textAlign: 'center',
              }}
            >
              <Typography
                sx={{
                  fontSize: '15px',
                  fontWeight: 'bolder',
                  color: '#6E6B8C',
                }}
              >
                {dataByCols.unassigned.high}
              </Typography>
            </Box>
          </Grid>
          <Grid item md={2.625} xs={2.75}>
            <Box
              sx={{
                p: 3.1,
                border: '1px solid white',
                backgroundColor: '#FFBDAD',
                textAlign: 'center',
              }}
            >
              <Typography
                sx={{
                  fontSize: '15px',
                  fontWeight: 'bolder',
                  color: '#6E6B8C',
                }}
              >
                {dataByCols.low.high}
              </Typography>
            </Box>
          </Grid>
          <Grid item md={2.625} xs={2.75}>
            <Box
              sx={{
                p: 3.1,
                border: '1px solid white',
                backgroundColor: '#FFBDAD',
                textAlign: 'center',
              }}
            >
              <Typography
                sx={{
                  fontSize: '15px',
                  fontWeight: 'bolder',
                  color: '#6E6B8C',
                }}
              >
                {dataByCols.medium.high}
              </Typography>
            </Box>
          </Grid>
          <Grid item md={2.625} xs={2.75}>
            <Box
              sx={{
                p: 3.1,
                border: '1px solid white',
                backgroundColor: '#FFBDAD',
                textAlign: 'center',
              }}
            >
              <Typography
                sx={{
                  fontSize: '15px',
                  fontWeight: 'bolder',
                  color: '#6E6B8C',
                }}
              >
                {dataByCols.high.high}
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
                wordBreak: 'break-all',
              }}
            >
              Medium
            </Typography>
          </Grid>
          <Grid item md={2.625} xs={2.75}>
            <Box
              sx={{
                p: 3.1,
                border: '1px solid white',
                backgroundColor: '#FFF0B3',
                textAlign: 'center',
              }}
            >
              <Typography
                sx={{
                  fontSize: '15px',
                  fontWeight: 'bolder',
                  color: '#6E6B8C',
                }}
              >
                {dataByCols.unassigned.medium}
              </Typography>
            </Box>
          </Grid>
          <Grid item md={2.625} xs={2.75}>
            <Box
              sx={{
                p: 3.1,
                border: '1px solid white',
                backgroundColor: '#FFF0B3',
                textAlign: 'center',
              }}
            >
              <Typography
                sx={{
                  fontSize: '15px',
                  fontWeight: 'bolder',
                  color: '#6E6B8C',
                }}
              >
                {dataByCols.low.medium}
              </Typography>
            </Box>
          </Grid>
          <Grid item md={2.625} xs={2.75}>
            <Box
              sx={{
                p: 3.1,
                border: '1px solid white',
                backgroundColor: '#FFF0B3',
                textAlign: 'center',
              }}
            >
              <Typography
                sx={{
                  fontSize: '15px',
                  fontWeight: 'bolder',
                  color: '#6E6B8C',
                }}
              >
                {dataByCols.medium.medium}
              </Typography>
            </Box>
          </Grid>
          <Grid item md={2.625} xs={2.75}>
            <Box
              sx={{
                p: 3.1,
                border: '1px solid white',
                backgroundColor: '#FFBDAD',
                textAlign: 'center',
              }}
            >
              <Typography
                sx={{
                  fontSize: '15px',
                  fontWeight: 'bolder',
                  color: '#6E6B8C',
                }}
              >
                {dataByCols.medium.high}
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
                p: 3.1,
                border: '1px solid white',
                backgroundColor: '#ABF5D1',
                textAlign: 'center',
              }}
            >
              <Typography
                sx={{
                  fontSize: '15px',
                  fontWeight: 'bolder',
                  color: '#6E6B8C',
                }}
              >
                {dataByCols.unassigned.low}
              </Typography>
            </Box>
          </Grid>
          <Grid item md={2.625} xs={2.75}>
            <Box
              sx={{
                p: 3.1,
                border: '1px solid white',
                backgroundColor: '#ABF5D1',
                textAlign: 'center',
              }}
            >
              <Typography
                sx={{
                  fontSize: '15px',
                  fontWeight: 'bolder',
                  color: '#6E6B8C',
                }}
              >
                {dataByCols.low.low}
              </Typography>
            </Box>
          </Grid>
          <Grid item md={2.625} xs={2.75}>
            <Box
              sx={{
                p: 3.1,
                border: '1px solid white',
                backgroundColor: '#FFF0B3',
                textAlign: 'center',
              }}
            >
              <Typography
                sx={{
                  fontSize: '15px',
                  fontWeight: 'bolder',
                  color: '#6E6B8C',
                }}
              >
                {dataByCols.medium.low}
              </Typography>
            </Box>
          </Grid>
          <Grid item md={2.625} xs={2.75}>
            <Box
              sx={{
                p: 3.1,
                border: '1px solid white',
                backgroundColor: '#FFBDAD',
                textAlign: 'center',
              }}
            >
              <Typography
                sx={{
                  fontSize: '15px',
                  fontWeight: 'bolder',
                  color: '#6E6B8C',
                }}
              >
                {dataByCols.high.low}
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
                wordBreak: 'break-all',
              }}
            >
              Unassigned
            </Typography>
          </Grid>
          <Grid item md={2.625} xs={2.75}>
            <Box
              sx={{
                p: 3.1,
                border: '1px solid white',
                backgroundColor: '#E0DFE6',
                textAlign: 'center',
              }}
            >
              <Typography
                sx={{
                  fontSize: '15px',
                  fontWeight: 'bolder',
                  color: '#6E6B8C',
                }}
              >
                {dataByCols.unassigned.unAssign}
              </Typography>
            </Box>
          </Grid>
          <Grid item md={2.625} xs={2.75}>
            <Box
              sx={{
                p: 3.1,
                border: '1px solid white',
                backgroundColor: '#ABF5D1',
                textAlign: 'center',
              }}
            >
              <Typography
                sx={{
                  fontSize: '15px',
                  fontWeight: 'bolder',
                  color: '#6E6B8C',
                }}
              >
                {dataByCols.low.unAssign}
              </Typography>
            </Box>
          </Grid>
          <Grid item md={2.625} xs={2.75}>
            <Box
              sx={{
                p: 3.1,
                border: '1px solid white',
                backgroundColor: '#FFF0B3',
                textAlign: 'center',
              }}
            >
              <Typography
                sx={{
                  fontSize: '15px',
                  fontWeight: 'bolder',
                  color: '#6E6B8C',
                }}
              >
                {dataByCols.medium.unAssign}
              </Typography>
            </Box>
          </Grid>
          <Grid item md={2.625} xs={2.75}>
            <Box
              sx={{
                p: 3.1,
                border: '1px solid white',
                backgroundColor: '#FFBDAD',
                textAlign: 'center',
              }}
            >
              <Typography
                sx={{
                  fontSize: '15px',
                  fontWeight: 'bolder',
                  color: '#6E6B8C',
                }}
              >
                {dataByCols.high.unAssign}
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
