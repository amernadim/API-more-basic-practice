const loadMeals = (search) => {
  fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`)
    .then((res) => res.json())
    .then((data) => displayMeals(data.meals));
};

const displayMeals = meals => {
  const mealsContainer = document.getElementById('meal-container');
  mealsContainer.innerHTML= '';
  meals.forEach(meal => {
    // console.log(meal.idMeal);
    const mealDiv = document.createElement('div')
    mealDiv.classList.add('col');
    mealDiv.innerHTML = `
    <div onclick="loadMealDetails(${meal.idMeal})" class="card">
      <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">${meal.strMeal}</h5>
        <p class="card-text">${meal.strInstructions.slice(0,200)}</p>
      </div>
    </div>
    `;
    mealsContainer.appendChild(mealDiv);
  });
}

const searchFood = () =>{
  // console.log('serarch');
  const searchField = document.getElementById('searchField');
  const searchText = searchField.value;
  loadMeals(searchText);
  searchField.value = '';
  // console.log(searchText);
}
const loadMealDetails = idMeal => {
 const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`
  //  fetch(`www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`)
  fetch(url)
    .then(res => res.json())
    .then(data => displayMealsDetails(data.meals[0]))
}
const displayMealsDetails = meal => {
  const detailContainer = document.getElementById('detail-container');
  detailContainer.innerHTML = '';
  const mealDetailsDiv = document.createElement('div');
  mealDetailsDiv.classList.add('card');
  mealDetailsDiv.innerHTML = `
  <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
  <div class="card-body">
    <p class="card-text">${meal.strInstructions.slice(0,200)}</p>
  </div>
  `;
  detailContainer.appendChild(mealDetailsDiv);
  console.log(meal);
}


loadMeals('')