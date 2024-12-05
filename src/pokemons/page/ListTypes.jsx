import { useEffect, useState } from "react";
import Header from "../../common/component/Header/Header";
import Footer from "../../common/component/Footer/Footer";

const ListTypes = () => {
  const [listTypes, setListTypes] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  const fetchTypePokemons = async () => {
    const pokemonsTypeResponse = await fetch("https://pokebuildapi.fr/api/v1/types");
    const pokemonsTypeResponseData = await pokemonsTypeResponse.json();

    setListTypes(pokemonsTypeResponseData);
    setIsLoading(false);
    setIsError(false);
  };

  useEffect(() => {
    fetchTypePokemons();
  }, []);

  if (isLoading) {
    return <p>Types en cours de chargement</p>;
  }

  if (isError) {
    return <p>Il y a eu une erreur de chargement. Veuillez rafraichir la page</p>;
  }

  return (
    <>
        <Header />
        <section>
          <h2 className="listTypes-title">Liste des types de Pokemons</h2>
          {listTypes?.map((type) => {
            return (
              <article key={type.id}>
                <p>{type.id}</p>
                <img src={type.image} alt={type.id} />
              </article>
            );
          })}
        </section>
        <Footer />
    </>
  );
};

export default ListTypes;