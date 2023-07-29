let myComputer ={
    brand: 'acer',
    price: 27000,
    color: 'silver',
    processor:'11'

}
// console.log(myComputer);


let myComputers ={
    brand: 'acer',
    price: 27000,
    color: 'silver  gfhfgh fdghfgh',
    processor:'11'

}

const keys = Object.keys(myComputer);

const values = Object.values(myComputer)


for(property in myComputer){
    console.log(property, myComputer[property]);
}







// console.log(myComputers);
// myComputers.processor='i71'
// console.log(myComputers);


