import React, { Component } from 'react';
import Media from './Media';
import {PopupContainer} from './Popup';
var {connect} = require("react-redux");

class MediaList extends Component {
  showMedia(mediaId) {
    this.props.showMedia(mediaId)
  }

  get_selected_media() {
      return this.props.data[this.props.selectedFolderIndex].medias
        .filter(
          (m) => this.props.selectedMediaId === m.id
        )[0];
  }

  closePopup() {
    this.props.hideMedia();
  }

  render() {
    let medias = this.props.data[this.props.selectedFolderIndex].medias;

    return (
      <div className="mediaList">
        <div>
          {
            medias.map((media, index) => (
              <Media
                id={media.id}
                name={media.name}
                width={media.width}
                height={media.height}
                key={index}
                isSelected={this.props.selectedMediaId === media.id ? 'selected' : ''}
                sizeFactor={this.props.sizeFactor}
                showMedia={this.showMedia.bind(this)}
              />
            ))
          }
        </div>
        {
          this.props.isPopupOpen &&
            <PopupContainer selectedMedia={this.get_selected_media()} onClose={this.closePopup.bind(this)} />
        }
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    data: state.media.data,
    isPopupOpen: state.media.isPopupOpen,
    selectedFolderIndex: state.media.selectedFolderIndex,
    sizeFactor: state.media.sizeFactor,
    selectedMediaId: state.media.selectedMediaId
  }
};

const mapDispatchToProps = (dispatch) => {
    return {
      showMedia: (mediaId) => {
        dispatch({type: "SHOW_MEDIA", mediaId})
      },
      hideMedia: () => {
        dispatch({type: "HIDE_MEDIA"})
      }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(MediaList);
