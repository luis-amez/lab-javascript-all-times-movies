/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes 
function turnHoursToMinutes(movies) {
  var moviesWithMinutes = movies.map(function(movie) {
    var hours = 0;
    var hoursToMinutes = 0;
    var minutes = 0;

    var indexHour = movie.duration.indexOf('h');
    if(indexHour !== -1) {
      hours = parseInt(movie.duration.substring(0, indexHour));
      hoursToMinutes = hours * 60;
    }

    var indexMinute = movie.duration.indexOf('min');
    if(indexMinute !== -1) {
      if(indexHour !== -1) {
        minutes = parseInt(movie.duration.substring(indexHour + 1, indexMinute));
      } else {
        minutes = parseInt(movie.duration.substring(0, indexMinute));
      }
    }

    var movieWithMinutes = Object.assign({}, movie, { duration: hoursToMinutes + minutes });
    return movieWithMinutes;
  });

  return moviesWithMinutes;
}

// Get the average of all rates with 2 decimals 


// Get the average of Drama Movies


// Order by time duration, in growing order


// How many movies did STEVEN SPIELBERG


// Order by title and print the first 20 titles


// Best yearly rate average
