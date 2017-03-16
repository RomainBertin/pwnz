import React, { Component } from 'react';
var {connect} = require("react-redux");
import * as ACTIONS from "./actions";

class Folder extends Component {
  handleClick() {
    this.props.setFolderSelectedId(this.props.id);
  }

  render() {
    let args = this.props
    let classNames = ["folderItem"]
    if (args.isSelected) classNames.push("selected")
    return (
      <div className={classNames.join(" ")} data-folder-id={args.id} onClick={this.handleClick.bind(this)}>{args.name}</div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setFolderSelectedId: (folderId) => {
        dispatch(ACTIONS.setFolderSelectedId(folderId))
    }
  }
}

export default connect((state) => {
    return state;
}, mapDispatchToProps)(Folder);
