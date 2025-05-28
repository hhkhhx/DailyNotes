


function sayHello(obj) {
    console.log("hello");
    console.log(obj);
    console.log("------------------->");
    console.log(obj.name);
    console.log(obj.age);
    obj.ability();
}

sayHello({
    name:"李志强",
    age: 24,

    ability() {
        console.log("run")
    }
})