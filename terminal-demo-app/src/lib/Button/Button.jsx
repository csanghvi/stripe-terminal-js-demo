import * as React from "react";

import { css } from "emotion";

class Button extends React.Component {
  render() {
    const { children, disabled, onClick } = this.props;

    return (
      <button
        className={css`
          background: #586ada;
          border-radius: 4px 4px 4px 4px;
          box-shadow: 0 2px 5px 0 rgba(50, 50, 93, 0),
            0 1px 1.5px 0 rgba(0, 0, 0, 0);
          height: 28px;
          width: 72px;
          display: flex;
          align-items: center;
          justify-content: center;

          :disabled {
            pointer-events: none;
            opacity: 0.5;
          }

          :hover {
            opacity: 0.9;
          }
        `}
        onClick={onClick}
        disabled={disabled}
      >
        {children}
      </button>
    );
  }
}
export default Button;
