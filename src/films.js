// import  * as data  from '../src/data.js'


// Exercise 1: Get the array of all directors.

function getAllDirectors(array) {
  return array.map(item => item.director);
}
 
// Exercise 2: Get the films of a certain director
function getMoviesFromDirector(array, nombre){
  const filtrarPeliculas = array.filter( movie => {
      return movie.director === nombre;
  })
  return filtrarPeliculas
  }
  
  
  
// Exercise 3: Calculate the average of the films of a given director.
function moviesAverageOfDirector(array, director) {
  const filtrarMedia = array.filter( movie => {
      return movie.director === director;
})
  let sumaPuntuacion = 0
  for (let index = 0; index < filtrarMedia.length; index++) {
      sumaPuntuacion += filtrarMedia[index].score       
  }
  return Number(sumaPuntuacion/filtrarMedia.length.toFixed(2))
}



// Exercise 4:  Alphabetic order by title 
function orderAlphabetically(array) {
  
  const titulos = array.map(item => item.title).sort().slice(0, 20);
  return titulos
   
}
// Exercise 5: Order by year, ascending short()
function orderByYear(array) {
  const arrayCopy = array.slice();
  const peliculesOrdenadasPorTitulo = arrayCopy.sort((a, b) => {
    if (a.title < b.title) {
        return -1;
    }
    if (a.title > b.title) {
        return 1;
    }
    return 0;
});

const peliculasOrdenadasPorAno = peliculesOrdenadasPorTitulo.sort((a, b) => a.year - b.year);

return peliculasOrdenadasPorAno;
}

// Exercise 6: Calculate the average of the movies in a category
function moviesAverageByCategory(array, category) {
   const peliculasFiltradas = array.filter(item => item.genre.includes(category))
   let sumaPuntuacion = 0
   for (let index = 0; index < peliculasFiltradas.length; index++) {
       sumaPuntuacion += peliculasFiltradas[index].score       
   }
  //  return Number(sumaPuntuacion/peliculasFiltradas.length.toFixed(2))
  return sumaPuntuacion/peliculasFiltradas.length
}

// Exercise 7: Modify the duration of movies to minutes
function hoursToMinutes(array) {
  return array.map(item => {
    const [hours, minutes = 0] = item.duration.split(' ').map(v => parseInt(v));
    const hoursToMinutes = hours * 60;
    const resultado = Object.assign(item, {
      duration: hoursToMinutes + minutes
    })
    return {
      ...item,
      duration: hoursToMinutes + minutes}
  })

}

// Exercise 8: Get the best film of a year
function bestFilmOfYear() {
  
}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    getMoviesFromDirector,
    moviesAverageOfDirector,
    orderAlphabetically,
    orderByYear,
    moviesAverageByCategory,
    hoursToMinutes,
    bestFilmOfYear,
  };
}
