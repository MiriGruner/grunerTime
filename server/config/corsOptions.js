const allowedOrigins = [
    'https://grunertime.onrender.com',
    'http://localhost:3000',
    'http://localhost:5500',
    'http://localhost:8000',
    'https://server-aczd.onrender.com'
]

const corsOptions = {
    origin: (origin, callback) => {
        if (allowedOrigins.indexOf(origin) !== -1 || !origin) {
            callback(null, true)
        } else {
            callback(new Error('Not allowed by CORS'))
        }
    },
    credentials: true,
    optionsSuccessStatus: 200
}

module.exports = corsOptions 
