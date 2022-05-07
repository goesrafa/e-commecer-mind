import PropTypes from 'prop-types';
// material
import { Grid } from '@mui/material';
import ShopProductCard from './ProductCard';

// ----------------------------------------------------------------------

ProductList.propTypes = {
  products: PropTypes.array.isRequired
};

export default function ProductList({ products, ...other }) {
  return (
    <Grid container spacing={3} {...other}>
      {products.map((product) => (
        <Grid key={product.id} item xs={12} sm={6} md={3}>
          <a
            href= {`/produto`}
            onClick={() => {
              localStorage.setItem("product", JSON.stringify(product))
            }}
            style = {{textDecoration: 'none',
            fontWeight: 700,
            cursor: 'pointer'
            }}
            >
          <ShopProductCard product={product} />
          </a>
        </Grid>
      ))}
    </Grid>
  );
}
