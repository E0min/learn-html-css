function add(a,b,callback){
    // sum = a + b;
    // console.log(sum);
    // setTimeout(callback(sum),3000);
    setTimeout(()=>{
        const sum = a+b;
        callback(sum);
    },3000);
}

function orderfood(callback) {
    setTimeout(()=>{
        callback("떡볶이");
    },3000);
}

function cooldownfood(food, callback){
    setTimeout(()=>{
        const coolfood = `식은 ${food}`;
        callback(coolfood);
    },3000);

}

orderfood((food)=>{
    console.log(food);
    cooldownfood(food,(cooldownfood)=>{})
})
