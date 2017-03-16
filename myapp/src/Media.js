import React, { Component } from 'react';
var {connect} = require('react-redux');
import _ from 'lodash'

class Media extends Component {
  handleClick(e) {
    /* Implements dbclick */
    if (!this._delayedClick)
      this._delayedClick = _.debounce(() => this.clickedOnce = undefined, 500);

    if (this.clickedOnce) {
      this._delayedClick.cancel();
      this.clickedOnce = false;
      this.dbClick(e)
    }
    else {
      this._delayedClick(this);
      this.clickedOnce = true;
    }

    this.props.changeSelectedMediaId(this.props.id);
  }

  dbClick() {
    this.props.showMedia(this.props.id)
  }

  render() {
    let args = this.props

    let classNames = ["mediaWrapper"]
    if (this.props.isSelected) classNames.push("selected")

    const styles = {
      width: this.props.sizeFactor + "px",
      height: this.props.sizeFactor + "px"
    }

    return (
      <div
        style={styles}
        className={classNames.join(" ")}
        data-size-factor={this.props.sizeFactor}
        onClick={this.handleClick.bind(this)}
      >
        <img src={args.name} alt=""/>
      </div>
    )
  }
}

Media.defaultProps = {
  sizeFactor: 100
}

export default connect((state) => {
    return {
      ...state
    }
}, (dispatch) => {
  return {
    changeSelectedMediaId: (mediaId) => {
      dispatch({type: 'CHANGE_SELECTED_MEDIA_ID', mediaId})
    }
  }
})(Media);
