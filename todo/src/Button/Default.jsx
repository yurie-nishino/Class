import React from 'react';

class DefaultButton extends React.Component{
  render(){
    return(
      <>
      <input type="submit" 
      value={this.props.submit}

      //追加・削除のイベントを共通化する
      onClick = {this.props.clickFunk}/>
      </>
    );
  }
}

export default DefaultButton;

/**
親コンポーネント・・・ propsを渡す方（props名={}）
子コンポーネント・・・ props(親から受け取ったstateやメソッド)をもらう方
                    (this.props.~)jsx
                    (props.~)js
 */