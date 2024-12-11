import { useParams } from "react-router-dom";
import Header from "../../../common/component/Header/Header";
import Footer from "../../../common/component/Footer/Footer";
import { Link } from "react-router-dom";
import useGetPokemonsType from "../../hook/useGetPokemonsType";
import "./PokemonsType.scss";

const PokemonsType = () => {
  const { type } = useParams();
  const { pokemonsListType, loading, error } = useGetPokemonsType(type); // Utilisation du hook

  if (loading) {
    return (
      <>
        <Header />
        <section>
          <h2 className="pokemons-type">Chargement des pokémons...</h2>
        </section>
        <Footer />
      </>
    );
  }

  if (error) {
    return (
      <>
        <Header />
        <section>
          <h2 className="pokemons-type">Erreur: {error}</h2>
        </section>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Header />
      <section>
        <h2 className="pokemons-type">Tous les pokémons de type {type}</h2>
        {pokemonsListType.length > 0 ? (
          pokemonsListType.map((pokemon) => (
            <article key={pokemon.id}>
              <p>{pokemon.name}</p>
              <img src={pokemon.image} alt={pokemon.name} />
              <div className="card-buttons">
                <Link to={`/pokemons-details/${pokemon.name}`}>
                  <button className="card-button">Voir les détails</button>
                </Link>
              </div>
            </article>
          ))
        ) : (
          <p>Aucun pokémon trouvé pour ce type.</p>
        )}
      </section>
      <Footer />
    </>
  );
};

export default PokemonsType;
