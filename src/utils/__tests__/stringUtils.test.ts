import {stringUtils} from '@utils';

describe('stringUtils', () => {
  describe('capitalizeFirstLetter', () => {
    it('should capitalize the first letter of each word', () => {
      // escrever meu teste
      stringUtils.capitalizeFirstLetter('Ana maria');
      stringUtils.capitalizeFirstLetter('ANA MARIA');
      stringUtils.capitalizeFirstLetter('MaRIA');

      expect(stringUtils.capitalizeFirstLetter('Ana maria')).toBe('Ana Maria');
      expect(stringUtils.capitalizeFirstLetter('ANA MARIA')).toBe('Ana Maria');
      expect(stringUtils.capitalizeFirstLetter('MaRIA')).toBe('Maria');
      expect(stringUtils.capitalizeFirstLetter('ana maria')).toBe('Ana Maria');
      expect(stringUtils.capitalizeFirstLetter('ana')).toBe('Ana');
      expect(stringUtils.capitalizeFirstLetter('MARIA')).toBe('Maria');
    });

    it('should return an empty string when the input is empty', () => {
      expect(stringUtils.capitalizeFirstLetter('')).toBe('');
    });

    it('should remove leading/trailing spaces', () => {
      expect(stringUtils.capitalizeFirstLetter(' Ana maria')).toBe('Ana Maria');
      expect(stringUtils.capitalizeFirstLetter('Ana maria ')).toBe('Ana Maria');
    });
  });
});
