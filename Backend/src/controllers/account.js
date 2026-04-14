const Account = require("../models/account");

// create
async function createAccount({ name, type, balance, userId }) {
  const account = await Account.create({
    name,
    type,
    balance,
    userId,
  });

  return account;
}

// get Accounts for user
async function getAccounts(userId) {
  return Account.find({ userId });
}

async function deleteAccount(id, userId) {
  return Account.deleteOne({ _id: id, userId });
}

async function updateAccount(id, userId, data) {
  return Account.findOneAndUpdate({ _id: id, userId }, data, { new: true });
}

module.exports = {
  createAccount,
  getAccounts,
  deleteAccount,
  updateAccount,
};
