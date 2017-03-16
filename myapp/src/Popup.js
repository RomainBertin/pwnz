import React, { Component } from 'react';
import _ from 'lodash'
import './Popup.css';

export class PopupContainer extends Component {
    handleOnClose() {
      this.props.onClose();
    }

    render() {
      let selectedMedia = this.props.selectedMedia;

      return (
          <Popup title={selectedMedia.name} onClose={this.handleOnClose.bind(this)}>
            <img role="presentation" src={selectedMedia.name} width="300" />
          </Popup>
      )
    }
}

export class Popup extends Component {

  handleCloseClick() {
    this.props.onClose();
  }

  render() {
    return (
      <div id="" className="popupContainer">
         <div className="popup">
             <div className="popupTopBar">
                 <div className="title">{this.props.title}</div>
                 {
                   !this.props.closable && <div onClick={this.handleCloseClick.bind(this)} className="closingCross">X</div>
                 }
             </div>
             <div className="popupContent">
               {this.props.children}
             </div>
         </div>
      </div>
    )
  }
}
