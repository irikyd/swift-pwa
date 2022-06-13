/* eslint-disable max-len */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import { useRouter } from 'next/router';
import { formatPrice } from '@helper_currency';

import Drawer from '@material-ui/core/Drawer';
import Skeleton from '@plugin_minicart/components/skeleton';
import ItemCart from '@plugin_minicart/components/product';
import useStyles from '@plugin_minicart/components/style';

import PaypalButtonView from '@plugin_paypalbutton';

const CloseIcon = () => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" height="24" width="24">
            <path d="M12 21.5Q10.025 21.5 8.288 20.75Q6.55 20 5.275 18.725Q4 17.45 3.25 15.712Q2.5 13.975 2.5 12Q2.5 10.025 3.25 8.287Q4 6.55 5.275 5.275Q6.55 4 8.288 3.25Q10.025 2.5 12 2.5Q13.975 2.5 15.713 3.25Q17.45 4 18.725 5.275Q20 6.55 20.75 8.287Q21.5 10.025 21.5 12Q21.5 13.975 20.75 15.712Q20 17.45 18.725 18.725Q17.45 20 15.713 20.75Q13.975 21.5 12 21.5ZM8.4 16.65 12 13.05 15.6 16.65 16.65 15.6 13.05 12 16.65 8.4 15.6 7.35 12 10.95 8.4 7.35 7.35 8.4 10.95 12 7.35 15.6Z" fill="white"/>
        </svg>
    )
}

const MiniComponent = (props) => {
    const router = useRouter();
    const {
        open, setOpen, count, t, loading, data, deleteCart, updateCart, errorCart, storeConfig,
    } = props;
    const styles = useStyles();
    const disabled = errorCart && errorCart.length > 0;
    const subtotal_including_tax = data?.prices?.subtotal_including_tax?.value || 0;
    const subtotal_including_tax_currency = data?.prices?.subtotal_including_tax?.currency || 'IDR';
    return (
        <Drawer anchor="right" open={open} onClose={setOpen}>
            <div className={styles.container}>
                <div className={styles.mini_top}>
                    <span className={styles.cartLabel}>{t('common:cart:myCart')}</span>
                    <span onClick={setOpen}><CloseIcon /></span>
                </div>
                {loading || !data.items ? <Skeleton /> : <ItemCart data={data.items} t={t} deleteCart={deleteCart} updateCart={updateCart} />}
                {data && data.total_quantity > 0 ? (
                    <div className={styles.mini_bottom}>
                        <div className="sub-total">
                            <span>
                                {t('common:cart:cardTotal')}
                                :
                            </span>
                            <span>{data.prices ? formatPrice(subtotal_including_tax, subtotal_including_tax_currency) : '-'}</span>
                        </div>
                        <div
                            className="edit-cart"
                            onClick={() => {
                                setOpen();
                                router.push('/checkout/cart');
                            }}
                        >
                            {t('common:button:viewandedit')}
                        </div>
                        {!disabled && (
                            <div className="checkout">
                                <div
                                    className="checkout-button"
                                    onClick={() => {
                                        const minimumOrderEnabled = storeConfig.minimum_order_enable;
                                        const grandTotalValue = data.prices.grand_total.value;
                                        const minimumOrderAmount = storeConfig.minimum_order_amount;
                                        if (minimumOrderEnabled && grandTotalValue < minimumOrderAmount) {
                                            const errorMessage = {
                                                variant: 'error',
                                                text: `Unable to place order: Minimum order amount is ${formatPrice(minimumOrderAmount)}`,
                                                open: true,
                                            };
                                            window.toastMessage({
                                                ...errorMessage,
                                            });
                                            setTimeout(() => {
                                                router.push('/checkout/cart');
                                            }, 3000);
                                        } else if (subtotal_including_tax) {
                                            setOpen();
                                            router.push('/checkout');
                                        } else {
                                            window.toastMessage({
                                                open: true,
                                                text: t('common:cart:cartError'),
                                                variant: 'error',
                                            });
                                        }
                                    }}
                                >
                                    {t('common:button:goCheckout')}
                                </div>
                            </div>
                        )}
                        {!disabled && data && (
                            <div className="btn-paypal">
                                <PaypalButtonView
                                    cart={data}
                                    t={t}
                                    storeConfig={storeConfig}
                                />
                            </div>
                        )}
                    </div>
                ) : null}
            </div>
        </Drawer>
    );
};

export default MiniComponent;
