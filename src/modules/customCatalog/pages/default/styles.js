import { makeStyles } from '@material-ui/core/styles';
import {
    Centering, CreateMargin,
} from '@theme_mixins';

const useStyles = makeStyles((theme) => ({
    title: {
        ...CreateMargin(0, 0, 15, 0),
        ...Centering,
        fontSize: '32px'
    },
    wrapperCatalog: {
        [theme.breakpoints.down('sm')]: {
            paddingLeft: 20,
            paddingRight: 20,
        },
    },
    grid: {
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        [theme.breakpoints.down('sm')]: {
            gridTemplateColumns: 'repeat(1, 1fr)',
        },
        marginBottom: '20px',
    },
}));

export default useStyles;