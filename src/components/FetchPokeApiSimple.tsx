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

const FetchPokeApiSimple = () => {
  const [data, setData] = useState<PokeApiPrincipal | null>(null);
  const [loading, setLoading] = useState(true);

  const [url, setUrl] = useState<string>("https://pokeapi.co/api/v2/pokemon");

  const handleButton = (estado: boolean) => {
    setLoading(true);
    if (data?.next && estado) {
      return setUrl(data.next);
    }
    if (data?.previous && !estado) {
      return setUrl(data.previous);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
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
  }, [url]);

  return (
    <div>
      <h1>Pokemones</h1>
      {loading ? (
        <p>Obteniendo data</p>
      ) : (
        <div>
          <p>Cantidad: {data?.count}</p>
          {data?.next && (
            <button onClick={() => handleButton(true)}>Siguiente</button>
          )}
          {data?.previous && (
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

export default FetchPokeApiSimple;
