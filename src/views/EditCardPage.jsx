import React from 'react';
import { useHistory, useParams } from 'react-router';
import routes from '../config/routes';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { Header } from '../components/Header';

export const EditCardPage = () => {
    const { id } = useParams();

    const history = useHistory();

    const handleCardsOverviewClick = () => {
        history.push(routes.VIEW_CARDS);
    };

    return (
        <Grid container spacing={0}>
            <Button onClick={handleCardsOverviewClick}>Cards Overview</Button>
            <Header text={`Edit Card With ID: ${id}`} />
        </Grid>
    );
};

export default EditCardPage;
