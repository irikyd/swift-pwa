/* eslint-disable consistent-return */
/* eslint-disable no-nested-ternary */
import React, { useEffect, useState } from 'react';
import TextField from '@common_textfield';
import PasswordField from '@common_password';
import Button from '@common_button';
import Typography from '@common_typography';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import Divider from '@material-ui/core/Divider';
import { breakPointsUp } from '@helper_theme';
import classNames from 'classnames';
import firebase from 'firebase/app';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import ReCAPTCHA from 'react-google-recaptcha';
import OtpBlock from '@plugin_otp';
import OtpView from '@plugin_otp/view';
import useStyles from '@core_modules/login/pages/default/components/style';
import { features } from '@config';

const Login = (props) => {
    const {
        formik,
        otpConfig,
        isOtp,
        setIsOtp,
        t,
        setDisabled,
        disabled,
        loading,
        formikOtp,
        toastMessage,
        socialLoginMethodData,
        socialLoginMethodLoading,
        enableRecaptcha,
        sitekey,
        handleChangeCaptcha,
        recaptchaRef,
        query,
        formikPhoneEmail,
        phonePassword,
    } = props;
    const styles = useStyles();
    const desktop = breakPointsUp('sm');

    const signInOptions = [];

    if (features.firebase.config.apiKey !== '' && firebase && firebase.auth && socialLoginMethodData && socialLoginMethodData.length > 0) {
        for (let idx = 0; idx < socialLoginMethodData.length; idx += 1) {
            const code = socialLoginMethodData[idx];
            if (code.match(/google/i) && firebase.auth.GoogleAuthProvider && firebase.auth.GoogleAuthProvider.PROVIDER_ID) {
                signInOptions.push(firebase.auth.GoogleAuthProvider.PROVIDER_ID);
            }

            if (code.match(/facebook/i) && firebase.auth.FacebookAuthProvider && firebase.auth.FacebookAuthProvider.PROVIDER_ID) {
                signInOptions.push(firebase.auth.FacebookAuthProvider.PROVIDER_ID);
            }

            if (code.match(/twitter/i) && firebase.auth.TwitterAuthProvider && firebase.auth.TwitterAuthProvider.PROVIDER_ID) {
                signInOptions.push(firebase.auth.TwitterAuthProvider.PROVIDER_ID);
            }

            if (code.match(/github/i) && firebase.auth.GithubAuthProvider && firebase.auth.GithubAuthProvider.PROVIDER_ID) {
                signInOptions.push(firebase.auth.GithubAuthProvider.PROVIDER_ID);
            }

            if (code.match(/email/i) && firebase.auth.EmailAuthProvider && firebase.auth.EmailAuthProvider.PROVIDER_ID) {
                signInOptions.push(firebase.auth.EmailAuthProvider.PROVIDER_ID);
            }
        }
    }

    const uiConfig = {
        signInFlow: 'popup',
        signInOptions,
        callbacks: {
            signInSuccessWithAuthResult: () => false,
        },
    };

    const [firebaseLoaded, setFirebaseLoaded] = useState(false);

    useEffect(() => {
        if (features.firebase.config.apiKey === '') {
            setFirebaseLoaded(false);
        } else {
            setFirebaseLoaded(true);
        }
    }, [firebaseLoaded]);

    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>
                <div className={styles.flexbox}>
                    <div className={styles.contact}>
                        <div className="row">
                            <div className="col-sm-12">
                                <Typography variant="h1" className={styles.header} letter="uppercase">
                                    {t('login:pageTitle')}
                                </Typography>
                            </div>
                            {(!isOtp || desktop) && phonePassword === false && (
                                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                    <form onSubmit={formik.handleSubmit}>
                                        <div className="row center-xs start-sm">
                                            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                                <TextField
                                                    name="username"
                                                    label="Email"
                                                    placeholder="john.doe@gmail.com"
                                                    value={formik.values.username}
                                                    onChange={formik.handleChange}
                                                    error={!!formik.errors.username}
                                                    errorMessage={formik.errors.username || null}
                                                />
                                            </div>
                                            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                                <PasswordField
                                                    name="password"
                                                    label="Password"
                                                    placeholder="********"
                                                    value={formik.values.password}
                                                    onChange={formik.handleChange}
                                                    error={!!formik.errors.password}
                                                    errorMessage={formik.errors.password || null}
                                                    showVisible
                                                />
                                            </div>
                                            <div className="col-xs-12  col-sm-12">
                                                {enableRecaptcha ? (
                                                    <>
                                                        <ReCAPTCHA sitekey={sitekey} onChange={handleChangeCaptcha} ref={recaptchaRef} />
                                                        {formik.errors.captcha && <Typography color="red">{formik.errors.captcha}</Typography>}
                                                    </>
                                                ) : null}
                                            </div>
                                            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                                <Button
                                                    className={styles.generalButton}
                                                    fullWidth={!desktop}
                                                    type="submit"
                                                    disabled={desktop ? false : disabled}
                                                    align={desktop ? 'left' : 'center'}
                                                >
                                                    <Typography variant="span" type="bold" letter="uppercase" color="white">
                                                        {loading ? 'Loading' : t('login:pageTitle')}
                                                    </Typography>
                                                </Button>
                                            </div>
                                            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                                {
                                                    firebaseLoaded
                                                    && firebase.app()
                                                    && !socialLoginMethodLoading
                                                    && <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />
                                                }
                                            </div>
                                            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                                <Button
                                                    fullWidth={false}
                                                    variant="text"
                                                    href="/customer/account/forgotpassword"
                                                    align={desktop ? 'left' : 'center'}
                                                >
                                                    <Typography variant="span" type="regular" letter="capitalize" decoration="underline">
                                                        {t('login:forgotPassword')}
                                                    </Typography>
                                                </Button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            )}
                            {(!isOtp || desktop) && phonePassword !== false && (
                                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                    <form onSubmit={formikPhoneEmail.handleSubmit}>
                                        <div className="row center-xs start-sm">
                                            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                                <TextField
                                                    name="username"
                                                    // eslint-disable-next-line max-len
                                                    label={otpConfig.data && otpConfig.data.otpConfig.otp_enable[0].enable_otp_login ? t('login:emailLabel') : t('login:phoneEmailLabel')}
                                                    // eslint-disable-next-line max-len
                                                    placeholder={otpConfig.data && otpConfig.data.otpConfig.otp_enable[0].enable_otp_login ? t('login:emailFields') : t('login:phoneEmailFields')}
                                                    value={formikPhoneEmail.values.username}
                                                    onChange={formikPhoneEmail.handleChange}
                                                    error={!!formikPhoneEmail.errors.username}
                                                    errorMessage={formikPhoneEmail.errors.username || null}
                                                />
                                            </div>
                                            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                                <PasswordField
                                                    name="password"
                                                    label="Password"
                                                    placeholder="********"
                                                    value={formikPhoneEmail.values.password}
                                                    onChange={formikPhoneEmail.handleChange}
                                                    error={!!formikPhoneEmail.errors.password}
                                                    errorMessage={formikPhoneEmail.errors.password || null}
                                                    showVisible
                                                />
                                            </div>
                                            <div className="col-xs-12  col-sm-12">
                                                {enableRecaptcha ? (
                                                    <>
                                                        <ReCAPTCHA sitekey={sitekey} onChange={handleChangeCaptcha} ref={recaptchaRef} />
                                                        {formikPhoneEmail.errors.captcha && (
                                                            <Typography color="red">{formikPhoneEmail.errors.captcha}</Typography>
                                                        )}
                                                    </>
                                                ) : null}
                                            </div>
                                            <div className="row">
                                                <div className={styles.button}>
                                                    <Button
                                                        fullWidth={!desktop}
                                                        type="submit"
                                                        disabled={desktop ? false : disabled}
                                                        align={desktop ? 'left' : 'center'}
                                                    >
                                                        <Typography variant="span" type="bold" letter="uppercase" color="white">
                                                            {loading ? 'Loading' : t('login:pageTitle')}
                                                        </Typography>
                                                    </Button>
                                                    <Button
                                                        fullWidth={false}
                                                        variant="text"
                                                        href="/customer/account/forgotpassword"
                                                        align={desktop ? 'left' : 'center'}
                                                    >
                                                        <Typography variant="span" type="regular" letter="capitalize" decoration="underline">
                                                            {t('login:forgotPassword')}
                                                        </Typography>
                                                    </Button>
                                                </div>
                                            </div>
                                            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                                {
                                                    firebaseLoaded
                                                    && firebase.app()
                                                    && !socialLoginMethodLoading
                                                    && <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />
                                                }
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            )}
                        </div>
                    </div>
                    <div className={styles.general}>
                        <div className="row">
                            <div className="col-sm-12">
                                <Typography className={styles.header} variant="h1" letter="uppercase">
                                    {t('login:newCustomer')}
                                </Typography>
                            </div>
                            <div className="col-sm-12">
                                <Typography variant="p">{t('login:registerInformation')}</Typography>
                            </div>
                            <div className="col-sm-12">
                                <Button
                                    className={styles.generalButton}
                                    fullWidth={false}
                                    href={
                                        (query && query.redirect)
                                            ? `/customer/account/create?redirect=${query.redirect}`
                                            : '/customer/account/create'
                                    }
                                    disabled={desktop ? false : disabled}
                                    align={desktop ? 'center' : 'center'}
                                >
                                    <Typography color="white" variant="span" type="bold" letter="uppercase">
                                        {t('login:registerTitle')}
                                    </Typography>
                                </Button>
                            </div>
                        </div>
                    </div>
                    {toastMessage}
                </div>
            </div>
            <style jsx global>
                {`
                    @media screen and (max-width: 768px) {
                                            
                        .firebaseui-card-content {
                            width: 100%;
                            padding: 0px !important;
                        }
                        .firebaseui-card-footer {
                            padding: 0px !important;
                        }
                    }
                    
                    .firebaseui-container {
                        display: flex !important;
                        flex-direaction: column !important;
                        justify-content: flex-start !important;
                        max-width: 100% !important;
                    }

                    .firebaseui-card-content {
                        padding: 0px !important;
                    }
                `}
            </style>
        </div>
    );
};

export default Login;
