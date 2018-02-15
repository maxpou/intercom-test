/**
 * Get customers close to the given position and distance
 * @param {Customer[]} customerList
 * @param {EarthPosition} toPosition
 * @param {number} distance in kilometers
 * @return {Customer[]} customers close to the given position
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
