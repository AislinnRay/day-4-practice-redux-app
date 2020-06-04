module.exports = {
    getPost: (req, res) => {
        const db = req.app.get("db")
        db.get_post()
      .then((results) => res.status(200).send(results))
      .catch((err) => res.status(500).send(err))
    },
    addPost: (req, res) => {

    },
    editPost: (req, res) => {

    },
    deletePost: (req, res) => {

    }
}