/*
27) Schedule a class called Movie.

The class will receive an object at the moment of being instantiated with the following data: id of the film in IMDB, title, director, year of release, country or countries of origin, genres and rating in IMBD.
  - All the data of the object are obligatory.
  - Validate that the IMDB id has 9 characters, the first 2 are letters and the
     7 remaining numbers.
  - Validate that the title does not exceed 100 characters.
  - Validate that the director does not exceed 50 characters.
  - Validate that the release year is a 4-digit whole number.
  - Validate that the country or countries are entered in the form of an arrangement.
  - Validate that the genres are entered in the form of an arrangement.
  - Validate that the genres entered are within the genres
     accepted *.
  - Create a static method that returns the accepted genres *.
  - Validate that the grade is a number between 0 and 10 and can be
    one-place decimal.
  - Create a method that returns the entire technical sheet of the film.
  - From an arrangement with the information of 3 movies generates 3
    instances of the class in an automated way and prints the datasheet
    of each movie.

 Accepted genres: Action, Adult, Adventure, Animation, Biography, Comedy, Crime, Documentary ,Drama, Family, Fantasy, Film Noir, Game-Show, History, Horror, Musical, Music, Mystery, News, Reality-TV, Romance, Sci-Fi, Short, Sport, Talk-Show, Thriller, War, Western.
*/
class Movie {
   constructor({ id, title, director, year, country, gender, qualification }) {
      this.id = id;
      this.title = title;
      this.director = director;
      this.year = year;
      this.country = country;
      this.gender = gender;
      this.qualification = qualification;

      this.validateId(this.id);
      this.validateTitle(this.title);
      this.validateDirector(this.director);
      this.validateYear(this.year);
      this.validateCountry(this.country);
      this.validateGender(this.gender);
      this.validateQualification(this.qualification);
   }
   static get getGenders() {
      return ["Action", "Adult", "Adventure", "Animation", "Biography", "Comedy", "Crime", "Documentary", "Drama", "Family", "Fantasy", "Film Noir", "Game-Show", "History", "Horror", "Musical", "Music", "Mystery", "News", "Reality-TV", "Romance", "Sci-Fi", "Short", "Sport", "Talk-Show", "Thriller", "War", "Western"];
   }
   static acceptedGenres() {
      return console.info(`The accepted genres are: ${Movie.getGenders().join(",")}`);
   }

   validateString(property, value) {
      if (!value) return console.warn(`${property} "${value}", is null`);
      if (typeof value !== `string`) return console.error(`${property} "${value}", Need to be a string of text`);

      return true;
   }
   validateLength(property, value, length) {
      if (value.length > length) return console.error(`${property} "${value}", Exceeds the number of characters allowed`);
      return true;
   }
   validateNumber(property, number) {
      if (!number) return console.warn(`${property} "${number}", is null`);
      if (typeof number !== `number`) return console.error(`${property} "${number}", Need to be a number`);

      return true;
   }
   validateArray(property, arr) {
      if (!arr) return console.warn(`${property} "${arr}", is null`);
      if (!(arr instanceof Array)) return console.error(`${property} "${arr}", is not a Array`);
      if (arr.length === 0) return console.warn(`${property} "${arr}", this array dont have elements`);

      for (let i of arr) {
         if (typeof i !== `string`) return console.warn(`The value ${i} is not a string text`);
      }
      return true;
   }

   validateId(id) {
      if (this.validateString("IMDB iD", id)) {
         if (!(/^([a-z]){2}([0-9]{7})$/.test(id))) {
            return console.error(`IMDB id ${id} is not valid, must be have 9 characters, and the two first values need to be letters`);
         }
      }
   }
   validateTitle(title) {
      if (this.validateString("Title", title) && this.validateLength("Title", title, 100));
   }
   validateDirector(director) {
      if (this.validateString("Director", director) && this.validateLength("Director", director, 50));
   }

   validateYear(year) {
      if (this.validateNumber("Release year", year)) {
         if (!(/^([0-9]{4})$/.test(year))) {
            return console.error(`Release year ${year} is not valid, must be have only 4 characters`);
         }
      }
   }
   validateCountry(country) {
      this.validateArray("Country", country);
   }
   validateGender(genders) {
      if (this.validateArray(`Gender`, genders)) {
         for (let i of genders) {
            //console.log(i, Movie.getGenders.includes(i));
            if (!(Movie.getGenders.includes(i))) {
               console.error(`Gender ${i} incorrects`);
               //Movie.acceptedGenres();
            }
         }
      }
   }
   validateQualification(qualification) {
      if (this.validateNumber("Qualification", qualification)) {
         if (qualification < 0 || qualification > 10) {
            return console.error(`Qualification ${qualification} is not valid`);
         }
         else {
            this.qualification = qualification.toFixed(1);
         }
      }
   }
   informationMovie() {
      console.info(`Title: ${this.title}\nDirector: ${this.director}\nYear: ${this.year}\nCountry: ${this.country}\nGenders: ${this.gender.join(",")}\nQualification: ${this.qualification}\nIMDB Id: ${this.id}`);
   }

}
//Movie.acceptedGenres();
const mov = new Movie({
   id: "tt1234567",
   title: "Avengers End Game",
   director: "CxrlosMX",
   year: 2020,
   country: ["Mexico"],
   gender: ["Comedy"],
   qualification: 8.01
});
//mov.informationMovie();

const movies = [
   {
      id: "tt1234567",
      title: "Avengers End Game",
      director: "CxrlosMX",
      year: 2020,
      country: ["Mexico"],
      gender: ["Comedy"],
      qualification: 8.01
   },
   {
      id: "tt1234567",
      title: "Into thw wild",
      director: "CxrlosMX",
      year: 2020,
      country: ["USA"],
      gender: ["Sport"],
      qualification: 8.01
   }
];
movies.forEach(el => new Movie(el).informationMovie());

