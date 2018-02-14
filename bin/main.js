const program = require('commander')
const CustomersFetcher = require('../src/Services/CustomersFetcher')
const CustomersLocator = require('../src/Services/CustomersLocator')
const EarthPosition = require('../src/Models/EarthPosition')
const DEFAULT_FILE_LOCATION = 'https://gist.githubusercontent.com/brianw/19896c50afa89ad4dec3/raw/6c11047887a03483c50017c1d451667fd62a53ca/gistfile1.txt'
const DEFAULT_DISTANCE = 100

program
  .option('-f, --file [fileUrl]', 'customer file url', DEFAULT_FILE_LOCATION)
  .option('-d, --distance [fileUrl]', 'distance', DEFAULT_DISTANCE)
  .parse(process.argv)

CustomersFetcher.getCustomersFromFile(program.file).then(customers => {
  const DUBLIN_OFFICE = new EarthPosition(53.339428, -6.257664)
  const customersToInvite = CustomersLocator.findCustomersCloseTo(customers, DUBLIN_OFFICE, program.distance)
  customersToInvite.forEach(customer => {
    console.log(customer.toString())
  })
}).catch(error => {
  console.log(error)
})
