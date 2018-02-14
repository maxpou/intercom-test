const fetch = require('node-fetch')
const customerFileParser = require('./customersFileParser')

// return array of string
const getFileContent = async function (fileUrl) {
  try {
    const response = await fetch(fileUrl)
    const text = await response.text()
    return text
  } catch (error) {
    return Promise.reject(new Error('Problem occur when loading the file'))
  }
}

// url string to array of Customer Object
module.exports.getCustomersFromFile = async function (fileUrl) {
  const filecontent = await getFileContent(fileUrl)
  return customerFileParser.parseText(filecontent)
}
