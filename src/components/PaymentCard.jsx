import React from 'react';
import Card from '@material-ui/core/Card';
import cardChip from '../assets/card_chip.png';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import PropTypes from 'prop-types';
import Tooltip from '@material-ui/core/Tooltip';
import visaLogo from '../assets/visa_logo.png';

const useStyles = makeStyles({
    card: {
        borderRadius: 16,
        position: 'relative',
        background:
            'linear-gradient(180deg,transparent,lightblue),linear-gradient(90deg,#0d648c,#2d274f)',
        width: 400,
        minHeight: 200
    },
    logo: {
        width: 120,
        height: 80
    },
    chip: {
        width: 50,
        height: 40,
        marginLeft: 16,
        marginTop: -24
    },
    username: {
        maxWidth: 220,
        margin: 16
    },
    expiresOn: {
        maxWidth: 60,
        margin: 16
    }
});
export const PaymentCard = ({ username, cardNumber, logo }) => {
    const classes = useStyles();
    return (
        <Grid container item xs={12} justify={'center'}>
            <Card className={classes.card} style={{ margin: 12 }}>
                <Grid container>
                    <Grid item container justify={'flex-end'} xs={12}>
                        <img
                            draggable={false}
                            className={classes.logo}
                            src={logo || visaLogo}
                            alt='card logo'
                        />
                    </Grid>
                    <Grid item container justify={'flex-start'} xs={12}>
                        <img
                            draggable={false}
                            className={classes.chip}
                            src={cardChip}
                            alt='card chip'
                        />
                    </Grid>
                    <Grid container item xs={12} justify={'center'}>
                        <Typography variant={'h5'} style={{ marginTop: 8 }}>
                            {cardNumber || `0000 0000 0000 0000`}
                        </Typography>
                    </Grid>
                    <Grid container justify={'space-between'}>
                        <Grid item>
                            <Tooltip title={username} arrow>
                                <Typography variant={'h6'} noWrap className={classes.username}>
                                    {username || 'USER NAME'}
                                </Typography>
                            </Tooltip>
                        </Grid>
                        <Grid item>
                            <Typography variant={'h6'} className={classes.expiresOn} noWrap>
                                {`0 / 00`}
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
            </Card>
        </Grid>
    );
};

PaymentCard.propTypes = {
    username: PropTypes.string.isRequired,
    cardNumber: PropTypes.string.isRequired,
    logo: PropTypes.any
};

export default PaymentCard;
