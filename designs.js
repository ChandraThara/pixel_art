
// When size is submitted by the user, call makeGrid()
const submittn = document.querySelector('input[type="submit"]');
submittn.addEventListener('click', makeGrid);

function makeGrid() {

  const numColumns = document.getElementById("inputHeight").value; //get user entered column value
  const numRows = document.getElementById("inputWeight").value; //get user entered row value

  let tableEle = document.getElementById("pixelCanvas");
  tableEle.innerHTML = ""; //resetting table data if already present
  tableEle.style.border = "2px solid black";

  //generating table rows and columns
  for( let i = 1; i <= numRows; i++){
    const rowEle = document.createElement('tr');
    for( let j = 1; j <= numColumns; j++ ){
      const tdEle = document.createElement('td');
      tdEle.style.width = '30px';
      rowEle.appendChild(tdEle);
      tdEle.addEventListener('click', function(){
        const chosenColor = document.getElementById("colorPicker").value; //get user chosen color value
        tdEle.style.backgroundColor = chosenColor; //setting color to each table cell
      });
    }
    tableEle.appendChild(rowEle);
  }
  document.body.appendChild(tableEle);
}
