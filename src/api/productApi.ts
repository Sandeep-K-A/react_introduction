import api from "./axios";
import type { Product } from "../types/product";

export const getProducts = async (): Promise<Product[]> => {
  try {
    const response = await api.get<Product[]>("/products");

    return response.data;
  } catch (error) {
    console.error("Failed to fetch Products:", error);

    throw error;
  }
};
