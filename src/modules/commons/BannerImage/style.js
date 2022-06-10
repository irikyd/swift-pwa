import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    container: {
        position: 'relative',
        overflow: 'hidden',
    },
    content: {
        padding: '0 30px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        position: 'absolute',
        zIndex: '1',
        height: '100%',
        width: '100%',
        top: 0,
        left: 0,
        background: '#22222285',
    },
    images: {
        width: '100%',
        height: '0',
        paddingTop: '100%',
    },
    title: {
        flex: '0 0 auto',
        fontSize: '44px',
        lineHeight: '1.2',
        marginTop: 'auto',
        marginBottom: '-114px',
        color: '#ffffff',
        textAlign: 'center',
        paddingTop: '30px',
        paddingBottom: '30px',
    },
    link: {
        flex: '0 0 auto',
        marginTop: 'auto',
        paddingTop: '30px',
        paddingBottom: '30px',
        textDecoration: 'none',
    },
    button: {
        display: 'block',
        whiteSpace: 'nowrap',
        textOverflow: 'ellipsis',
        overflow: 'hidden',
        color: '#222222',
        background: '#fff',
        padding: '10px 30px',
        fontSize: '20px',
        lineHeight: '1.2',
        fontWeight: '600',
    },
}));

export default useStyles;