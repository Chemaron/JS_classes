class Media {
  constructor(title) {
    this._title = title;
    this._isCheckedOut = false;
    this._ratings = [];
  }
  
  get title() {
    return this._title;
  }  
  get ratings() {
    return this._ratings;
  }  
  get isCheckedOut() {
    return this._isCheckedOut;
  } 
  
  set isCheckedOut(value) {
    this._isCheckedOut = value;
  }
  
   toggleCheckOutStatus() {
    this.isCheckedOut = !this.isCheckedOut;
  }
  
   getAverageRating() {
    let sum = this.ratings.reduce((x,y) => x+y, 0 );
    return sum / this.ratings.length;
  }
  
  addRating(value) {
    if (value>=1 && value<=5) {
         this.ratings.push(value);
    } else console.log('It must be between 1 and 5!');
   
  } 
 
}

class Book extends Media {
  constructor(title, author, pages, edition) {
    super(title);
    this._author = author;
    this._pages = pages;
    this._edition = edition;
  }
  
  get author() {
    return this._author;
  }
  
  get pages() {
    return this._pages;
  }  
}

class CD extends Media {
  constructor(title, artist, songs, year) {
    super(title);
    this._artist = artist;
    this._songs = songs;
    this._year = year;
  }
  
  get artist() {
    return this._artist;
  }
  
  get songs() {
    return this._songs;
  }
  
  shuffle() {
    this.songs.forEach((song, i) => {
      let iNew = Math.floor(Math.random()*this.songs.length);
      this.songs.splice(i, 1);
      this.songs.splice(iNew, 0, song);
    });
  }
}

class Movie extends Media {
  constructor(title, director, runTime, movieCast) {
    super(title);
    this._director = director;
    this._runTime = runTime;
    this._movieCast = movieCast;
  }
  
  get director() {
    return this._director;
  }
  
  get runTime() {
    return this._runTime;
  }  
}

const historyOfEverything = new Book('A Short History of Nearly Everything', 'Bill Bryson', 544);
historyOfEverything.toggleCheckOutStatus();
console.log(historyOfEverything.isCheckedOut);
historyOfEverything.addRating(4);
historyOfEverything.addRating(5);
historyOfEverything.addRating(5);
console.log(historyOfEverything.getAverageRating());

const speed = new Movie('Speed', 'Jan de Bont', 116);
speed.toggleCheckOutStatus();
console.log(speed.isCheckedOut);
speed.addRating(10);
speed.addRating(0);
speed.addRating(5);
console.log(speed.getAverageRating());

const albumKey = new CD('Rammstein', 'Rammstein', ['Deutschland', 'Radio', 'Zeig dich', 'Auslander', 'Sex', 'Hellomann'], 2019);
albumKey.toggleCheckOutStatus();
console.log(albumKey.isCheckedOut);
console.log(albumKey.songs);
albumKey.shuffle();
console.log(albumKey.songs);





