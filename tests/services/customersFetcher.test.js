const customersFetcher = require('../../src/services/customersFetcher')

it('customersFetcher should retreive customers through network', async () => {
  expect.assertions(1);

  const result = await customersFetcher.getCustomersFromFile('http://path.to/file.txt')
  console.log('result', result);

  // then customerFileParser.parseText should be called with mocked response
  expect(result).toEqual('Mark');
});
