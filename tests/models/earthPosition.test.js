const EarthPosition = require('../../src/models/earthPosition')
const paris = new EarthPosition(48.8587741, 2.2069766)
const newYorkCity = new EarthPosition(40.6971494, -74.2598678)
const dublinOffice = new EarthPosition(53.3393, -6.2576841)

test('EarthPosition.distanceTo() should distance between current EarthPosition and another one', () => {
  expect(paris.distanceTo(newYorkCity)).toBe(5845561)

  // same position
  expect(paris.distanceTo(paris)).toBe(0)

  // distance between a and b equal to b and a
  const distanceParisDublinOffice = paris.distanceTo(dublinOffice)
  const distanceDublinOfficeParis = paris.distanceTo(dublinOffice)
  expect(distanceParisDublinOffice).toBe(distanceDublinOfficeParis)
})
