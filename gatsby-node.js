const fetch = require('node-fetch');

const NODE_TYPE = 'Pokemon';

exports.sourceNodes = async ({ actions, createNodeId, creatContentDigest }) => {
  const { createNode } = actions;

  const response = await fetch(
    "https://api.pokemontcg.io/v1/cards"
  );
  const pokemon = await response.json();
  
  // const { results = [] } = json;

  // const pokemon = await Promise.all(results.map(async result => {
  //   const { url } = result;
  //   const pokeResponse = await fetch(url);
  //   return await pokeResponse.json();
  // }));

  pokemon.forEach((node, index) => {
    creatNode({
      ...node,
      id: creatNodeId(`${NODE_TYPE}-${node.id}`),
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