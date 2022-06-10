import Layout from '@layout';
import React from 'react';
import { getProducts } from '@core_modules/customCatalog/services/graphql';
import Typography from '@common_typography';
import GridList from '@common_gridlistCustom';
import ProductItem from '@plugin_productitem/index';
import useStyles from '@core_modules/customCatalog/pages/default/styles';
import CampaignBar from '@core_modules/commons/CampaignBar/index';

const CustomCatalog = (props) => {
    const { t } = props;
    const styles = useStyles();

    const { loading, data } = getProducts();

    const config = {
        title: 'Custom Catalog',
        header: false, // available values: "absolute", "relative", false (default)
        bottomNav: 'home',
        pageType: 'home',
    };

    return (
        <Layout {...props} pageConfig={config} className={styles.wrapperCatalog}>
            <CampaignBar text={t('custom:promoText')} />
            <Typography
                align="center"
                letter="uppercase"
                type="bold"
                variant="span"
                className={styles.title}
            >
                {t('custom:title')}
            </Typography>
            {!loading && (
                <GridList
                    data={data.products.items}
                    ItemComponent={ProductItem}
                    className="grid"
                    gridItemProps={{ xs: 6, sm: 4, md: 3 }}
                />
            )}
        </Layout>
    );
};

export default CustomCatalog;
