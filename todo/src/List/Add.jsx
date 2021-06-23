import React from "react";
import DefaultButton from "../Button/Default";

class Add extends React.Component {
  render() {
    const { inputTask } = this.props;

    //   clickAddButton() {
    // console.log("---test---")
    //   }

    return (
      <>
        <DefaultButton submit="追加" clickFunk={this.inputTask} />
      </>
    );
  }
}

export default Add;
