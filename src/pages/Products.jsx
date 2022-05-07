import { useFormik } from 'formik';
import { useState } from 'react';
// material
import { Container, Stack, Typography, TextField } from '@mui/material';
// components
import Page from '../components/Page';
import {
  ProductSort,
  ProductList,
  ProductCartWidget,
  ProductFilterSidebar
} from '../sections/@dashboard/products';
//
import PRODUCTS from '../_mocks_/products';

// ----------------------------------------------------------------------

export default function EcommerceShop() {
  const [openFilter, setOpenFilter] = useState(false);

  const formik = useFormik({
    initialValues: {
      gender: '',
      category: '',
      colors: '',
      priceRange: '',
      rating: ''
    },
    onSubmit: () => {
      setOpenFilter(false);
    }
  });

  const { resetForm, handleSubmit } = formik;

  const handleOpenFilter = () => {
    setOpenFilter(true);
  };

  const handleCloseFilter = () => {
    setOpenFilter(false);
  };

  const handleResetFilter = () => {
    handleSubmit();
    resetForm();
  };

  return (
    <Page title="Imersão | Produtos">
      <Container>
        <Typography variant="h4" sx={{ mb: 5 }} >
          Listagem de Produtos
        </Typography>
        
        <Stack
          direction="row"
          flexWrap="wrap-reverse"
          alignItems="center"
          justifyContent="space-between"
          sx={{ mb: 5 }}
          
        >
          <TextField style={{width: "35%"}} id="outlined-basic" label="Pesquisar.." variant="outlined" />
          <Stack direction="row" spacing={1} flexShrink={0} sx={{ my: 1 }}>
            <ProductFilterSidebar
              formik={formik}
              isOpenFilter={openFilter}
              onResetFilter={handleResetFilter}
              onOpenFilter={handleOpenFilter}
              onCloseFilter={handleCloseFilter}
            />
            
            <ProductSort />
          </Stack>
        </Stack>
        <ProductList products={PRODUCTS} />
        <ProductCartWidget />
      </Container>
    </Page>
  );
}
