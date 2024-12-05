import { useEffect, useState } from "react";
import Header from "../../common/component/Header/Header";
import Footer from "../../common/component/Footer/Footer";

const PokemonsListType = () => {
  const [pokemonsListType, setpokemonsListType] = useState([]);


  const fetchPokemonsListType = async () => {
    const pokemonsListTypeResponse = await fetch("https://pokebuildapi.fr/api/v1/pokemon/type/Eau");
    const pokemonsListTypeResponseData = await pokemonsListTypeResponse.json();
    

    setpokemonsListType(pokemonsListTypeResponseData);
  };

  useEffect(() => {
    fetchPokemonsListType();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);


  return (
    <>
        <Header />
        <section>
          <h2 className="pokemons-list-type">Types de Pokemons</h2>
          {pokemonsListType?.map((type) => {
            return (
              <article key={type.id}>
                <p>{type.name}</p>
                <img src={type.image} alt={type.id} />
              </article>
            );
          })}
        </section>
        <Footer />
    </>
  );
};

export default PokemonsListType;