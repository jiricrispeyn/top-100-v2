import React from 'react';
import { bindActionCreators, Dispatch } from 'redux';
import { connect } from 'react-redux';
import { compose } from 'lodash/fp';

import Home from './home';
import { AppState } from '../../reducers';
import actions from '../../actions';
import { RouteComponentProps } from '@reach/router';

interface StateProps {}

interface DispatchProps {
  get(): void;
}

const mapStateToProps = (state: AppState): StateProps => ({});
const mapDispatchToProps = (dispatch: Dispatch): DispatchProps => ({
  get: bindActionCreators(actions.top100.uiActions.get, dispatch),
});

const withRedux = connect<StateProps, DispatchProps, {}, AppState>(
  mapStateToProps,
  mapDispatchToProps
);

export default compose(withRedux)(
  (props: HomeProps): JSX.Element => {
    return <Home {...props} />;
  }
);

export type HomeProps = StateProps & DispatchProps & RouteComponentProps;
