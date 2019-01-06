const DEFAULT_LIMIT = 100;
const HOUR = 1000 * 60 * 60;
const DEFAULT_INTERVAL = 1 * HOUR;

class LimitingMiddleware {
  constructor({ limit } = {}) {
    this.ipHitsMap = {};
    this.limit = limit || DEFAULT_LIMIT;
    this.resetInterval = DEFAULT_INTERVAL;
    this.startResetInterval();
  }

  limitByIp() {
    return (req, res, next) => {
      const ip = String(req.headers['x-real-ip'] || req.connection.remoteAddress);

      if (!this.ipHitsMap[ip]) {
        this.ipHitsMap[ip] = 1;
      } else {
        this.ipHitsMap[ip] = this.ipHitsMap[ip] + 1;
      }

      if (this.ipHitsMap[ip] > DEFAULT_LIMIT) {
        const rate = this.resetInterval/HOUR;
        const error = new Error(
          `Your ip has exceeded the ${DEFAULT_LIMIT} request limit per ${rate} hour(s). Try again in in ${rate} hour(s)`
        );

        error.statusCode = 429;

        throw error;
      }

      next();
    }
  }

  resetIpHitsMap() {
    console.log('Reset ipHitMap');
    this.ipHitsMap = {};
  }

  startResetInterval(interval = this.resetInterval) {
    setInterval(() => this.resetIpHitsMap(), interval);
  }
}

module.exports = LimitingMiddleware;
