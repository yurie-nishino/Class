import React from 'react';
import DefaultButton from '../Button/Default'

class Add extends  React.Component{
  render(){
    return(
      <>
      <DefaultButton
      submit = "追加"
      clickFunk={()=>this.clickAddButton()}
      />
      </>
    );
  }
}

export default Add;