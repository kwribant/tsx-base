import * as React from "react";

export interface MessageProps extends React.Props<Message> {}

import "./index.css";

export class Message extends React.Component<MessageProps, {}> {
  private elementClass = 'message';

  public render() {
    return (
      <div className={this.elementClass}>
        {this.props.children}
      </div>
    )
  }
}
