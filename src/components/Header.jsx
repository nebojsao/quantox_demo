import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';

const useStyles = makeStyles({
    root: {
        marginTop: 20,
        marginBottom: 20
    }
});

export const Header = ({ text }) => {
    const classes = useStyles();

    return (
        <Grid justify={'center'} container item xs={12} spacing={0}>
            <Typography variant={'h5'} className={classes.root}>
                {text}
            </Typography>
        </Grid>
    );
};

Header.propTypes = {
    text: PropTypes.string.isRequired
};
