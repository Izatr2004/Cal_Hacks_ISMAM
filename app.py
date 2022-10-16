import cohere
from cohere.classify import Example
co = cohere.Client('3h7TqtRZGtt5fglj9sNrB3aKbao1oKgUiGogQvHM')
response = co.classify(
  model='fe393497-1d9f-4f5c-bbbb-78372dab979b-ft',
  inputs=[str(input())])
print('Girl is: {}'.format(response.classifications[0].prediction))