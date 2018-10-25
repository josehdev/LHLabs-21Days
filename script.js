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
function allRocks(){ 
  var letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
  var rowsCount = countRows();
  var colsCount = countColumns();
  var rocks = [];
  for (i = 0; i < rowsCount; i++) {
    for (j = 0; j < colsCount; j++) {
      var coordinate = letters[j]+(i+1); 	
      if (isRock(coordinate)) {
        rocks.push(coordinate);
      }
    }
  }  
  return rocks;
}
  
function allCurrents(){ 
  var letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
  var rowsCount = countRows();
  var colsCount = countColumns();
  var currents = [];
  for (i = 0; i < rowsCount; i++) {
    for (j = 0; j < colsCount; j++) {
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

function allRocksAlt(){
	return allCoordinates().filter(coordinate => {
  	return isRock(coordinate);
  });
}

// Day 14
function allShips(){ 
  var letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
  var rowsCount = countRows();
  var colsCount = countColumns();
  var ships = [];
  for (i = 0; i < rowsCount; i++) {
    for (j = 0; j < colsCount; j++) {
      var coordinate = letters[j]+(i+1); 	
      if (isShip(coordinate)) {
        ships.push(coordinate);
      }
    }
  }  
  return ships;
}

// Day 15
function firstRock() {
  let rocks = allRocks();
  return rocks[0];
}

// Day 16
function firstCurrent() {
  let currents = allCurrents();
  return currents[0];
}

//Day 17
function shipReport() {
  let result = [];
  let ships = allShips();
  
  if (ships.length > 0) {
    let topWestShip = ships[0];
    let topEastShip = topWestShip;
    for (i = 0; i < ships.length; i++) {
      let col = convertColumn(ships[i]);
      let westCol = convertColumn(topWestShip);
      let eastCol = convertColumn(topEastShip);
      if (col < westCol) {
        topWestShip = ships[i];
      }
      if (col > eastCol) {
        topEastShip = ships[i];
      }
    }
    result.push(topWestShip);
    result.push(topEastShip);
  }
  
  return result;
}  

//Day 18
// cellString ex.: "A3" or "C4" or "D8" 
function howDangerous(cellString){ 
  let result = 0;
  if (isRock(cellString)) {
    result = 100;
  } else if (isCurrent(cellString)) {
      result = 50;
  }
  return result;
}
