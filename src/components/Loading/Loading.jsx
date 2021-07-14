import React from 'react';
import { connect } from 'react-redux';

import { Dimmer, Loader } from 'semantic-ui-react';
import StyledLoading from './Loading.styles';

const Loading = ({ darkTheme, withContainer }) => {
  const Segment = () => (
    <StyledLoading>
      <Dimmer active inverted={!darkTheme}>
        <Loader>Loading</Loader>
      </Dimmer>
    </StyledLoading>
  );

  return !withContainer ? (
    <Segment />
  ) : (
    <div style={{ height: '100vh', width: '100%' }}>
      <Segment />
    </div>
  );
};

export default connect(({ darkTheme }) => ({ darkTheme }))(Loading);
