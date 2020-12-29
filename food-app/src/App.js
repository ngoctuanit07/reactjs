import React,{useEffect,useState} from 'react';
import Recipe from './Recipes';
import './App.css';

function App() {
    /*const APP_ID ="6931a551";
    const APP_KEY = "76a276296f05d3eb2911d1ac81762619";
    const exampleReq = `https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`;*/
    const APP_ID ="6931a551";
    const APP_KEY = "76a276296f05d3eb2911d1ac81762619";
    const [recipes,setRecipes] = useState([]);
    const [search,setSearch] = useState('');
    const [query,setQuery] = useState('chicken');
    const getSearch = e => {
        e.preventDefault();
        setQuery(search);
        setSearch('');

    };
    const updateSearch = e =>{
            setSearch(e.target.value);
            console.log(search);
    };
    useEffect( async () =>{
        getRecipes();

    },[query]);
    const getRecipes = async () => {
        const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
        const data= await response.json();
       setRecipes(data.hits);


    };
  return (
    <div className="App">
        <form onSubmit={getSearch} className="search-form">
            <input className="search-bar" type="text" value={search} onChange={updateSearch}/>
            <button  className="search-button" type="submit">Search</button>
        </form>
        {recipes.map(recipe => (<Recipe key={recipe.recipe.label} title={recipe.recipe.label} calories={recipe.recipe.calories} image={recipe.recipe.image} ingredients={recipe.recipe.ingredients}/>))};
    </div>
  );
}

export default App;
