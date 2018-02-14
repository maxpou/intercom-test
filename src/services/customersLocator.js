/**
 *
 * @param {Customer[]} customerList
 * @param {EarthPosition} toPosition
 * @param {number} distance in kilometers
 */
module.exports.findCustomersCloseTo = function (customerList, toPosition, distance) {
  const distanceInMeters = distance * 1000
  return customerList
    .filter(customer => {
      const distanceToPosition = customer.earthPosition.distanceTo(toPosition)
      return distanceToPosition <= distanceInMeters
    })
    .sort((a, b) => a.id - b.id)
}
