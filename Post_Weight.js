/**
 * @description Calculate post weight
 * @param {string} date - Post publish date
 * @returns {string} type
 */
function calcPostWeight (date) {
  const halfLife = 360
  const slope = 0.003
  const base = 0.6
  const minutesPassed = (Date.now() - new Date(date).getTime()) / (1000 * 60)
  const ageDecay = Math.pow(2, -minutesPassed / halfLife)
  const score = base + (1 - base) * ageDecay * Math.exp(-slope * minutesPassed)
  return score
}
