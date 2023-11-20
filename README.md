# Products API Endpoint Documentation

## Overview
This API endpoint allows retrieval of product information with specified query parameters.

### Endpoint Path
`/api/v1/products`

## Query Parameters
- **`?sort`**: Sorts the data in ascending (`asc`) or descending (`dsc`) order based on chosen criteria. Use `'-'` for descending order (e.g., `?sort=-price` for descending price sorting).
- **`?fields`**: Retrieves specific fields or data attributes. Use this parameter to specify the desired fields (e.g., `?fields=name,company` for retrieving only 'name' and 'company').
- **`?numericFilters`**: Utilizes operators (`<`, `>`, `<=`, `>=`, `=`) for numeric filtering. Apply these operators for 'price' and 'rating' parameters (e.g., `?numericFilters=price>100` for prices greater than 100).
- **`?page`**: Specifies the page or row from which to retrieve data.
- **`?limit`**: Sets the limit for the number of retrieved data.

## Usage Examples
### Retrieve Products Sorted by Price in Descending Order
