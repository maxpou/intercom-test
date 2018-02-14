const customersLocator = require('../../src/services/customersLocator')
const Customer = require('../../src/models/customer')
const EarthPosition = require('../../src/models/earthPosition')

test('findCustomersCloseTo() should return an array of customers close to a given distance (ordered by id)', () => {
  const customerList = [
    new Customer(8, 'Maxence Nantes', new EarthPosition(47.2383171, -1.6302672)),
    new Customer(10, 'Bob Vienna', new EarthPosition(48.2207779, 16.3098489)),
    new Customer(1, 'Georgina Copenhaguen', new EarthPosition(55.6713441, 12.5236131)),
    new Customer(5, 'Lynda Berlin', new EarthPosition(52.50697, 13.2843071)),
    new Customer(4, 'John London', new EarthPosition(51.5287714, -0.2420234))
  ]
  const positionCoparison = new EarthPosition(53.339428, -6.257664) // Intercom office

  const filterList = customersLocator.findCustomersCloseTo(customerList, positionCoparison, 1300)

  expect(filterList).toHaveLength(3)
  expect(filterList).toEqual([
    new Customer(1, 'Georgina Copenhaguen', new EarthPosition(55.6713441, 12.5236131)),
    new Customer(4, 'John London', new EarthPosition(51.5287714, -0.2420234)),
    new Customer(8, 'Maxence Nantes', new EarthPosition(47.2383171, -1.6302672))
  ])
})
