export default async function PostsPage() {
  const response = await fetch(
    "https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=Vodka"
  ); // call the API
  const cocktails = await response.json(); // parse the response as JSON

  return (
    <>
      <div>
        <h1>Vodka Cocktails</h1>
        <ul className="detailOrg">
          {cocktails.drinks.map((cocktail) => (
            <div className="sidebyside" key={cocktail.idDrink}>
              <li>{cocktail.strDrink}</li>
              <img src={cocktail.strDrinkThumb} />
            </div>
          ))}
        </ul>
      </div>
    </>
  );
}
