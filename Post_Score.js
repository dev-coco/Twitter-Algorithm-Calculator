/**
 * @description Post Score Calculate
 * @param {Object} data - Post information
 * @returns {number} score
 */
function postScore (data) {
  const likeScore = 0.5 * data.like >= 100 ? 100 : 0.5 * data.like
  const retweetScore = 1 * data.retweet >= 100 ? 100 : 1 * data.retweet
  const replyScore = 13.5 * data.reply >= 100 ? 100 : 13.5 * data.reply
  const profileVisitsScore = 12 * data.profileVisits >= 1000000 ? 1000000 : 12 * data.profileVisits
  const videoViewsScore = 0.005 * data.videoViews >= 100 ? 100 : 0.005 * data.videoViews
  return likeScore + retweetScore + replyScore + profileVisitsScore + videoViewsScore
}
