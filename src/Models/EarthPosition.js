const _toRadians = coordinate => coordinate * Math.PI / 180
const EARTH_RADIUS = 6371e3

module.exports = class EarthPosition {
  /**
   * @param {number} latitude
   * @param {number} longitude
   */
  constructor (latitude, longitude) {
    this.latitude = latitude
    this.longitude = longitude
  }

  /**
   *
   * @param {EarthPosition} otherCoordinate
   * @returns {number} distance in meters
   */
  distanceTo (otherCoordinate) {
    const φ1 = _toRadians(this.latitude)
    const λ1 = _toRadians(this.longitude)
    const φ2 = _toRadians(otherCoordinate.latitude)
    const λ2 = _toRadians(otherCoordinate.longitude)
    const Δλ = Math.abs(λ2 - λ1)

    return Math.round(EARTH_RADIUS * Math.acos(
      Math.sin(φ1) * Math.sin(φ2) +
      Math.cos(φ1) * Math.cos(φ2) * Math.cos(Δλ))
    )
  }
}
