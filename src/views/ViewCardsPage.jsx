import React from 'react';
import { Button, Grid } from '@material-ui/core';
import { Header } from '../components/Header';
import { useHistory } from 'react-router';
import routes from '../config/routes';
import { CardTable } from '../components/CardTable';
import { useSelector } from 'react-redux';
import { getCardData } from '../redux/selectors/cardSelectors';

export const ViewCardsPage = () => {
    const history = useHistory();

    const cardData = useSelector(getCardData);

    const handleAddNewCard = () => {
        history.push(routes.ADD_CARD);
    };

    return (
        <Grid container item xs={12} justify={'center'}>
            <Header text={'Your cards overview'} />
            <Grid container justify={'flex-start'} style={{ padding: 16 }}>
                <Button color={'primary'} variant={'outlined'} onClick={handleAddNewCard}>
                    Add New Card
                </Button>
            </Grid>
            <CardTable cardData={cardData} />
        </Grid>
    );
};

export default ViewCardsPage;
