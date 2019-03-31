import React from 'react';
import ReactDOM from 'react-dom';
import history from '../history';

const Modal = props => {
  return ReactDOM.createPortal (
    <div
      onClick={() => history.push ('/')}
      className="ui dimmer modals visible active"
    >
      <div
        onClick={e => e.stopPropagation ()}
        className="ui standard modal visible active"
      >
        <div class="header">Delete Stream</div>
        <div className="content">
          Are you sure you want to delete this stream?
        </div>
        <div class="actions">
          <button className="ui button red">Delete</button>
          <button className="ui button">Cancel</button>
        </div>
      </div>
    </div>,
    document.querySelector ('#modal')
  );
};

export default Modal;
