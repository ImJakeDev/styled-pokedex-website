import React from "react";
import { Helmet } from 'react-helmet';

import usePokemon from "hooks/usePokemon";

import Layout from 'components/Layout';
import Container from 'components/Container';
import CardEffect from "../components/cardEffect";

const IndexPage = () => {  
  const { pokemon: allPokemon } = usePokemon();
  
  return (
    <Layout pageName="home">
      <Helmet>
        <title>Home Page</title>
      </Helmet>
      <Container>
        <main>
          <ul className="pokeDex">
            {allPokemon.map((pokemon, index) => <CardEffect key={index} pokemon={pokemon}/>)}
          </ul>
        </main>
      </Container>
    </Layout>
  );
};

export default IndexPage;
