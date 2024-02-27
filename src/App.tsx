import { Chart, Filter, type Character } from "entities/characters";
import { useEffect, useState } from "react";
import { backend } from "shared/api/backend";

function App() {
  const [characters, setCharacters] = useState<Character[]>([]);
  const [filtredCharacters, setFiltredCharacters] = useState(characters);

  useEffect(() => {
    backend
      .request({
        method: "GET",
        url: "characters",
      })
      .then((response) => {
        setCharacters(response.data);
        setFiltredCharacters(response.data);
      });
  }, []);

  return (
    <>
      <Filter
        characters={characters}
        setFiltredCharacters={setFiltredCharacters}
      />
      <Chart characters={filtredCharacters} />
    </>
  );
}

export default App;
