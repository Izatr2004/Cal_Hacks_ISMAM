const cohere = require('cohere-ai');
cohere.init('3h7TqtRZGtt5fglj9sNrB3aKbao1oKgUiGogQvHM');
(async () => {
  const response = await cohere.classify({
    model: 'fe393497-1d9f-4f5c-bbbb-78372dab979b-ft',
    inputs: ["heyyy"]
  });
  console.log(`${JSON.stringify(response.body.classifications[0].prediction)}`);
})();