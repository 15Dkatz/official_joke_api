/**
 * Express middleware to enforce limits based on IP. So far, the usage is within my own internal projects.
 * If there is interest, I can improve the usage with the following features:
 *  - Better instantiation (pass in limits through a time-based DSL)
 *  - Improved logging
 *  - And more
 */

/**
 * const LimitingMiddleware = require('./limiting-middleware');
 * app.use(new LimitingMiddleware().limitByIp());
 */

const DEFAULT_LIMIT = 100;
const MINUTES = 1000 * 60;
const HOURS = MINUTES * 60;
const DEFAULT_INTERVAL = MINUTES * 15;

class LimitingMiddleware {
  constructor({ limit } = {}) {
    this.ipHitsMap = {};
    this.limit = limit || DEFAULT_LIMIT;
    this.resetInterval = DEFAULT_INTERVAL;
    this.startResetInterval();
  }

  limitByIp() {
    return (req, res, next) => {
      const requesterIp = req.headers['x-forwarded-for'] || req.connection.remoteAddress || 'unknown';

      console.log('requesterIp', requesterIp);

      if (!this.ipHitsMap[requesterIp]) {
        this.ipHitsMap[requesterIp] = 1;
      } else {
        this.ipHitsMap[requesterIp] = this.ipHitsMap[requesterIp] + 1;
      }

      if (this.ipHitsMap[requesterIp] > this.limit) {
        const rate = this.resetInterval/MINUTES;
        const error = new Error(
          `Your ip has exceeded the ${this.limit} request limit per ${rate} minute(s). Try again in in ${rate} minute(s).`
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
    setInterval(this.resetIpHitsMap, interval);
  }
}

module.exports = LimitingMiddleware;
