import { request } from "./request";

export function getAnalytics(params = {}) {
  const query = new URLSearchParams(params).toString();
  return request(`/transactions/analytics?${query}`);
}

export function getCategoryAnalytics(params = {}) {
  const query = new URLSearchParams(params).toString();
  return request(`/transactions/analytics/categories?${query}`);
}

export function getTimeAnalytics(params = {}) {
  const query = new URLSearchParams(params).toString();

  return request(`/transactions/analytics/time?${query}`);
}
