import React from 'react'
import ClerksList from './ClerksList';
import SalesDashboard from './SalesDashboard';
import SuppliersList from './SuppliersList';

function Dashboard() {
    return (
      <div>
        <Box
          sx={{
            backgroundColor: "background.default",
            minHeight: "100%",
            py: 3,
          }}
        >
          <Container maxWidth={false}>
            <Grid container spacing={3}>
              <Grid item lg={3} sm={6} xl={3} xs={12}>
                <SalesDashboard />
              </Grid>
              <Grid item lg={3} sm={6} xl={3} xs={12}>
                <SuppliersList />
              </Grid>
              <Grid item lg={3} sm={6} xl={3} xs={12}>
                <ClerksList />
              </Grid>
              <Grid item lg={3} sm={6} xl={3} xs={12}>
                <BestAssisstant sx={{ height: "100%" }} />
              </Grid>
              <Grid item lg={8} md={12} xl={9} xs={12}>
                <Sales />
              </Grid>
              <Grid item lg={4} md={6} xl={3} xs={12}>
                <PopularProducts sx={{ height: "100%" }} />
              </Grid>
              <Grid item lg={4} md={6} xl={3} xs={12}>
                <ProductPriceList sx={{ height: "100%" }} />
              </Grid>
              <Grid item lg={8} md={12} xl={9} xs={12}>
                <LatestOrders />
              </Grid>
            </Grid>
          </Container>
        </Box>
      </div>
    );
}

export default Dashboard
