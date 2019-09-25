

export const FetchRandomMeal= ()=>{

   const fetchSingle= fetch("https://www.themealdb.com/api/json/v1/1/random.php")
   .then(response=>response.json())
   .then(response=>response)
   return fetchSingle

}

export const FetchCategories=()=>{
   const AllCategory=fetch('https://www.themealdb.com/api/json/v1/1/categories.php')
   .then(response=>response.json())
   .then(response=>response)
   return AllCategory
}
