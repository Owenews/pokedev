import Header from "../../common/component/Header/Header";
import Footer from "../../common/component/Footer/Footer";
import PokemonsTeam from "./PokemonsTeam";
import PokemonTypes from "./PokemonTypes";

const HomePage = () => { 
    return (
      <>
        <Header />
        <section>
            <PokemonsTeam />
        </section>
        <section>
            <PokemonTypes />
        </section>
        <Footer />
      </>  
    );
  };
export default HomePage;