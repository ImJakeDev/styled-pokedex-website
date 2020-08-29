const fetch = require('node-fetch');

const NODE_TYPE = 'Pokemon';

exports.sourceNodes = async ({ actions, createNodeId, createContentDigest }) => {
  const { createNode } = actions;

  // --------------------

  const response = await fetch(
    "https://api.pokemontcg.io/v1/cards"
  );

  const { cards = [] } = await response.json();

  // const { cards = [] } = json;

  // const pokemon = await Promise.all(
  //   cards.map(async (result) => {
  //     const pokeResponse = await result;
  //     return await pokeResponse.json();;
  //   })
  // );

  // ------------------

  // const response = await fetch(
  //   "https://pokeapi.co/api/v2/pokemon/"
  // );

  // const json = await response.json();
  
  // const { results = [] } = json;

  // const pokemon = await Promise.all(
  //   results.map(async (result) => {
  //     const { url } = result;
  //     const pokeResponse = await fetch(url);
  //     return await pokeResponse.json();
  //   })
  // );

  // ---------------------

  cards.forEach((node, index) => {
    createNode({
      ...node,
      id: createNodeId(`${NODE_TYPE}-${node.id}`),
      parent: null,
      children: [],
      internal: {
        type: NODE_TYPE,
        content: JSON.stringify(node),
        contentDigest: createContentDigest(node)
      }
    })
  })
  
}