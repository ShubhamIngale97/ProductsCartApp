import apiClient from "../../services/apiClient"
import { Product, ProductsResponse } from "./products.type";

export const getProducts = async (
    limit: number = 10,
    skip: number = 0,
): Promise<ProductsResponse> => {
    const response = await apiClient.get<ProductsResponse>(
        '/products',
        {
            params: {
                limit,
                skip,
            },
        },
    );
    return response.data;
};

export const getProductById = async (
    id: number,
): Promise<Product> => {
    const response = await apiClient.get<Product>(
        `/products/${id}`
    )
    return response.data;
}

export const searchProducts = async (
    query: string,
): Promise<ProductsResponse> => {
    const response = await apiClient.get<ProductsResponse>(
        '/product/search',
        {
            params: {
                q: query
            }
        }
    )
    return response.data;
}

export const getProductsByCategory = async (
    category: string,
): Promise<ProductsResponse> => {
    const response = await apiClient.get<ProductsResponse>(
        `/products/category/${encodeURIComponent(category)}`,
    );

    return response.data;
};