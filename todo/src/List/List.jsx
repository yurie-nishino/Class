import React from 'react';
import Add from '../List/Add'
import Delete from '../List/Delete'

class Lists extends React.Component{
  constructor(props) {
    super(props)
    //初期値
    this.state = {
      listParam:""
    };
  }
  
  clickAddButton(props){
    this.setState = {
      listParam:props,
    }
  }

  render(){
    //stateの中のlistParamを扱えるようにする。キーと同じ名前の変数を作る
    const{listParam} = this.state;
    return(
    <>
      <div>
      {/* 登録欄 */}
        <label>
        やること:
        <input type="text" 
          name="name"
          autocomplete="off"
          input value={listParam}
        />
        </label>     
      </div>

      {/* Todoリスト表示 */}
      

      {/* 追加 */}
      <Add />
      {/* 削除 */}
      <Delete />
    </>
    );
  }
}


export default Lists;