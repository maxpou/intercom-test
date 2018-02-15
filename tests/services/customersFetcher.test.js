const customersFetcher = require('../../src/services/customersFetcher')
const customersFileParser = require('../../src/services/customersFileParser')

customersFileParser.parseText = jest.fn()

it('customersFetcher.getCustomersFromFile() should retreive customers through network', async () => {
  expect.assertions(1)
  await customersFetcher.getCustomersFromFile('http://path.to/file.txt')
  expect(customersFileParser.parseText).toBeCalledWith('{"latitude": "52.2559432", "user_id": 9, "name": "Jack Dempsey", "longitude": "-7.1048927"}')
})

it('customersFetcher.getCustomersFromFile() should reject when an error occur', async () => {
  expect.assertions(1)

  await expect(customersFetcher.getCustomersFromFile('http://path.to/errored-file.txt')).rejects.toEqual(
    new Error('Problem occur when loading the file')
  )
})
