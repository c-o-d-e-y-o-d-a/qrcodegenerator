const qrArea = document.getElementsByClassName('qrCode-container')[0];
const getQrButtn = document.getElementsByClassName('subButton')[0];
const inputArea = document.getElementsByClassName('input-box-actual')[0];
const resetBut = document.getElementsByClassName('res')[0];

getQrButtn.onclick = () => {
  if (inputArea.value !== '') {
    qrArea.style.display = 'block';
  } if(inputArea.value == ''){
    alert('Please type the URL');
    
    

    
  }
}

resetBut.onclick=() => {
    qrArea.style.display = 'none';

}
  