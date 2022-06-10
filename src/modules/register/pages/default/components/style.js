import makeStyles from '@material-ui/core/styles/makeStyles';

import {
    FlexColumn, CreateMargin, CenterAbsolute, FlexRow,
} from '@theme_mixins';
import {
    GRAY_PRIMARY, RED, GREEN, ORANGE,
} from '@theme_color';

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
        minHeight: '480px',
        '& * .Mui-error, * .Mui-error > span': {
            fontSize: 10,
            fontWeight: 300,
        },
        [theme.breakpoints.up('sm')]: {
            borderRadius: '10px',
            boxShadow: '0 14px 28px rgb(0 0 0 / 25%), 0 10px 10px rgb(0 0 0 / 22%)',
        },
    },
    btnSigin: {
        ...CreateMargin(30, 0, 10, 0),
    },
    footer: {
        ...CreateMargin(40, 0, 0, 0),
        ...FlexColumn,
        width: '100%',
        height: 'auto',
    },

    passwordStrength: {
        background: GRAY_PRIMARY,
        width: '100%',
        height: 30,
        ...FlexRow,
    },
    passwdStrPrgsCtr: {
        background: 'transparent',
        height: 30,
    },
    zero: {
        width: 0,
    },
    per3: {
        width: '30%',
    },
    half: {
        width: '50%',
    },
    per7: {
        width: '75%',
    },
    full: {
        width: '100%',
    },
    passwdStrPrgsBar: {
        height: 30,
        background: GREEN,
        opacity: 0.4,
    },
    per3Bar: {
        width: '30%',
        background: RED,
        opacity: 0.3,
    },
    halfBar: {
        background: ORANGE,
        width: '50%',
        opacity: 0.5,
    },
    txtPasswdStr: {
        position: 'absolute',
        width: '100%',
        ...CenterAbsolute,
    },
    checkWa: {
        ...CreateMargin(0, 0, -10, -10),
    },
    checkTos: {
        ...CreateMargin(0, 0, 0, -10),
    },
    tos: {
        ...FlexRow,
        alignItems: 'center',
        width: '100%',
        justifyContent: 'space-between',
        '& p': {
            width: 80,
        },
    },
    subscribe: {
        marginBottom: 25,
    },
    flexbox: {
        display: 'flex',
        flexWrap: 'wrap',
        '& > div': {
            width: '50%',
            [theme.breakpoints.down('sm')]: {
                width: '100%',
            },
        },
    },
    general: {
        padding: '50px',
        background: 'linear-gradient(to left, whitesmoke, #e7e7e7)',
        '& > *': {
            maxHeight: '60px',
        },
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
