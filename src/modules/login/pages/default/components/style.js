import makeStyles from '@material-ui/core/styles/makeStyles';

import {
    CreatePadding, FlexColumn, CreateMargin, Centering,
} from '@theme_mixins';
import { PRIMARY } from '@theme_color';

export default makeStyles((theme) => ({

    container: {
        padding: '60px 0',
        [theme.breakpoints.down('sm')]: {
            padding: '0',
        },
    },
    wrapper: {
        position: 'relative',
        overflow: 'hidden',
        maxWidth: '900px',
        margin: '0 auto',
        width: '100%',
        minHeight: '380px',
        '& * .Mui-error, * .Mui-error > span': {
            fontSize: 10,
            fontWeight: 300,
        },
        [theme.breakpoints.up('md')]: {
            borderRadius: '10px',
            boxShadow: '0 14px 28px rgb(0 0 0 / 25%), 0 10px 10px rgb(0 0 0 / 22%)',
        },
    },
    formOtp: {
        [theme.breakpoints.down('xs')]: {
            width: '100vw',
            ...CreatePadding(0, 30, 30, 30),
        },
    },
    desktopContainer: {
        marginBottom: 40,
    },
    btnLogin: {
        ...CreateMargin(16, 0, 10, 0),
    },
    footer: {
        zIndex: 0,
        width: '100%',
        ...CreatePadding(30, 30, 30, 30),
        ...Centering,
        position: 'absolute',
        bottom: 0,
        textAlign: 'center',
    },
    selectLogin: {
        width: '100%',
        ...CreateMargin(0, 0, 15, -15),
    },
    rowCenter: {
        ...FlexColumn,
        width: '100%',
        height: '100%',
        textAlign: 'center',
    },
    header: {
        marginBottom: 20,
        textAlign: 'center',
        fontWeight: '700',
    },
    spanDivider: {
        height: 120,
    },
    spanLabel: {
        marginBottom: 20,
    },
    generalButton: {
        marginTop: 20,
    },
    title: {
        marginBottom: 30,
        marginLeft: 0,
        fontSize: 30,
    },
    button: {
        display: 'flex',
        flexWrap: 'wrap',
        '& > div': {
            paddingLeft: '10px',
            width: 'auto',
            [theme.breakpoints.down('sm')]: {
                width: '100%',
            },
        },
    },
    flexbox: {
        display: 'flex',
        flexWrap: 'wrap',
        height: '100%',
        alignItems: 'center',
        '& > div': {
            width: '50%',
            minHeight: '390px',
            display: 'flex',
            alignItems: 'center',
            [theme.breakpoints.down('sm')]: {
                width: '100%',
            },
        },
    },
    general: {
        padding: '50px',
        background: 'linear-gradient(to left, whitesmoke, #e7e7e7)',
        [theme.breakpoints.down('sm')]: {
            padding: '20px',
        },
    },
    generalText: {
        fontSize: '2em',
        fontWeight: '700',
        margin: '0 0 20px 0',
    },
    contact: {
        padding: '50px',
        '& > *': {
            marginTop: '0',
        },
        [theme.breakpoints.down('sm')]: {
            padding: '60px 20px',
        },
    },
    contactText: {
        fontSize: '2em',
        fontWeight: '700',
        margin: '0 0 20px 0',
        color: 'dimgray',
    },
}));
