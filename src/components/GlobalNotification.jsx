import React from 'react';
import { IconButton, Snackbar } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { getMessage, isShown } from '../redux/selectors/notificationSelectors';
import { closeNotification } from '../redux/actions/notificationActions';
import CloseIcon from '@material-ui/icons/Close';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    close: {
        color: theme.palette.primary.contrastText
    },
    snackbarContent: {
        borderRadius: 8,
        background: theme.palette.primary.dark
    }
}));

export const GlobalNotification = () => {
    const classes = useStyles();

    const dispatch = useDispatch();
    const show = useSelector(isShown);
    const message = useSelector(getMessage);

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        dispatch(closeNotification());
    };

    return (
        <>
            <Snackbar
                anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                open={show}
                message={message}
                key={message}
                autoHideDuration={4000}
                onClose={handleClose}
                ContentProps={{
                    className: classes.snackbarContent
                }}
                action={
                    <IconButton
                        className={classes.close}
                        size={'small'}
                        aria-label='close'
                        onClick={handleClose}
                    >
                        <CloseIcon fontSize='small' />
                    </IconButton>
                }
            />
        </>
    );
};

export default GlobalNotification;
