/**
 * @description Calculate age from date
 * @param {string} birth - Date of birth string
 * @returns {Number} age
 */
function calculateAge (birth) {
  const birthDate = new Date(birth)
  const currentDate = new Date()
  let age = currentDate.getFullYear() - birthDate.getFullYear()
  if (currentDate.getMonth() < birthDate.getMonth() || (currentDate.getMonth() === birthDate.getMonth() && currentDate.getDate() < birthDate.getDate())) {
    age--
  }
  return age
}

/**
 * @description Calculate account weight
 * @param {Object} data - Account information
 * @returns {Number} score
 */
function calcAccountWeight (data) {
  const accountStatus = data.accountStatus
  let score
  const deviceWeightAdditive = 0.5
  const hasValidDevice = true
  const threshAbsNumFriendsUMass = 500
  const threshFriendsToFollowersRatioUMass = 0.6
  const constantDivisionFactorGt_threshFriendsToFollowersRatioUMass = 5.0
  const restrictedWeightMultiplicative = 0.1
  const age = calculateAge(data.birthday)
  if (accountStatus === 'suspended') {
    score = 0
  } else if (accountStatus === 'verified') {
    score = 100
  } else if (accountStatus === 'unVerified') {
    score = deviceWeightAdditive * 0.1 + (hasValidDevice ? deviceWeightAdditive : 0)
    const normalizedAge = age > 30 ? 1.0 : Math.min(1.0, Math.log(1.0 + age / 15.0))
    score *= normalizedAge
    if (score < 0.01) score = 0.01
    if (data.restricted) score *= restrictedWeightMultiplicative
    score = Math.min(1.0, Math.max(0, score))
    score *= 100
  }
  const friendsToFollowersRatio = (1.0 + data.followings) / (1.0 + data.followers)
  let adjustedMass = 0
  if (data.followings > threshAbsNumFriendsUMass && friendsToFollowersRatio > threshFriendsToFollowersRatioUMass) {
    adjustedMass = score / Math.exp(constantDivisionFactorGt_threshFriendsToFollowersRatioUMass * (friendsToFollowersRatio - threshFriendsToFollowersRatioUMass))
  } else {
    adjustedMass = score
  }
  return adjustedMass
}
