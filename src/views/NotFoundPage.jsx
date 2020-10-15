import React from 'react';
import { useHistory } from 'react-router';
import { makeStyles } from '@material-ui/core/styles';
import { Button, Grid, Typography } from '@material-ui/core';
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import { routes } from '../config/routes';
import PropTypes from 'prop-types';

const useStyles = makeStyles({
    root: {
        padding: 32
    }
});

export const NotFoundPage = ({ message, showBackToHome }) => {
    const classes = useStyles();
    const history = useHistory();

    const handleHomeClick = () => {
        history.push(routes.DEFAULT_ROUTE);
    };

    return (
        <Grid container justify={'center'} alignItems={'center'} className={classes.root}>
            <Grid item xs={12} sm={12} xl={12} className={classes.root}>
                <Typography align={'center'} variant={'h5'}>
                    {message}
                </Typography>
            </Grid>
            {!showBackToHome ? null : (
                <Grid item>
                    <Button
                        color={'primary'}
                        startIcon={<HomeOutlinedIcon />}
                        variant={'outlined'}
                        onClick={handleHomeClick}
                    >
                        Go Back To Homepage
                    </Button>
                </Grid>
            )}
        </Grid>
    );
};

NotFoundPage.propTypes = {
    message: PropTypes.string,
    showBackToHome: PropTypes.bool
};

export default NotFoundPage;
