module.exports = class Customer {
  /**
   * @param {number} id
   * @param {string} name
   * @param {EarthPosition} earthPosition
   */
  constructor (id, name, earthPosition) {
    this.id = id
    this.name = name
    this.earthPosition = earthPosition
  }

  toString () {
    return `${this.name} (id: ${this.id})`
  }
}
