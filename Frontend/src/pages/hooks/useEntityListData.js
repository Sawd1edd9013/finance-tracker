import { useEffect, useState } from "react";
import { getAccounts, deleteAccount } from "../../api/accounts";
import { getCategories, deleteCategory } from "../../api/categories";

const useListData = ({ loadList, removeItem, withError }) => {
  const [items, setItems] = useState([]);
  const [error, setError] = useState("");

  const reload = async () => {
    const data = await loadList();
    setItems(data.data);
  };

  useEffect(() => {
    const fetchItems = async () => {
      try {
        await reload();
      } catch (e) {
        if (withError) {
          setError(e.message);
        } else {
          console.error(e);
        }
      }
    };

    fetchItems();
  }, []);

  const handleDelete = async (id) => {
    try {
      if (withError) {
        setError("");
      }

      await removeItem(id);
      await reload();
    } catch (e) {
      if (withError) {
        setError(e.message);
      } else {
        console.error(e);
      }
    }
  };

  return {
    items,
    error,
    handleDelete,
  };
};

export const useAccountsData = () => {
  const { items, handleDelete } = useListData({
    loadList: getAccounts,
    removeItem: deleteAccount,
    withError: false,
  });

  return {
    accounts: items,
    handleDelete,
  };
};

export const useCategoriesData = () => {
  const { items, error, handleDelete } = useListData({
    loadList: getCategories,
    removeItem: deleteCategory,
    withError: true,
  });

  return {
    categories: items,
    error,
    handleDelete,
  };
};
