import { useEffect, useState } from "react";

interface PokeApiPrincipal {
  count: number;
  next: string | null;
  previous: string | null;
  results: PokeApiAll[];
}
interface PokeApiAll {
  name: string;
  url: string;
}

const FetchPokeApi = () => {
  const [data, setData] = useState<PokeApiPrincipal | null>(null);
  const [loading, setLoading] = useState(true);

  const [next, setNext] = useState<number>(0);

  const handleButton = (parametro: boolean) => {
    setLoading(true);
    if (parametro) {
      setNext((value) => value + 20);
    } else if (next > 20) {
      setNext((value) => value - 20);
    } else {
      setNext(0);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      const urlFinal = `https://pokeapi.co/api/v2/pokemon?offset=${next}&limit=20`;
      try {
        const response = await fetch(urlFinal);
        if (!response.ok) {
          throw new Error("Error en la peticion");
        }
        const dataResponse = await response.json();
        setData(dataResponse);
      } catch (error) {
        console.log("Error: ", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [next]);

  return (
    <div>
      <h1>Pokemones</h1>
      {loading ? (
        <p>Obteniendo data</p>
      ) : (
        <div>
          <p>Cantidad: {data?.count}</p>
          <button onClick={() => handleButton(true)}>Siguiente</button>
          {next > 0 && (
            <button onClick={() => handleButton(false)}>Anterior</button>
          )}
          {data?.results.map((item: PokeApiAll) => (
            <p key={item.name}>{item.name}</p>
          ))}
        </div>
      )}
    </div>
  );
};

export default FetchPokeApi;
