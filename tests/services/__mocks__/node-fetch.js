const goodResponse = {
  text: () => Promise.resolve('{"latitude": "52.2559432", "user_id": 9, "name": "Jack Dempsey", "longitude": "-7.1048927"}')
}

const fetch = function (url) {
  switch (url) {
    case 'http://path.to/file.txt': return Promise.resolve(goodResponse)
    case 'http://path.to/errored-file.txt': return Promise.reject(new Error('HTTP error'))
    default: return Promise.reject(new Error(`Unhandled url: ${url}`))
  }
}

module.exports = fetch
