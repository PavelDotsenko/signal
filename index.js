const { generateSignalImage } = require('./chartGenerator');

const robot = {
    "id": "37dd7d07-99f3-471c-997d-cae0cbe188eb",
    "name": "PAR-1 Bitfinex XLM/USD 8h",
    "exchange": "bitfinex",
    "asset": "XLM",
    "currency": "USD",
    "timeframe": 480
};

const signal = {
    "code": "p_15",
    "price": 0.057316,
    "action": "closeShort",
    "orderType": "stop",
    "timestamp": "2019-12-16T08:00:01.422Z",
    "candleTimestamp": "2019-12-16T00:00:00.000Z"
};

generateSignalImage(robot, signal);