let myArray = [1, 'Hi', true, { key: 'okten' }, ['grenn', 'apple'], 5, false, 'world', 10, { a: 1 }];
myArray.forEach(item => {
    console.log(item);});


let book1 = {
    title: 'The Great Gatsby',
    pageCount: 180,
    genre: 'Classic Fiction',
    authors: [
        { name: 'F. Scott Fitzgerald', age: 44 }
    ]
};
let book2 = {
    title: 'The Hitchhiker\'s Guide to the Galaxy',
    pageCount: 224,
    genre: 'Science Fiction',
    authors: [
        { name: 'George Orwell', age: 46 }
    ]
};
let book3 = {
    title: 'To Kill a Mockingbird',
    pageCount: 281,
    genre: 'Classics',
    authors: [
        { name: 'Harper Lee', age: 89 }
    ]
};
console.log(book1);
console.log(book2);
console.log(book3);


let users = [
    { name: 'User1', username: 'user1', password: 'pass1' },
    { name: 'user2', username: 'user2', password: 'pass2' },
    { name: 'user3', username: 'user3', password: 'pass3' },
    { name: 'user4', username: 'user4', password: 'pass4' },
    { name: 'user5', username: 'user5', password: 'pass5' },
    { name: 'user6', username: 'user6', password: 'pass6' },
    { name: 'user7', username: 'user7', password: 'pass7' },
    { name: 'user8', username: 'user8', password: 'pass8' },
    { name: 'user9', username: 'user9', password: 'pass9' },
    { name: 'user10', username: 'user10', password: 'pass10' }
];

users.forEach(user => {
    console.log(user.password);
});

let x=+prompt('X')
    if (x !== 0) {
        console.log('Вірно');
    } else {
        console.log('Невірно');
        promptX(1);
        promptX(0);
        promptX(-3);
    };










