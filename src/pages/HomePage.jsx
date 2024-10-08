import NavBar from "../components/NavBar";
import Cards from "../components/Cards";

const HomePage = () => {
  return (
    <>
      <header>
        <NavBar />
      </header>
      <main className="flex justify-center bg-gradient-to-br from-pink-50 to-cyan-50 ">
        <Cards />
      </main>
      <footer></footer>
    </>
  );
};

export default HomePage;
