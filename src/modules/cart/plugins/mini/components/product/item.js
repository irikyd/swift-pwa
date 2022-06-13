/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/label-has-associated-control */
import Link from 'next/link';
import Thumbor from '@common_image';
import { formatPrice } from '@helper_currency';
import { useTranslation } from '@i18n';

const CloseIcon = () => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" height="20" width="20">
            <path d="M7.042 13.375 10 10.417 12.958 13.375 13.396 12.938 10.438 10 13.396 7.042 12.958 6.604 10 9.562 7.042 6.604 6.625 7.021 9.583 10 6.625 12.958ZM10 17.146Q8.5 17.146 7.198 16.594Q5.896 16.042 4.927 15.073Q3.958 14.104 3.406 12.802Q2.854 11.5 2.854 10Q2.854 8.5 3.406 7.198Q3.958 5.896 4.927 4.927Q5.896 3.958 7.198 3.406Q8.5 2.854 10 2.854Q11.5 2.854 12.802 3.406Q14.104 3.958 15.073 4.927Q16.042 5.896 16.594 7.198Q17.146 8.5 17.146 10Q17.146 11.5 16.594 12.802Q16.042 14.104 15.073 15.073Q14.104 16.042 12.802 16.594Q11.5 17.146 10 17.146ZM10 10Q10 10 10 10Q10 10 10 10Q10 10 10 10Q10 10 10 10Q10 10 10 10Q10 10 10 10Q10 10 10 10Q10 10 10 10ZM10 16.521Q12.708 16.521 14.625 14.615Q16.542 12.708 16.542 10Q16.542 7.292 14.625 5.375Q12.708 3.458 10 3.458Q7.292 3.458 5.385 5.375Q3.479 7.292 3.479 10Q3.479 12.708 5.385 14.615Q7.292 16.521 10 16.521Z"/>
        </svg>
    )
}

const PlusIcon = () => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" height="20" width="20">
            <path d="M9.708 13.562H10.312V10.312H13.583V9.688H10.312V6.417H9.708V9.688H6.438V10.312H9.708ZM10 17.146Q8.5 17.146 7.198 16.594Q5.896 16.042 4.927 15.073Q3.958 14.104 3.406 12.802Q2.854 11.5 2.854 10Q2.854 8.5 3.406 7.198Q3.958 5.896 4.927 4.927Q5.896 3.958 7.198 3.406Q8.5 2.854 10 2.854Q11.5 2.854 12.802 3.406Q14.104 3.958 15.073 4.927Q16.042 5.896 16.594 7.198Q17.146 8.5 17.146 10Q17.146 11.5 16.594 12.802Q16.042 14.104 15.073 15.073Q14.104 16.042 12.802 16.594Q11.5 17.146 10 17.146ZM10 10Q10 10 10 10Q10 10 10 10Q10 10 10 10Q10 10 10 10Q10 10 10 10Q10 10 10 10Q10 10 10 10Q10 10 10 10ZM10 16.521Q12.708 16.521 14.625 14.615Q16.542 12.708 16.542 10Q16.542 7.292 14.625 5.375Q12.708 3.458 10 3.458Q7.292 3.458 5.385 5.375Q3.479 7.292 3.479 10Q3.479 12.708 5.385 14.615Q7.292 16.521 10 16.521Z"/>
        </svg>
    )
}

const MinIcon = () => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" height="20" width="20">
            <path d="M6.438 10.292H13.583V9.688H6.438ZM10 17.146Q8.521 17.146 7.219 16.583Q5.917 16.021 4.948 15.052Q3.979 14.083 3.417 12.781Q2.854 11.479 2.854 10Q2.854 8.521 3.417 7.219Q3.979 5.917 4.948 4.948Q5.917 3.979 7.219 3.417Q8.521 2.854 10 2.854Q11.479 2.854 12.781 3.417Q14.083 3.979 15.052 4.948Q16.021 5.917 16.583 7.219Q17.146 8.521 17.146 10Q17.146 11.479 16.583 12.781Q16.021 14.083 15.052 15.052Q14.083 16.021 12.781 16.583Q11.479 17.146 10 17.146ZM10 10Q10 10 10 10Q10 10 10 10Q10 10 10 10Q10 10 10 10Q10 10 10 10Q10 10 10 10Q10 10 10 10Q10 10 10 10ZM10 16.521Q12.708 16.521 14.625 14.615Q16.542 12.708 16.542 10Q16.542 7.292 14.625 5.375Q12.708 3.458 10 3.458Q7.292 3.458 5.385 5.375Q3.479 7.292 3.479 10Q3.479 12.708 5.385 14.615Q7.292 16.521 10 16.521Z"/>
        </svg>
    )
}

