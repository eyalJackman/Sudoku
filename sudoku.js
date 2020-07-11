/**clear_table
 * Resets all values in the grid to the empty string
 */
function clear_table() {
    clear = function(col) { col.innerHTML = ''; };
    loop_through_table(clear);
}

/**generate_table
 * Creates a new sudoku puzzle and sets the values in the grid
 */
function generate_table() {
    console.log('Implement me!');
}

/**loop_through_table
 * Loops through all of the cells in a table and applies a function to them
 * 
 * Arguments
 * func - A function to be applied to each element of the sudoku board
 */
function loop_through_table(func) {
    var table = document.getElementById("sudoku-table");
    for (var i = 0, row; row = table.rows[i]; i++) {
       for (var j = 0, col; col = row.cells[j]; j++) {
           func(col);
       }  
    }
}

/**randomize_table
 * Sets every element of the sudoku board to a random integer in [1,9]
 */
function randomize_table() {
    random_number = function(col) { col.innerHTML = Math.ceil(Math.random() * 9); };
    loop_through_table(random_number);
}