import { useEffect, useState, useCallback } from "react";
import { getAccounts, deleteAccount } from "../../api/accounts";
import { getCategories, deleteCategory } from "../../api/categories";

const useListData = ({ loadList, removeItem, withError }) => {
  const [items, setItems] = useState([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  const reload = useCallback(async () => {
    const data = await loadList();
    setItems(data.data);
  }, [loadList]);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        setIsLoading(true);
        await reload();
      } catch (e) {
        if (withError) {
          setError(e.message);
        } else {
          console.error(e);
        }
      }
      setIsLoading(false);
    };

    fetchItems();
  }, [reload, withError]);

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
    isLoading,
    handleDelete,
  };
};

export const useAccountsData = () => {
  const { items, isLoading, handleDelete } = useListData({
    loadList: getAccounts,
    removeItem: deleteAccount,
    withError: false,
  });

  return {
    accounts: items,
    isLoading,
    handleDelete,
  };
};

export const useCategoriesData = () => {
  const { items, error, isLoading, handleDelete } = useListData({
    loadList: getCategories,
    removeItem: deleteCategory,
    withError: true,
  });

  return {
    categories: items,
    error,
    isLoading,
    handleDelete,
  };
};
