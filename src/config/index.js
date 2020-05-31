export default require(`./${process.env.NODE_ENV}.json`) || require('./development.json')
