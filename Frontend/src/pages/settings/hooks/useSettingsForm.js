import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateUserSettings } from "../../../api/auth";
import {
  selectCurrentUser,
  selectIsAuthChecked,
} from "../../../store/auth/selectors";
import { fetchCurrentUserThunk } from "../../../store/auth/thunks";

export const useSettingsForm = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectCurrentUser);
  const isAuthChecked = useSelector(selectIsAuthChecked);

  const [values, setValues] = useState({
    login: "",
    password: "",
    repeatPassword: "",
  });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [isSaving, setIsSaving] = useState(false);

  useEffect(() => {
    if (!isAuthChecked) {
      dispatch(fetchCurrentUserThunk());
    }
  }, [dispatch, isAuthChecked]);

  useEffect(() => {
    setValues((prev) => ({
      ...prev,
      login: user?.login || "",
    }));
  }, [user]);

  const setField = (key, value) => {
    setValues((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    if (values.password && values.password !== values.repeatPassword) {
      setError("Пароли не совпадают");
      return;
    }

    try {
      setIsSaving(true);

      await updateUserSettings({
        login: values.login.trim(),
        password: values.password,
      });

      await dispatch(fetchCurrentUserThunk());

      setValues((prev) => ({
        ...prev,
        password: "",
        repeatPassword: "",
      }));
      setSuccess("Настройки успешно сохранены");
    } catch (e) {
      setError(e.message);
    } finally {
      setIsSaving(false);
    }
  };

  return {
    values,
    error,
    success,
    isSaving,
    setField,
    handleSubmit,
  };
};
