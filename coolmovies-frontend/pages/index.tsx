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
      <span>
        {`Side Effect Count from Epic (Gets run on odd values): ${exampleState.sideEffectCount}`}
      </span>
      <button onClick={() => dispatch(exampleActions.fetch())}>
        {'Fetch some data'}
      </button>
      {exampleState.fetchData && (
        <div>{JSON.stringify(exampleState.fetchData)}</div>
      )}
    </div>
  );
};

const styles = {
  root: css({}),
};

export default Home;
