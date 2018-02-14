const Customer = require('../../src/models/customer')
const EarthPosition = require('../../src/models/earthPosition')

test('Customer.toString() should return id and name', () => {
  const johnDoe = new Customer(42, 'John Doe', new EarthPosition(44, 12))
  expect(johnDoe.toString()).toEqual('John Doe (id: 42)')
})
