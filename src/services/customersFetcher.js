const fetch = require('node-fetch')
const customerFileParser = require('./customersFileParser')

/**
 * Return a file content
 * @param {string} fileUrl
 * @returns {Promise}
 */
const getFileContent = async function (fileUrl) {
  try {
    const response = await fetch(fileUrl)
    const text = await response.text()
    return text
  } catch (error) {
    return Promise.reject(new Error('Problem occur when loading the file'))
  }
}

/**
 * Return a file content
 * @param {string} fileUrl
 * @returns {Promise} contain Customer[]
 */
module.exports.getCustomersFromFile = async function (fileUrl) {
  const filecontent = await getFileContent(fileUrl)
  return customerFileParser.parseText(filecontent)
}
