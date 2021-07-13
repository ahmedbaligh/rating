import React from 'react';

import ErrorPage from './Error404.styles';
import { ErrorAssets } from '../../assets';

const Error404 = () => {
  return (
    <ErrorPage>
      <img src={ErrorAssets.error404} alt="error404"></img>
      Page not found
    </ErrorPage>
  );
};

export default Error404;
