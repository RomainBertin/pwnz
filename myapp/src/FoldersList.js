import React, { Component } from 'react';
import Folder from './Folder';
var {connect} = require("react-redux");

class FoldersList extends Component {
  componentDidMount() {
  }

  handleClickNewFolder() {
    console.log("HERE ASK FOR A NEW FORLER");
  }

  render() {
    return (
      <div className="folderArea">
        <div className="folderOperations">
          <a className="btnClass" data-primary='true' onClick={this.handleClickNewFolder.bind(this)}>Nouveau</a>
        </div>
        <div className="foldersList">
          {
            this.props.data.map((folder) =>
              (
                <Folder
                  name={folder.name}
                  id={folder.id}
                  key={folder.id}
                  isSelected={this.props.selectedFolderId === folder.id}
                />
              )
            )
         }
        </div>
      </div>

    )
  }
}

export default connect((state) => {
    return {
      data: state.media.data,
      selectedFolderId: state.media.selectedFolderId
    };
})(FoldersList);
