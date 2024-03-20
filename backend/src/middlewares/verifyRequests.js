const items = require('../data/items');

class FindItemById {
  static middleware(req, res, next) {
    const itemId = parseInt(req.params.id, 10);
    const itemFiltred = items.find((item) => item.id === itemId);

    if (!itemFiltred) {
      return res.status(404).json({ message: 'Item not found' });
    }

    req.item = itemFiltred;
    return next();
  }
}

module.exports = FindItemById;
