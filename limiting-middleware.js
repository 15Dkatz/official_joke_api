const DEFAULT_LIMIT = 100;
const MINUTES = 1000 * 60;
const HOUR = MINUTES * 60;
const DEFAULT_INTERVAL = 1 * HOUR;

class LimitingMiddleware {
  constructor({ limit } = {}) {
    this.ipHitsMap = {};
    this.rate = MINUTES * 15;
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
        this.rate = this.resetInterval/HOUR;
        const error = new Error(
          `Your ip has exceeded the ${DEFAULT_LIMIT} request limit per ${this.rate} minute(s). Try again in in ${this.rate} minute(s)`
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
