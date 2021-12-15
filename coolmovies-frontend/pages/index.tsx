import { css } from '@emotion/react';
import {
  Button,
  Paper,
  TextField,
  Tooltip,
  Typography,
  Zoom,
} from '@mui/material';
import type { NextPage } from 'next';
import { exampleActions, useAppDispatch, useAppSelector } from '../redux';

const primary = '#1976d2';

const Home: NextPage = () => {
  const dispatch = useAppDispatch();
  const exampleState = useAppSelector((state) => state.example);
  return (
    <div css={styles.root}>
      <Paper elevation={3} css={styles.navBar}>
        <Typography>{'EcoPortal'}</Typography>
      </Paper>

      <div css={styles.body}>
        <Typography variant={'h1'} css={styles.heading}>
          {'EcoPortal Coolmovies Test'}
        </Typography>
        <Typography variant={'subtitle1'} css={styles.subtitle}>
          {`Thank you for taking the time to take our test. We really appreciate it. 
        All the information on what is required can be found in the README at the root of this repo. 
        Please dont spend ages on this and just get through as much of it as you can. 
        Good luck! :) `}
        </Typography>

        <div css={styles.mainControls}>
          <Tooltip
            title={`Side Effect Count from Epic (Gets run on odd values): ${exampleState.sideEffectCount}`}
            arrow
          >
            <Button
              variant={'contained'}
              onClick={() => dispatch(exampleActions.increment())}
            >
              {`Redux Increment: ${exampleState.value}`}
            </Button>
          </Tooltip>
          <Button
            variant={'outlined'}
            onClick={() =>
              dispatch(
                exampleState.fetchData
                  ? exampleActions.clearData()
                  : exampleActions.fetch()
              )
            }
          >
            {exampleState.fetchData ? 'Hide some data' : 'Fetch some data'}
          </Button>
        </div>

        <Zoom in={Boolean(exampleState.fetchData)} unmountOnExit mountOnEnter>
          <TextField
            css={styles.dataInput}
            multiline
            label={'Some Data'}
            defaultValue={JSON.stringify(exampleState.fetchData)}
          />
        </Zoom>
      </div>
    </div>
  );
};

const styles = {
  root: css({
    height: '100vh',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  }),
  navBar: css({
    background: primary,
    height: 50,
    alignSelf: 'stretch',
    display: 'flex',
    alignItems: 'center',
    padding: 16,
    borderRadius: 0,
    p: {
      color: 'white',
    },
  }),
  body: css({
    alignSelf: 'stretch',
    padding: 32,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  }),
  heading: css({ marginTop: 16, fontSize: '2.75rem', textAlign: 'center' }),
  subtitle: css({
    fontWeight: 300,
    textAlign: 'center',
    maxWidth: 600,
    margin: '24px 0',
    color: 'rgba(0, 0, 0, 0.6)',
  }),
  mainControls: css({
    display: 'flex',
    alignItems: 'center',
    button: { marginRight: 16 },
  }),
  dataInput: css({
    alignSelf: 'stretch',
    margin: '32px 0',
  }),
};

export default Home;
