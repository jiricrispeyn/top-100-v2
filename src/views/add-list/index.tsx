import React from 'react';
import { bindActionCreators, Dispatch } from 'redux';
import { connect } from 'react-redux';
import { compose } from 'lodash/fp';

import AddList from './add-list';
import { AppState } from '../../reducers';
import actions from '../../actions';
import { RouteComponentProps } from '@reach/router';

interface StateProps {}

interface DispatchProps {
  search(query: string, type: string): void;
  add(list: any[]): void;
}

const mapStateToProps = (state: AppState): StateProps => ({});
const mapDispatchToProps = (dispatch: Dispatch): DispatchProps => ({
  search: bindActionCreators(actions.spotify.uiActions.search, dispatch),
  add: bindActionCreators(actions.top100.uiActions.add, dispatch),
});

const withRedux = connect<StateProps, DispatchProps, {}, AppState>(
  mapStateToProps,
  mapDispatchToProps
);

export default compose(withRedux)(
  (props: AddListProps): JSX.Element => {
    return <AddList {...props} />;
  }
);

export type AddListProps = StateProps & DispatchProps & RouteComponentProps;