const Item = (props) => {
    const {
        quantity, prices, product, deleteCart, updateCart, id, configurable_options, bundle_options, customizable_options,
        SimpleMiniCustomizable, ConfigurableMiniCustomizable,
        aw_giftcard_option,
    } = props;
    const { t } = useTranslation(['common']);
    const cartCustomOptions = SimpleMiniCustomizable || ConfigurableMiniCustomizable || customizable_options;

    return (
        <li>
            <div className="product">
                <a className="product-item-photo">
                    <Thumbor className="product-image-photo" src={product.small_image.url} alt={product.small_image.label} width={75} height={92} />
                    {prices?.row_total_including_tax?.value === 0 ? <span>{t('common:title:free')}</span> : null}
                </a>
                <div className="product-item-details">
                    <strong className="product-item-name">
                        <Link href="/[...slug]" as={`/${product.url_key}`}>
                            <a>{product.name}</a>
                        </Link>
                    </strong>
                    {configurable_options && configurable_options.length ? (
                        <div className="product-options">
                            {configurable_options.map((val, idx) => (
                                <div className="option-wrapper" key={idx}>
                                    <strong>{val.option_label}</strong>
                                    {' '}
                                    :
                                    {val.value_label}
                                </div>
                            ))}
                        </div>
                    ) : null}
                    {bundle_options && bundle_options.length ? (
                        <div className="product-options">
                            {bundle_options.map((val, idx) => (
                                <div className="option-wrapper" key={idx}>
                                    <strong>{val.label}</strong>
                                    {' '}
                                    :
                                    <div className="option-wrapper__item">
                                        {val.values.map((item, idt) => (
                                            <div key={idt}>
                                                {item.quantity}
                                                {' '}
                                                x
                                                {item.label}
                                                {' '}
                                                <strong>
                                                    + $
                                                    {item.price}
                                                </strong>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    ) : null}
                    {cartCustomOptions && cartCustomOptions.length ? (
                        <div className="product-options">
                            {cartCustomOptions.map((val, idx) => (
                                <div className="option-wrapper" key={idx}>
                                    <div className="row option-wrapper__item">
                                        <strong>
                                            {val.label}
                                            {' '}
                                            :
                                        </strong>
                                        {val.values.map((item, idt) => (
                                            <p key={idt} className="option-item">
                                                {item.label && item.label !== '' ? item.label : item.value}
                                            </p>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    ) : null}
                    {aw_giftcard_option && aw_giftcard_option.length ? (
                        <div className="product-options">
                            {aw_giftcard_option.map((val, idx) => (
                                <div className="option-wrapper" key={idx}>
                                    <div className="row option-wrapper__item">
                                        <strong>
                                            {val.label}
                                            {' '}
                                            :
                                        </strong>
                                        {val.value}
                                    </div>
                                </div>
                            ))}
                        </div>
                    ) : null}
                </div>
                <div className="product-item-pricing">
                    <div className="details-qty qty">
                        <span className="item" onClick={() => (quantity > 1 ? updateCart(id, quantity - 1) : '')}>
                            <MinIcon />
                        </span>
                        <span className="item-count">{quantity}</span>
                        <span className="item" onClick={() => updateCart(id, quantity + 1)}>
                            <PlusIcon />
                        </span>
                    </div>
                </div>
                <div className="item-price">
                    {formatPrice(prices?.row_total_including_tax?.value || 0, prices?.row_total_including_tax?.currency || 'IDR')}
                </div>

                {product.stock_status === 'OUT_OF_STOCK' && (
                    <div className="oos-info">
                        <span className="oos-info-content">{t('common:cart:oos')}</span>
                    </div>
                )}
                <div
                    className="delete"
                    onClick={() => {
                        deleteCart(id);
                    }}
                >
                    <CloseIcon />
                </div>
            </div>
        </li>
    );
};

export default Item;
