import React from "react";
import Add from "../List/Add";
import Delete from "../List/Delete";

class Lists extends React.Component {
  constructor(props) {
    super(props);
    //初期値
    // this.state = {
    //   listParam: "",
    // };
    this.state = {
      // items: [],
      text: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.inputTask = this.inputTask.bind(this);
  }

  //task入力値
  handleChange(e) {
    console.log(e.target.value)
    this.setState({ text: e.target.value });
  }

  // submitボタン押下
  inputTask(e) {

  }

  render() {
    console.log("---test--");

    //stateの中のlistParamを扱えるようにする。キーと同じ名前の変数を作る
    const { text } = this.state;
    return (
      <>
        <div>
          {/* 登録欄 */}

          <label>
            やること:
            <input
              type="text"
              name="name"
              value={text}
              autocomplete="off"
              onChange={this.handleChange}
              // value={this.handleChange}
            />
          </label>
        </div>

        {/* Todoリスト表示 */}
        {/* mapで入力値をリストに表示する？？ */}
        <ul>
          <li>基数変換を理解する</li>
        </ul>

        {/* 追加 */}
        <Add inputTask={this.inputTask} />
        {/* 削除 */}
        <Delete />
      </>
    );
  }
}

export default Lists;

//1 入力値をstateに保持(完)
//2 入力値を送る
//3 入力値を表示する
