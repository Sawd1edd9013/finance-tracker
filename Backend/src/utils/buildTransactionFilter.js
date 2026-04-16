module.exports = function buildTransactionFilter({
  userId,
  from,
  to,
  type,
  categoryId,
  accountId,
}) {
  const filter = { userId };

  if (type) filter.type = type;
  if (categoryId) filter.categoryId = categoryId;
  if (accountId) filter.accountId = accountId;

  if (from || to) {
    filter.date = {};

    if (from) {
      const fromDate = new Date(from);
      fromDate.setHours(0, 0, 0, 0);
      filter.date.$gte = fromDate;
    }

    if (to) {
      const toDate = new Date(to);
      toDate.setHours(23, 59, 59, 999);
      filter.date.$lte = toDate;
    }
  }

  return filter;
};
