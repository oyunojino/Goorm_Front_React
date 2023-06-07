import React, { Component } from 'react';
import Swal from 'sweetalert2'
class Sweetalert2Position extends Component {
  saveAlert = (flag, positionflag, e) => {
    Swal.fire({
      position: positionflag,
      icon: 'success',
      title: flag+'되었습니다.',
      showConfirmButton: false,
      timer: 400
    })
  }
  render() {
    return (
      <>
        <h1>sweetalert2</h1>
        <button onClick={e => this.saveAlert('저장', 'bottom-left')}>저장</button>
        <button onClick={e => this.saveAlert('수정', 'center')}>수정</button>
      </>
   )
  }
}
export default Sweetalert2Position;














