import React from 'react';
import { Helmet } from 'react-helmet';

import usePokemon from 'hooks/usePokemon';

import Layout from 'components/Layout';
import Container from 'components/Container';

const IndexPage = () => {  
  const { pokemon: allPokemon } = usePokemon();
  
  return (
    <Layout pageName="home">
      <Helmet>
        <title>Home Page</title>
      </Helmet>
      <Container>
        <main>
          <ul className="pokedex">
            {allPokemon.map((pokemon, index) => {
              const { artist, id, imageUrlHiRes, name } = pokemon;
              return (
                <li key={id}>
                  <h3>{name}</h3>
                  <img className="card" src={imageUrlHiRes} alt="Pokemon Cards!" />
                  <p>by: {artist}</p>
                </li>
              );
            })}
          </ul>
        </main>
      </Container>
    </Layout>
  );
};

export default IndexPage;
