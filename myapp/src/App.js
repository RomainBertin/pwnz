import React, { Component } from 'react';
import ControlBar from './ControlBar';
import FoldersList from './FoldersList';
import MediaList from './MediaList';
import Loading from './Common';
import * as ACTIONS from "./actions";
var {connect} = require("react-redux");
import './App.css';


class App extends Component {
  componentWillMount() {
    this.props.fetchDatas();
  }

  render() {
    if (this.props.isDataLoading || typeof this.props.isDataLoading === 'undefined')
      return (Loading())
    return (
      <div>
        <div className="leftArea">
          <FoldersList />
        </div>
        <div className="rightArea">
          <ControlBar />
          <MediaList />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isDataLoading: state.media.isLoading
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchDatas: () => {
      dispatch(ACTIONS.loadDatas());
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
