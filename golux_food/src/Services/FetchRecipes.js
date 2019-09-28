import { Meal } from "../../src/entites"

const API_BASE="https://www.themealdb.com/api/json/v1/1"

export const FetchRandomMeal= ()=>{

   const fetchSingle= fetch(`${API_BASE}/random.php`)
   .then(response=>response.json())
   .then(response=>response)
   return fetchSingle

}

export const FetchCategories=()=>{
   const AllCategory=fetch(`${API_BASE}/categories.php`)
   .then(response=>response.json())
   .then(response=>response)
   return AllCategory
}
export const FetchSingleCategory=(data)=>{
   const category=fetch(`${API_BASE}/filter.php?c=${data}`)
   .then(response=>response.json())
   .then(response=>{
      const myArr=response.meals.map(meal=>{
        
           const {idMeal,strMeal,strMealThumb}=meal
           return new Meal(idMeal,strMeal,strMealThumb)
           })
      return myArr
   })
   return category
}
