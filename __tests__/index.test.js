describe('exports', () => {
  test('exports work correctly', () => {

      const { HttpHeaders } = require('../index');
      expect(HttpHeaders).toBeDefined();

      const { HttpMethods } = require('../index');
      expect(HttpMethods).toBeDefined();
      
  });
});
