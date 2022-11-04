import { articles } from "../../../data"

export default function handler(req, res) {
  const id = req.query.id
  const targetArticle = articles.find((article) => article.id === id)
  if (targetArticle) {
    res.status(200).json(targetArticle)
  } else {
    res
      .status(404)
      .json({ message: `Article with the id of ${id} is not found` })
  }
}
