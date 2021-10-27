const rect = {
    perimeter: (x, y) => 2 * (x + y),
    area: (x, y) => x * y
};

function solveRect(l,w){
    console.log(`Solving for rectangle with dimensions:${l},${w}`);//L and W
    if(l <=0 || w <= 0){
        console.log(`Rectangle must be greater than zerro. values:${l},${w}`);
    } else{
        console.log(`Area of rectangle: ${rect.area(l,w)}`);
        console.log(`Perimeter of rectangle:${rect.perimeter(l,w)}`)
    }
}

//call the function
solveRect(6,2);
solveRect(8,1);
solveRect(0,9);
solveRect(4,-1);