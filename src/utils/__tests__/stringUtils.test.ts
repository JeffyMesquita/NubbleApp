import {stringUtils} from '@utils';

test('capitalizeFirstLetter', () => {
  // escrever meu teste
  stringUtils.capitalizeFirstLetter('Ana maria');
  stringUtils.capitalizeFirstLetter('ANA MARIA');
  stringUtils.capitalizeFirstLetter('MaRIA');

  const nome = stringUtils.capitalizeFirstLetter('Ana maria');

  expect(nome).toBe('Ana Maria');
});
