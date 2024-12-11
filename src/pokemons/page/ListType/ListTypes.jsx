import Header from "../../../common/component/Header/Header";
import Footer from "../../../common/component/Footer/Footer";
import { Link } from "react-router-dom";
import useGetListTypes from "../../hook/useGetListTypes";
import "./ListTypes.scss";

const ListTypes = () => {
  const { listTypes, isLoading, error } = useGetListTypes();

  return (
    <>
      <Header />
      <main className="types-section">
        <h2 className="types-title">Liste des types de Pokémons</h2>

        {/* Gestion des états de chargement et d'erreur */}
        {isLoading && <p>Chargement des types...</p>}
        {error && <p>{error}</p>}

        <div className="types-container">
          {listTypes?.map((type) => {
            return (
              <div key={type.id} className="type-card">
                <h3 className="type-name">{type.name}</h3>
                <img src={type.image} alt={type.name} className="type-image" />
                <Link to={`/pokemons-type-list/${type.name}`}>
                  <button className="card-button">Voir tous les Pokémon de ce type</button>
                </Link>
              </div>
            );
          })}
        </div>
      </main>
      <Footer />
    </>
  );
};

export default ListTypes;
