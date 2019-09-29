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
      console.log("similar",response)
      const myArr=response.meals.map(meal=>{
        
           const {idMeal,strMeal,strMealThumb}=meal
           return new Meal(idMeal,strMeal,strMealThumb)
           })
      return myArr
   })
   return category
}

export const FetchMealById=(id)=>{
   const mealId=fetch(`${API_BASE}/lookup.php?i=${id}`)
   .then(response=>response.json())
   .then(response=>{
      const myArr=response.meals.map(meal=>{
         const {idMeal,strMeal,strMealThumb,strCategory,strArea,strInstructions,strTags,strIngredient1,strIngredient2,strIngredient3,strMeasure1,strMeasure2,strMeasure3}=meal
      
         const mesureArr=[strMeasure1,strMeasure2,strMeasure3]
         const ingrediantArr=[strIngredient1,strIngredient2,strIngredient3]
      return new Meal(idMeal,strMeal,strMealThumb,strCategory,strArea,strInstructions,strTags,ingrediantArr,mesureArr)
   })
   return myArr
})
   return mealId
}
