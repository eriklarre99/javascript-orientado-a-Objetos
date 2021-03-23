import { Movie } from "./Movie.js"
import { UI } from "./UI.js";

console.log("script ok");

// DOM Events
document.getElementById("movie_form").addEventListener("submit", e => {
    e.preventDefault();

    const name = document.getElementById("movie").value,
    description = document.getElementById("description").value;

    // Create a new Oject Movie
    const movie = new Movie(name, description);

    // Create a new UI instance
    const ui = new UI();

    // Input User Validation
    if (name === "" || description === "" ) {
        return  ui.showMessage("Ingresa todos los datos", "danger");
    }

    // Save Movie
    ui.addMovie(movie);
    ui.showMessage("Movie Added Successfully", "success");
    ui.resetForm();
});

// delete event
document.getElementById("movieList").addEventListener("click", (e) => {
  const ui = new UI();
  ui.deleteMovie(e);
  e.preventDefault();
});