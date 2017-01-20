
const PouchDB = require('pouchdb');
const db = new PouchDB('todos');

let todo = {
    _id: new Date().toISOString(), // important
    title: 'Does it work doe?',
    completed: false,
};

function showTodos() {
    db.allDocs({ include_docs: true, descending: true }, function (err, doc) {
        for (let i = 0; i < doc.rows.length; i++) {
            console.log(doc.rows[i]);
            console.log('TODOS AQUI??');
        }
    });
}

db.changes({
    since: 'now',
    live: true
}).on('change', showTodos);

db.put(todo, function (err, result) {
    console.log('done');
});

// function domMe(stuff) {
//     const child = document.createElement('li');
//     const parent = document.querySelector('ul');

//     const template = Mustache.render(template.innerHTML, {
//         title: todo.title,
//         completed: todo.completed,
//     });

//     item.innerHTML = Mustache.render(
//         document.querySelector('#todo').innerHTML,
//         doc.rows[i];
//     );
//     parent.appendChild(child);
// }


console.log('ESTOY AQUI!');