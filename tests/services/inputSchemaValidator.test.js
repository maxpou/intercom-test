const customersFileParser = require('../../src/services/customersFileParser')
const Customer = require('../../src/models/customer')
const EarthPosition = require('../../src/models/earthPosition')

test('customersFileParser should convert a string to customers objects', () => {
  const line = '{"latitude": "52.2559432", "user_id": 9, "name": "Jack Dempsey", "longitude": "-7.1048927"}'
  const result = customersFileParser.parseText(line)

  const expectedCustomer = new Customer(9, 'Jack Dempsey', new EarthPosition(52.2559432, -7.1048927))

  expect(result).toEqual([expectedCustomer])
})

test('customersFileParser should convert a text to customers objects', () => {
  const lines = `{"latitude": "52.240382", "user_id": 10, "name": "Georgina Gallagher", "longitude": "-6.972413"}
    {"latitude": "51.999447", "user_id": 14, "name": "Helen Cahill", "longitude": "-9.742744"}`

  const result = customersFileParser.parseText(lines)

  const expectedCustomers = [
    new Customer(10, 'Georgina Gallagher', new EarthPosition(52.240382, -6.972413)),
    new Customer(14, 'Helen Cahill', new EarthPosition(51.999447, -9.742744))
  ]

  expect(result).toEqual(expectedCustomers)
})

test('customersFileParser should raise error when input is malformed', () => {
  const erroredLine = '{"latitude": "thisValueIsIncorrect", "user_id": 9, "name": "Jack Dempsey", "longitude": "-7.1048927"}'

  expect(() => {
    customersFileParser.parseText(erroredLine)
  }).toThrowError('child "latitude" fails because ["latitude" must be a number]')
})
