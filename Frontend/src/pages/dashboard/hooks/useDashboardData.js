import { useEffect, useMemo, useState } from "react";
import { getTransactions } from "../../../api/transactions";
import { getAccounts } from "../../../api/accounts";
import { getCategories } from "../../../api/categories";
import {
  getAnalytics,
  getTimeAnalytics,
  getCategoryAnalytics,
} from "../../../api/analytics";

export const useDashboardData = () => {
  const [transactions, setTransactions] = useState([]);
  const [accountsMap, setAccountsMap] = useState({});
  const [categoriesMap, setCategoriesMap] = useState({});
  const [analytics, setAnalytics] = useState(null);
  const [accounts, setAccounts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [period, setPeriod] = useState({ from: null, to: null });
  const [timeData, setTimeData] = useState([]);
  const [categoryData, setCategoryData] = useState([]);

  const setThisMonth = () => {
    const now = new Date();
    const from = new Date(now.getFullYear(), now.getMonth(), 1);
    const to = new Date();

    setPeriod({ from, to });
  };

  const setLastMonth = () => {
    const now = new Date();
    const from = new Date(now.getFullYear(), now.getMonth() - 1, 1);
    const to = new Date(now.getFullYear(), now.getMonth(), 0);

    setPeriod({ from, to });
  };

  const setCustomPeriod = (from, to) => {
    setPeriod({ from, to });
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const params = {};

        if (period.from) {
          params.from = period.from.toISOString();
          params.to = period.to.toISOString();
        }

        const [
          transactionsRes,
          accRes,
          catRes,
          analyticsRes,
          timeRes,
          categoryRes,
        ] = await Promise.all([
          getTransactions(params),
          getAccounts(),
          getCategories(),
          getAnalytics(params),
          getTimeAnalytics(params),
          getCategoryAnalytics(params),
        ]);

        setTransactions(transactionsRes.data.slice(0, 5));
        setAnalytics(analyticsRes.data);

        const accMap = {};
        accRes.data.forEach((a) => {
          accMap[a.id] = a.name;
        });

        setAccountsMap(accMap);
        setAccounts(accRes.data);

        const catMap = {};
        catRes.data.forEach((c) => {
          catMap[c.id] = c.name;
        });

        setCategoriesMap(catMap);
        setCategories(catRes.data);
        setTimeData(timeRes.data);

        const formattedCategoryData = categoryRes.data.map((item) => ({
          name: catMap[item.categoryId] || "Без категории",
          value: item.total,
        }));

        setCategoryData(formattedCategoryData);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [period]);

  const limitedAccounts = useMemo(
    () =>
      [...accounts]
        .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
        .slice(0, 5),
    [accounts],
  );

  const limitedCategories = useMemo(
    () =>
      [...categories]
        .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
        .slice(0, 5),
    [categories],
  );

  const totalBalance = useMemo(
    () =>
      accounts.reduce((sum, account) => sum + Number(account.balance || 0), 0),
    [accounts],
  );

  const netResult =
    Number(analytics?.totalIncome || 0) - Number(analytics?.totalExpense || 0);

  return {
    transactions,
    accountsMap,
    categoriesMap,
    analytics,
    timeData,
    categoryData,
    limitedAccounts,
    limitedCategories,
    totalBalance,
    netResult,
    setThisMonth,
    setLastMonth,
    setCustomPeriod,
  };
};
