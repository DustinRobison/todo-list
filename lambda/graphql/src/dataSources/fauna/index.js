const faunadb = require('faunadb')
const q = faunadb.query

const getFaunaClient = () => {
    return new faunadb.Client({
        secret: process.env.FAUNADB_SERVER_SECRET,
    })
}

const getDocumentsByIndex = (index) => {
    return getFaunaClient().query(
        q.Map(
            q.Paginate(q.Match(q.Index(index))),
            q.Lambda((x) => q.Get(x))
        )
    )
}

module.exports = {
    q,
    getFaunaClient,
    getDocumentsByIndex,
}
