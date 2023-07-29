const mobile={
    name:"Techno",
    price:10600,
    ram:4,
    rom:64,
    color:"green",
    battery:5000,
    releaseDate:"2022-07-28T18:43:40.752Z",
    expireDate:function (name){
        const date = new Date();
        console.log(date, name);
    }
};

const keys = Object.keys(mobile);

const values = Object.values(mobile);

delete mobile.battery;

mobile.camera = 18;


for(key in mobile){
    // console.log(key, "=", mobile[key] );
};

// mobile.expireDate("RAkhat")


const date = new Date();

const year = date.getFullYear()

const month = date.getMonth()

const day = date.getDate()


// console.log(year, "/", month, "/", day);


const  releaseDate="2022-07-28T18:43:40.752Z";

// const releaseDateInDate =new Date(releaseDate);




// switch case
