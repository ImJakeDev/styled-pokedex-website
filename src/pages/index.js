import React from 'react';
import { Helmet } from 'react-helmet';

import { useStaticQuery, graphql } from "gatsby";

import Layout from 'components/Layout';
import Container from 'components/Container';

// import img_gatsby from 'assets/images/gatsby-astronaut.png';

const IndexPage = () => {
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
  
  const allPokemon = data.allPokemon.nodes.map((node) => {
    const { artist, id, imageUrlHiRes, name } = node;

    return {
      artist,
      id,
      imageUrlHiRes,
      name,
    };
  });

  console.log('allPokemon', allPokemon);
  
  
  return (
    <Layout pageName="home">
      <Helmet>
        <title>Home Page</title>
      </Helmet>
      <Container>
        <ul>
          {allPokemon.map((pokemon, index) => {
            const { artist, id, imageUrlHiRes, name } = pokemon;
            return (
              <li key={id}>
                <h3>{name}</h3>
                <img src={imageUrlHiRes} />
                <p>by: {artist}</p>
              </li>
            )
          })}
        </ul>
        {/* <p className="gatsby-astronaut">
          <img src={img_gatsby} alt="Build with Gatsby!" />
        </p>
        <h1>Gatsby Sass Starter</h1>
        <p>
          Welcome to your new Gatsby site.
        </p>
        <p>
          Now go build something great.
        </p>
        <h2>Still Getting Started?</h2>
        <p>
          Run the following in your terminal!
        </p>
        <pre>
          <code>
            gatsby new [directory] https://github.com/colbyfayock/gatsby-starter-sass
          </code>
        </pre> */}
      </Container>
    </Layout>
  );
};

export default IndexPage;
