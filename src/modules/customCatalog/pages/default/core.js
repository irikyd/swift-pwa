import Layout from '@layout';
import React from 'react';
import { getProducts } from '@core_modules/customCatalog/services/graphql';
import Typography from '@common_typography';
import GridList from '@common_gridlistCustom';
import ProductItem from '@plugin_productitem/index';
import useStyles from '@core_modules/customCatalog/pages/default/styles';
import CampaignBar from '@core_modules/commons/CampaignBar/index';
import BannerImage from '@core_modules/commons/BannerImage/index';

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
            <div className={styles.grid}>
                <BannerImage 
                    src={'/assets/img/women.webp'}
                    title={t('custom:labelWomen')}
                    href={'/women'}
                    label={t('custom:labelButton')}
                />
                <BannerImage 
                    src={'/assets/img/men.webp'}
                    title={t('custom:labelMen')}
                    href={'/men'}
                    label={t('custom:labelButton')}
                />
                <BannerImage 
                    src={'/assets/img/kids.webp'}
                    title={t('custom:labelGear')}
                    href={'/gear'}
                    label={t('custom:labelButton')}
                />

            </div>
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
