// let db = new PouchDB('todos');
// let remoteCouch = false;

const PouchDB = require('pouchdb');
const db = new PouchDB('todos');

/**
* - How to save information
* - How to retrieve information that's been saved
* - 'Change' events (similar to backbone change events)
* - Amazing feature: auto sync with backend (takes care of post and get requests)
*/

// Objects in JS = 'documents' in PouchDB
let todo = {
    _id: new Date().toISOString(), // important
    title: 'test!',
    completed: false,
};

function showTodos() {
  db.allDocs({include_docs: true, descending: true}, function(err, doc) {
      for (let i = 0; i < doc.rows.length; i++) {
          console.log(doc.rows[i]);
      }
  });
}

db.changes({
  since: 'now',
  live: true
}).on('change', showTodos);

/* put() is how you add something */
db.put(todo, function (err, result) {
    console.log('done')

    // /* allDocs() gives you all the docs in the database */
    // db.allDocs({ include_docs: true, descending: true }, function (err, doc) {
    //     console.log(doc.rows);
        
    // });
});

console.log('trying my best')