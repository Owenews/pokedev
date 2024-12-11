import Header from "../../../common/component/Header/Header";
import Footer from "../../../common/component/Footer/Footer";
import PokemonsTeam from "../PokemonsTeam/PokemonsTeam";
import PokemonRandomTypes from "../PokemonRandomTypes/PokemonRandomTypes";
import "./HomePage.scss";

const HomePage = () => { 
    return (
      <>
        <Header />
        <h1>Bienvenue dans mon site Pokedev !</h1>
        <main>
            <PokemonsTeam />

            <PokemonRandomTypes />
        </main>
        <Footer />
      </>  
    );
  };
export default HomePage;