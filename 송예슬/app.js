const person = {
    firstName : 'Song',
    lastName : 'Yeseul',
    age : 22,
    email : 'chonsa0409@naver.com',
    hobbies : ['drawing', 'pictures'],
    address: {
        city : 'Incheon',
        country : 'Korea'
    },
    getBrithYear: function(){
        return 2000;
    }
}

let val;

val = person;
// Get specific value
val = person.firstName;
val = person['lastName'];
val = person.age;
val = person.hobbies[1];
val = person.address.country;
val = person.getBrithYear();

console.log(val);

const people = [
    {name : 'DDU', age: 24},
    {name : 'Seul', age : 22},
    {name : 'Hell', age: 999}
];

for(let i = 0; i < people.length; i++){
    console.log(people[i].name);
}