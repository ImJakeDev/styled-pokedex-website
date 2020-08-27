import { useStaticQuery, graphql } from "gatsby";

export default function usePokemon() {
  const data = useStaticQuery(graphql`
    {
      allPokemon {
        nodes {
          artist
          id
          imageUrlHiRes
          name
        }
      }
    }
  `);

  const pokemon = data.allPokemon.nodes.map((node) => {
    const { artist, id, imageUrlHiRes, name } = node;

    return {
      artist,
      id,
      imageUrlHiRes,
      name,
    };
  });

  return {
    pokemon
  }
}