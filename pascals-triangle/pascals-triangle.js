//
// This is only a SKELETON file for the 'Pascals Triangle' exercise. It's been provided as a
// convenience to get you started writing code faster.
//
export class Triangle {
    constructor(numRows) {
        this.pascalTriangle = [[1]];
        for (let i = 1; i < numRows; i++) {
            this.pascalTriangle[i] = new Array(i + 1);

            for (let j = 0; j < i + 1; j++) {
                if (j === 0 || j === i) {
                    this.pascalTriangle[i][j] = 1;
                } else {
                    this.pascalTriangle[i][j] =
                        this.pascalTriangle[i - 1][j - 1] +
                        this.pascalTriangle[i - 1][j];
                }
            }
        }
    }

    get lastRow() {
        return this.pascalTriangle[this.pascalTriangle.length - 1];
    }

    get rows() {
        return this.pascalTriangle;
    }
}
