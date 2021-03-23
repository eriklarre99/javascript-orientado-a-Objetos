  
// UI Constructor
export class UI {
    // Add a new movie
    addMovie(movie) {
      const movieList = document.getElementById("movieList");
      const element = document.createElement("tr");
      element.innerHTML = `
                <td> ${movie.name} </td>
                <td> ${movie.description}</td>
                <td class="text-center"> 
                    <i class="fas fa-minus-circle fa-2x text-danger fa-red mx-1 btnEliminar" role="button"></i>
                </td>
      `;
      movieList.appendChild(element);
    }
  
    resetForm() {
      document.getElementById("movie_form").reset();
    }
  
    deleteMovie(element) {
      if (element.target.classList.contains('btnEliminar') ) {
        element.target.parentElement.parentElement.remove();
        this.showMessage("Movie Deleted Succsssfully", "danger");
      }
    }
  
    showMessage(message, cssClass) {
      const btnText = document.createElement("button");
      btnText.className = `btn textAlert btn-${cssClass}`;
      btnText.appendChild(document.createTextNode(message));
  
      // Show in The DOM
      const beforeApp = document.querySelector("#beforeApp");
      const app = document.querySelector("#app");
  
      // Insert Message in the UI
      beforeApp.insertBefore(btnText, app);
  
      // Remove the Message after 3 seconds
      setTimeout(function () {
        document.querySelector(".textAlert").remove();
      }, 1500);
    }
}