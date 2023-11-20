# Products API Endpoint Documentation

## Overview
This API endpoint allows retrieval of product information with specified query parameters.

### Endpoint Path
`/api/v1/products`

## Query Parameters
- **`?sort`**: Sorts the data in ascending (`asc`) or descending (`dsc`) order based on chosen criteria. Use `'-'` for descending order (e.g., `?sort=-price` for descending price sorting).
- **`?fields`**: Retrieves specific fields or data attributes. Use this parameter to specify the desired fields (e.g., `?fields=name,company` for retrieving only 'name' and 'company').
- **`?numericFilters`**: Utilizes operators (`<`, `>`, `<=`, `>=`, `=`) for numeric filtering. Apply these operators for 'price' and 'rating' parameters (e.g., `?numericFilters=price>100` for prices greater than 100).
- **`?company`**: Filters products by the specified company (e.g., `?company="ikea"` for products from Ikea).
- **`?name`**: Filters products by the specified name (e.g., `?name="product_name"` for a specific product).
- **`?features`**: Filters products by boolean features. Use `true` or `false` to retrieve products with specific features (e.g., `?features=true` for products with certain features).

- **`?page`**: Specifies the page or row from which to retrieve data.
- **`?limit`**: Sets the limit for the number of retrieved data.

## Usage Examples
### Retrieve Products Sorted by Price in Descending Order
GET /api/v1/products?sort=-price

### Retrieve Specific Fields for Products
GET /api/v1/products?fields=name,company

### Numeric Filtering for Prices Greater Than 30 or 100.
GET /api/v1/products?numericFilters=price>100

### Filtering Products by Company
GET /api/v1/products?name="product_name"

### Pagination with Limit and Page Number
GET /api/v1/products?page=2&limit=10


## Response Format
The response will be in JSON format containing the requested product data based on the provided query parameters.

