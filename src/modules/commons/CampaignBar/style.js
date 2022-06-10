import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    container: {
        height: '52px',
    },
    wrapper: {
        [theme.breakpoints.down('sm')]: {
            paddingLeft: 20,
            paddingRight: 20,
        },
        display: 'flex',
        height: '100%',
    },
    textPromotion: {
        background: '#222222',
        color: '#ffffff',
        padding: '5px 20px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontWeight: '500',
        fontSize: '13px',
        letterSpacing: '.02em',
        textTransform: 'uppercase',
        width: '100%',
    },
}));

export default useStyles;