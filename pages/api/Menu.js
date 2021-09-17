import Products from './products.json'

export default function handlerMenu(req, res) {
  res.status(200).json(Products)
}
