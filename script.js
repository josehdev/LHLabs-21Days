// Initialize 
    const GRID = [
      ["", "", "", "^", "", "", "", "", "", ""],
      ["", "", "v", "", "~", "", "", "", "", ""],
      ["", "v", "", "", "^", "^", "", "", "", ""],
      ["", "", "", "", "^", "^", "", "", "", ""],
      ["", "", "", "", "", "", "", "", "v", ""],
      ["", "", "", "", "", "", "", "", "", ""],
      ["", "", "", "", "", "", "", "", "", ""],
      ["", "^", "~", "~", "", "", "", "^", "", ""],
      ["", "^", "", "~", "~", "", "", "", "", ""],
      ["", "^", "", "", "~", "~", "", "", "", ""],
    ];

// Day 1
function countRows(){
  rows = GRID.length;
  return rows;
}

// Day 2
function countColumns(){
  cols = GRID[0].length;
  return cols;
}

// Day 3
function gridSize(){
  var rows = countRows();
  var cols = countColumns();
  var sizeText = rows + " x " + cols;
  return sizeText;
}

// Day 4
function totalCells(){
  var rows = countRows();
  var cols = countColumns();
  var size = rows * cols;
  return size;
}

// Day 5
// cellString ex.: "A3" or "C4" or "D8" 
function convertColumn(cellString){ 
  var letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
  var colChar = cellString.charAt(0);
  var col = letters.indexOf(colChar);
  return col;
}

// Day 6 // Day 12 enhancements
// cellString ex.: "A3" or "C4" or "D8" 
function lightCell(cellString){ 
  var col = convertColumn(cellString);
  var row = Number(cellString.substring(1))-1;
  if (col < countColumns() && row >= 0 && row < countRows()) {
    var cellValue = GRID[row][col]; 
    return cellValue;
  } else {
    return false
  } 
}

// Day 7
// cellString ex.: "A3" or "C4" or "D8" 
function cellCompareStr(cellString, str){ 
  var cellValue = lightCell(cellString); 
  var result = cellValue == str;
  return result;
}

// cellString ex.: "A3" or "C4" or "D8" 
function isRock(cellString){ 
  var rock = '^';
  return cellCompareStr(cellString, rock);
}

// Day 8
// cellString ex.: "A3" or "C4" or "D8" 
function isCurrent(cellString){ 
  var current = '~';
  return cellCompareStr(cellString, current);
}
  
// Day 9
// cellString ex.: "A3" or "C4" or "D8" 
function isShip(cellString){ 
  var ship = 'v';
  return cellCompareStr(cellString, ship);
}

// Day 10
function lightRow(rowIndex){ 
  var row = GRID[rowIndex - 1];
  return row;
}

// Day 11
function lightColumn(colLetter){ 
  var colIndex = convertColumn(colLetter);
  var rowsCount = countRows();
  var col = [];
  for (i = 0; i < rowsCount; i++) {
    row = lightRow(i+1);
    col.push(row[colIndex]);
  }
  return col;
}

// Day 13
function allRocksJH(){ 
  var letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
  var rowsCount = countRows();
  var colsCount = countColumns();
  var rocks = [];
  for (i = 0; i < rowsCount; i++) {
    for (j = 0; j < rowsCount; j++) {
      var coordinate = letters[j]+(i+1); 	
      if (isRock(coordinate)) {
        rocks.push(coordinate);
      }
    }
  }  
  return rocks;
}
  
function allCurrentsJH(){ 
  var letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
  var rowsCount = countRows();
  var colsCount = countColumns();
  var currents = [];
  for (i = 0; i < rowsCount; i++) {
    for (j = 0; j < rowsCount; j++) {
      var coordinate = letters[j]+(i+1); 	
      if (isCurrent(coordinate)) {
        currents.push(coordinate);
      }
    }
  }  
  return currents;
}  


function columnOfIndex(columnIndex){
	return String.fromCharCode(65 + parseInt(columnIndex));
}

function allCoordinates(){
	let coordinates = [];

  for (let row=1; row<=countRows(); row++){
  	for (let columnIndex=0; columnIndex<countColumns(); columnIndex++){
    		coordinates.push(columnOfIndex(columnIndex) + row);
    }
  }
	return coordinates;
}

function allRocks(){
	return allCoordinates().filter(coordinate => {
  	return isRock(coordinate);
  });
}
