import Grid from '@material-ui/core/Grid';
import classNames from 'classnames';
import useStyles from '@core_modules/commons/GridListCustom/style';

const GridList = ({
    data = [],
    className = '',
    ItemComponent,
    itemProps = {},
    gridContainerProps = {},
    gridItemProps = {},
}) => {
    const styles = useStyles();
    const containerStyle = classNames(styles.container, className);
    if (!ItemComponent) return null;
    return (
        <Grid
            container
            spacing={4}
            className={containerStyle}
            {...gridContainerProps}
        >
            {data.map((item, index) => (
                <Grid item xs={6} key={index} {...gridItemProps}>
                    <ItemComponent {...itemProps} {...item} />
                </Grid>
            ))}
        </Grid>
    );
};

export default GridList;
