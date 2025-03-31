function addRecommendation() {
  // Obtener el mensaje y nombre de la recomendación
  let recommendation = document.getElementById("new_recommendation");
  let nameInput = document.getElementById("name_input"); // Capturamos el nombre
  const charLimit = 350;
  const charLimitMessage = document.getElementById("char_limit");

  // Si el nombre está vacío, se asigna "Anonymous"
  let authorName = nameInput.value.trim() === "" ? "Anonymous" : nameInput.value.trim();

  // Si hay un mensaje válido, se crea la recomendación
  if (recommendation.value != null && recommendation.value.trim() != "") {
    console.log("New recommendation added");

    // Crear un nuevo elemento para la recomendación
    var element = document.createElement("div");
    element.setAttribute("class", "recommendation");
    element.innerHTML = `&#8220;${recommendation.value}&#8221;<br><div style="text-align: right; margin-top: 5px;"><em>- ${authorName}</em></div>`;
    
    // Agregar la recomendación a la lista de recomendaciones
    document.getElementById("all_recommendations").appendChild(element); 
    
    // Resetear el cuadro de texto y el nombre
    recommendation.value = "";
    nameInput.value = "";
    charLimitMessage.textContent = `Maximum of ${charLimit} characters. (0/${charLimit})`; // Resetear contador
  }
}

function showPopup(bool) {
  if (bool) {
    document.getElementById('popup').style.visibility = 'visible';
  } else {
    document.getElementById('popup').style.visibility = 'hidden';
  }
}

// Control del límite de caracteres
document.addEventListener("DOMContentLoaded", function() {
    const recommendation = document.getElementById("new_recommendation");
    const charLimit = 350;
    const charLimitMessage = document.getElementById("char_limit");

    recommendation.addEventListener("input", function() {
        if (recommendation.value.length > charLimit) {
            recommendation.value = recommendation.value.substring(0, charLimit);
        }
        charLimitMessage.textContent = `Maximum of ${charLimit} characters. (${recommendation.value.length}/${charLimit})`;
    });
});
