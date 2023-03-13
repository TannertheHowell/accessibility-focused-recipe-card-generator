const addIngredientButton = document.getElementById("addIngredientButton");
const ingredientInput = document.getElementById("ingredientInput");
const ingredientList = document.getElementById("ingredientList");

const addInstructionButton = document.getElementById("addInstructionButton");
const instructionInput = document.getElementById("instructionInput");
const instructionList = document.getElementById("instructionList");

const saveButton = document.getElementById("save-button");
const resetButton = document.getElementById("reset-button");

// Making my recipe object
let recipe = {
    title: "",
    ingredients: [],
    instructions: []
};

function addIngredient(){
    // get the ingredients and add it to the ingredient array in the object
    let ingredient = ingredientInput.value;
    recipe.ingredients.push(ingredient);

    // Clear the input field
    ingredientInput.value = "";
    console.log(recipe.ingredients);
    // Show the ingredients
    showIngredients();
}

function removeIngredient(e){
    // Getting the index for the ingredient to be removed 
    const index = parseInt(e.target.getAttribute("element-index"));

    // Cutting out the deleted ingredient 
    recipe.ingredients.splice(index, 1);

    // Showing the current ingredients
    showIngredients();
}

function showIngredients(){
    // clear it before adding to it
    ingredientList.innerHTML="";

    // Add each of the ingredients to the list
    recipe.ingredients.forEach((ingredient, index) => {

    // Making the new elements and including the ingredients in the element
    const ingredientElement = document.createElement("div");
    ingredientElement.textContent = ingredient;
    ingredientElement.setAttribute("element-index", index);
    ingredientElement.addEventListener("click", removeIngredient);

    // Adding the ingredient element to the ingredient list 
    ingredientList.appendChild(ingredientElement);
    });
}

function addInstruction(){
    // get the instruction and add it to the instruction array in the object
    let instruction = instructionInput.value;
    recipe.instructions.push(instruction);

    // Clear the input field
    instructionInput.value = "";
    console.log(recipe.instructions);
    // Show the ingredients
    showInstructions();
}

function removeInstruction(e){
    // Getting the index for the instruction to be removed 
    const index = parseInt(e.target.getAttribute("element-index"));

    // Cutting out the deleted instruction 
    recipe.instructions.splice(index, 1);

    // Showing the current instructions
    showInstructions();
}

function showInstructions(){
    // clear it before adding to it
    instructionList.innerHTML="";

    // Add each of the instruction to the list
    recipe.instructions.forEach((instruction, index) => {

    // Making the new elements and including the instruction in the element
    const instructionElement = document.createElement("div");
    instructionElement.textContent = instruction;
    instructionElement.setAttribute("element-index", index);
    instructionElement.addEventListener("click", removeInstruction);

    // Adding the instruction element to the instruction list 
    instructionList.appendChild(instructionElement);
    });
}

function recipeCompile() {
    // get recipe title from document
    const recipeTitle = document.getElementById("recipeTitle");

    // assign recipe title to title in recipe object
    recipe.title = recipeTitle.value;

    // check title exists
    if(!(recipe.title && recipe.title != "")){
        console.log("ERROR: Missing recipe title");
        return;
    }

    // check for ingredients
    if(recipe.ingredients.length <= 0){
        console.log("ERROR: Missing ingredients");
        return;
    }

    // check for instructions
    if(recipe.instructions.length <= 0){
        console.log("ERROR: Missing instructions");
        return;
    }

    // call writeRecipeToFile()
    writeRecipeToFile(recipe);
    console.log(recipe);
}

function pageReset() {
    window.location.reload();
}

addInstructionButton.addEventListener("click", addInstruction);
addIngredientButton.addEventListener("click", addIngredient);
saveButton.addEventListener("click", recipeCompile);
resetButton.addEventListener("click", pageReset);

ingredientInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      addIngredientButton.click();
    }
  });

  instructionInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      addInstructionButton.click();
    }
  });