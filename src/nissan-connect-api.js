class NissanConnectApi {
  /**
   *
   * @param config
   * @param {string} config.baseUrl
   * @param {string} config.initialAppString
   * @param {object} config.endPoints
   * @param {string} config.endPoints.app
   * @param {string} config.endPoints.login
   * @param {string} config.endPoints.batteryStatus
   * @param {string} config.endPoints.batteryStatusResult
   * @param {string} config.endPoints.batteryRemoteCharging
   * @param {string} config.endPoints.batteryStatusRecords
   * @param {string} config.endPoints.acRemote
   * @param {string} config.endPoints.acRemoteResult
   * @param {string} config.endPoints.acRemoteOff
   * @param {string} config.endPoints.acRemoteOffResult
   * @param {string} config.endPoints.acRemoteNew
   * @param {string} config.endPoints.acRemoteUpdate
   * @param {string} config.endPoints.acRemoteCancel
   * @param {string} config.endPoints.acRemoteRecords
   * @param {string} config.endPoints.scheduledACRemote
   * @param {string} config.endPoints.driveAnalysis
   * @param {string} config.endPoints.priceSimulator
   * @param {string} region
   */
  constructor(config, region) {
    this.baseUrl = config.baseUrl;
    this.initialAppString = config.initialAppString;
    this.endPoints = config.endPoints;
    this.region = region;
  }

  async login(username, password) {

  }
}

module.exports = NissanConnectApi;