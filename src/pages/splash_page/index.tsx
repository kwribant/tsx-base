import * as React from "react";
import { Message } from "../../components/message";

export interface SplashPageProps extends React.Props<SplashPage> {}

import "./index.css";

export class SplashPage extends React.Component<SplashPageProps, {}> {
  private elementClass = 'splash-page';

  public render() {
    return (
      <div className={this.elementClass}>
        <Message>This is the splash page</Message>

        <Message>This is the splash page</Message>

        <Message>This is the splash page</Message>
      </div>
    )
  }
}
