import { Grid, Breadcrumbs, Link, Typography } from '@mui/material'
import React from 'react'

export function SpecificProduct({}){
    const product = localStorage.getItem('product')
    const objectProduct = JSON.parse(objectProduct)
    return( 
        <Grid>
            {/* <Breadcrumbs aria-label="breadcrumb">
            <Link underline="hover" color="inherit" href="/">
                MUI
            </Link>
            <Link
                underline="hover"
                color="inherit"
                href="/material-ui/getting-started/installation/"
            >
                Core
            </Link>
            <Typography color="text.primary">Breadcrumbs</Typography>
            </Breadcrumbs> */}
        </Grid>
    )
}

export default SpecificProduct