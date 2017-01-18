
let ajax = require('./ajax')

window.addEventListener('load', () => {
    ajax.get('https://randomuser.me/api/?results=500', function (raw) {
        const peeps = raw.map(person => new Peep(person));
        showPeeps(peeps);
    });
});

function Peep(raw) {
    this.name = `${raw.name.first} ${raw.name.last}`;
    this.location = `${raw.location.city}, ${raw.location.state}`;
    this.image = raw.picture.medium;

    return this;
}

function getPeeps(success) { //call 'success' once we get peeps

}

const showPeeps = peeplist => {
    console.log(peeplist);
    //clear the list of peeps in the DOM
    const parent = document.querySelector('#peeps');
    parent.innerHTML - ''; // remove all child elements
    //re-render all peeps in peeplist
    peeplist.forEach(peep => {
        //create li
        const li = document.createElement('li');
        //render mustache template
        li.innerHTML = Mustache.render(
            document.querySelector('#peep-template').innerHTML, peep
        );
        //add li to parent
        parent.appendChild(li);
    });
};