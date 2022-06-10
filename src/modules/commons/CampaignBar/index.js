
import useStyles from '@core_modules/commons/CampaignBar/style';

const CampaignBar = ({ text }) => {
    const styles = useStyles();

    return (
        <div id="campaign-bar" className={styles.container}>
            <div className={styles.wrapper}>
                <div className={styles.textPromotion}>
                    { text }
                </div>
            </div>
        </div>
    );
}

export default CampaignBar;