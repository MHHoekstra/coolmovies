import { css } from '@emotion/react';
import type { NextPage } from 'next';
import { exampleActions, useAppDispatch, useAppSelector } from '../redux';

const Home: NextPage = () => {
  const dispatch = useAppDispatch();
  const exampleState = useAppSelector((state) => state.example);
  return (
    <div css={styles.root}>
      <button onClick={() => dispatch(exampleActions.increment())}>
        {`Increment with Redux! Value: ${exampleState.value}`}
      </button>
    </div>
  );
};

const styles = {
  root: css({}),
};

export default Home;
