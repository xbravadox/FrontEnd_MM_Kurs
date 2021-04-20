// funkcja.call(OBIEKT, ARGUMENTY)

const movie = {
    title: 'Avangers',
};

const showMovie = function(price, cinema){
    console.log(`Film: "${this.title}", cena biletu: ${price}PLN, kino: ${cinema}`);
};


showMovie(35, 'Wisła')
showMovie.call()
showMovie.call(movie, 55, 'Wisła')

// *******************************************
// KONSTRUKTOR
function Movie(title, year) {
    this.title = title;
    this.year = year;
};

// KONSTRUKTOR
function ActionMovie(title, year) {
    // zamiast w każdym konstruktorze tworzyć:
    // this.title = title;
    // this.year = year;
    // używamy funkcji.call
    Movie.call(this, title, year);
    this.category = 'Akcja';
    console.log(this)
};

// KONSTRUKTOR
function Comedy(title, year) {
    // zamiast w każdym konstruktorze tworzyć:
    // this.title = title;
    // this.year = year;
    // używamy funkcji.call
    Movie.call(this, title, year);
    this.category = 'Komedia';
    console.log(this)
};

// NOWE OBIEKTY
const newMovie = new ActionMovie('Szybcy i wściekli', 2001);
const newMovie2 = new Comedy('Chłopaki nie płaczą', 2000);

