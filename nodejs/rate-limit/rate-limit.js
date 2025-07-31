const rateLimit = (options) => {
    const { windowMs, maxRequests } = options;

    const ipStore = new Map();

    return (req, res, next) => {
        const ip = req.ip;
        
        const now = Date.now();
        const record = ipStore.get(ip)

        if (!record) {
            // First request
            ipStore.set(ip,  {
                count: 1,
                firstRequestTime: now
            });
            return next()
        }

        const { count, firstRequestTime } = record;

        if (now - firstRequestTime < windowMs) {
            // same window
            if (count >= maxRequests) {
                res.status(429).json({ error: 'Too many requests, please try again later.'})
            } else {
                ipStore.set(ip, {
                    count: count + 1,
                    firstRequestTime
                })
                next()
            }
        } else {
            // window expired, reset count
            ipStore.set(ip, {
                count: 1,
                firstRequestTime: now
            })
            next()
        }
    }
}

module.exports = rateLimit;