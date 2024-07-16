
export async function fetchRecipes (filter){
    const {query, limit} = filter;

    const url = `https://api.edamam.com/search?q=${query}&app_id=${import.meta.env.App_ID}&app_key=${import.meta.env.VIT_APP_KEY}&from=0&to=${limit}&`;


    const response = await fetch(url)

    const data = await response.json();

    return data?.hits;
}

export async function fetchRecipe(recipeName){
const url = `https://api.edamam.com/search?r=http://www.edamam.com/ontologies/edamam.owl%23${recipeName}&app_id=${import.meta.env.App_ID}&app_key=${import.meta.env.VIT_APP_KEY}`

const response = await fetch(url)

const data = await response.json();

return data[0];
}