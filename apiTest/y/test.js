API_KEY = "237a2fb0894f4d4dbc13066d5cca3d1f"

async function fetchRecipe(){
    try{
        const ingredients = document.querySelector('#ingredients').value;
        const ingredientsSplit = ingredients.split(',');
        console.log('Array',ingredientsSplit); 
        
        let fetchs = `https://api.spoonacular.com/recipes/findByIngredients?apiKey=${API_KEY}&ingredients=${ingredientsSplit[0]}`;

        ingredientsSplit.slice(1).forEach(element => {
            fetchs = fetchs.concat(",+",element);
        });

        fetchs = fetchs.concat("&number=2");
        console.log(fetchs)
        let response = await fetch(fetchs);

        if (!response.ok){
            throw new Error("Could not fetch resource");
        }

        const data = await response.json();
        console.log(data);
        let img1 = data[0].image;
        let img2 = data[1].image;
        let t1 = data[0].title;
        let t2 = data[1].title;
        
        let image1 = document.getElementById("img1");
        let image2 = document.getElementById("img2");
        let title1 = document.getElementById("title1");
        let title2 = document.getElementById("title2");

        image1.src=img1;
        image2.src=img2;
        title1.innerHTML = t1;
        title2.innerHTML = t2;
    }
    catch(error){
        console.error(error);
    }
    
}