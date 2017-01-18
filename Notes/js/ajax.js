
module.exports = {
    get(url, callBack) {
        const request = new XMLHttpRequest();
        request.open('GET', url);
        request.addEventListener('load',() => {
            const { results } = JSON.parse(request.responseText);
            callBack(results);
        });
        request.send();
    },
    post() {

    },
};
