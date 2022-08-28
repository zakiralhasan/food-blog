// *****************************food image section****************************** 
function displayUsers(search){
    console.log(search)
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`;
    console.log(url)
    fetch(url)
    .then(res => res.json())
    .then(data => getUserData(data.meals))
};
// function for image work section 
function getUserData(data){

    const imageContainerDiv = document.getElementById('image-container-div');
    imageContainerDiv.innerHTML = '';

    for(let singleData of data){

    const creatIamageDiv = document.createElement('div');
    creatIamageDiv.classList.add('col');
    creatIamageDiv.innerHTML = `
    <div class="col">
        <div class="card">
        <img src="${singleData.strMealThumb}" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">Title: ${singleData.strMeal}</h5>
            <p class="card-text">Instruction: ${singleData.strInstructions.slice(0,100)}</p>
            <div class="d-flex justify-content-between">
                <p><span class="fw-semibold">Food ID:</span> ${singleData.idMeal}</p>
                <button onclick="displayUserDetais(${singleData.idMeal})" id="details-btn" class="btn btn-primary">Details</button>
            </div>
        </div>
        </div>
    </div>
    `;
    imageContainerDiv.appendChild(creatIamageDiv);
    };
};

function searchMeal(){
    const mealSearchField = document.getElementById('meal-search-field');
    const mealSearchFieldVlaue = mealSearchField.value;
    mealSearchField.value = '';
    displayUsers(mealSearchFieldVlaue);
}

document.getElementById('search-btn').addEventListener('click', function(){
    searchMeal();
});

// **************************meal details section***************************** 

function displayUserDetais(details){
    console.log(details)
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${details}`;
    console.log(url)
    fetch(url)
    .then(res => res.json())
    .then(data => getMealDetails(data.meals[0]))
};
// function for meal details work 
function getMealDetails(details){
    console.log(details)

    const imageContainerDiv = document.getElementById('image-container-div');
    imageContainerDiv.innerHTML = '';

    const mealDetalilsContainerDiv = document.getElementById('details-container-div');
    mealDetalilsContainerDiv.innerHTML = '';

    const creatMealDetailsDiv = document.createElement('div');
    creatMealDetailsDiv.innerHTML = `

    <div class="">
    <img src="${details.strMealThumb}" class="card-img-top" alt="..." style="width: 18rem; height: auto;>
    <div class="" ">
      <h5 class="card-title">Title: ${details.strMeal}</h5>
      <p><span class="fw-bolder fs-4">Instruction:</span> ${details.strInstructions}</p>
    </div>
  </div>
    `;
    mealDetalilsContainerDiv.appendChild(creatMealDetailsDiv);
};
