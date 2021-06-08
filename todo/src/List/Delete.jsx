import React from 'react';
import DefaultButton from '../Button/Default'


class Delete extends  React.Component{
  render(){
    return(
      <>
      <DefaultButton
      submit = "削除"
      />
      </>
    );
  }
}

export default Delete;