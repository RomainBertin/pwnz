import React, { Component } from 'react';
var {connect} = require("react-redux");

class MediaRangeResizer extends Component {
    handleChange(e) {
      this.props.setZoomFactor(e.target.value);
    }

    render() {
      return (
        <input type="range" min="75" max="225" onChange={this.handleChange.bind(this)}/>
      )
    }
}

const mapStateToProps = (state) => {
  return {
    ...state
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    setZoomFactor: (zoomFactor) => {
      dispatch({type: 'SET_ZOOM_FACTOR', sizeFactor: zoomFactor})
    }
  }
}

var MediaRangeResizerContainer = connect(mapStateToProps, mapDispatchToProps)(MediaRangeResizer);

class ControlBar extends Component {
  render() {
    return (
      <div className="control-bar">
        <MediaRangeResizerContainer sizeFactor={this.props.sizeFactor}/>
      </div>
    )
  }
}

export default connect((state) => {
    return {
      sizeFactor: state.media.sizeFactor
    };
})(ControlBar);
