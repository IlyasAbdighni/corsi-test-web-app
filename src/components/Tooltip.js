import { withTooltip, Tooltip } from 'react-tippy';
import React from 'react';

const MyTooltip = props => {
  let cDisabled = '';
  if (!props.disabled) {
    cDisabled = 'disabled';
  }
  return (
    <div>
      <Tooltip
        title="Please login to like"
        position="bottom"
        trigger="mouseenter"
        arrow
        disabled={props.disabled}
      >
        <button
          className={`waves-effect waves-light btn-flat unlike-btn ${cDisabled}`}
        >
          <i className="material-icons">thumb_down</i>
        </button>
      </Tooltip>
    </div>
  );
};

export default MyTooltip;
