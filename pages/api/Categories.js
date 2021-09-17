import Categories from './categories.json'

export default function handlerCategories(req, res) {
    res.status(200).json(Categories)
}