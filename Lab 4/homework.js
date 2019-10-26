function solveHomework(){
    var data = [
        {
            age: 99,
            name: "Sergio",
            color: "Grey"
        },
        {
            age: 23,
            name: "John",
            color: "Blue"
        },
        {
            age: 27,
            name: "Alice",
            color: "Pink"
        },
        {
            age: 87,
            name: "Robert",
            color: "Grey"
        },
        {
            age: 23,
            name: "Sheldon",
            color: "Black"
        },
        {
            age: 45,
            name: "Will",
            color: "Green"
        },
        {
            age: 16,
            name: "Kevin",
            color: "Yellow"
        },
        {
            age: 37,
            name: "Liz",
            color: "Pink"
        },
        {
            age: 98,
            name: "Noah",
            color: "White"
        },
        {
            age: 31,
            name: "Alfredo",
            color: "White"
        },
        {
            age: 74,
            name: "Rhenard",
            color: "Green"
        },
        {
            age: 39,
            name: "Myk",
            color: "Blue"
        },
        
        
    ]

    var sumOfAges = 0;

    for (var i = 0; i < data.length; i++){
        var person = data[i];
        
        sumOfAges+=person.age;
        console.log(person.name);
            
    }

    console.log("Answer 3: ", sumOfAges);
}

solveHomework();



// who is the oldest?
// who is the youngest
// Sum of all ages