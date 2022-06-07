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
        margin: '40px 0',
        [theme.breakpoints.down('sm')]: {
            paddingLeft: 20,
            paddingRight: 20,
        },
    },
}));

export default useStyles;