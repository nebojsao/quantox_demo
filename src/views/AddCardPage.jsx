import React, { useEffect, useState } from 'react';
import { Header } from '../components/Header';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { useHistory } from 'react-router';
import routes from '../config/routes';
import PaymentCard from '../components/PaymentCard';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import visaLogo from '../assets/visa_logo.png';
import discoverLogo from '../assets/discover_logo.png';
import masterCardLogo from '../assets/mastercard_logo.png';
import { useDispatch } from 'react-redux';
import { addNewCard } from '../redux/actions/cardActions';
import { setNotification } from '../redux/actions/notificationActions';

const cardOptions = [
    { label: 'VISA', logo: visaLogo },
    { label: 'DISCOVER', logo: discoverLogo },
    { label: 'MASTER CARD', logo: masterCardLogo }
];

export const AddCardPage = () => {
    const history = useHistory();
    const dispatch = useDispatch();
    const [username, setUsername] = useState('');
    const [cardNumber, setCardNumber] = useState('');
    const [expiresOn, setExpiresOn] = useState('');
    const [cardType, setCardType] = useState(cardOptions[0]);
    const [saveDisabled, setSaveDisabled] = useState(true);

    const handleSaveClick = () => {
        dispatch(addNewCard('Nebojsa Opricic', '1234 1234 1234 1234', '2/22'));
        dispatch(setNotification('Successfully added new card!'));
        history.push(routes.VIEW_CARDS);
    };

    const handleUsernameChange = (e) => {
        if (e.target.value.length < 30) {
            setUsername(e.target.value);
        }
    };

    const handleCardNumberChange = (e) => {
        if (e.target.value.length <= 16) {
            setCardNumber(e.target.value);
        }
    };

    const handleExpiresOnChange = (e) => {
        if (e.target.value.length <= 5) {
            setExpiresOn(e.target.value);
        }
    };

    const handleCardsOverviewClick = () => {
        history.push(routes.VIEW_CARDS);
    };

    useEffect(() => {
        isSaveDisabled();
    });

    const isSaveDisabled = () => {
        if (username.length < 1 || cardNumber.length < 1 || expiresOn.length < 1) {
            setSaveDisabled(true);
        } else {
            setSaveDisabled(false);
        }
    };
    return (
        <>
            <Grid container spacing={0}>
                <Button onClick={handleCardsOverviewClick}>Cards Overview</Button>
                <Header text={'Add New Card'} />
                <PaymentCard
                    username={username}
                    cardNumber={cardNumber}
                    expiresOn={expiresOn}
                    logo={cardType?.logo}
                />
                <Grid container item xs={12} justify={'center'} style={{ marginTop: 16 }}>
                    <Autocomplete
                        value={cardType}
                        onChange={(e, value) => setCardType(value)}
                        id='card selector'
                        options={cardOptions}
                        getOptionLabel={(option) => option.label}
                        style={{ width: 300 }}
                        renderInput={(params) => (
                            <TextField {...params} label='Combo box' variant='outlined' />
                        )}
                    />
                </Grid>
                <Grid container item xs={12} justify={'center'} style={{ marginTop: 16 }}>
                    <TextField
                        label='Name'
                        variant='outlined'
                        value={username}
                        onChange={handleUsernameChange}
                    />
                </Grid>
                <Grid container item xs={12} justify={'center'} style={{ marginTop: 16 }}>
                    <TextField
                        type='number'
                        label='Card Number'
                        variant='outlined'
                        value={cardNumber}
                        onChange={handleCardNumberChange}
                    />
                </Grid>
                <Grid container item xs={12} justify={'center'} style={{ marginTop: 16 }}>
                    <TextField
                        label='Expires On'
                        variant='outlined'
                        value={expiresOn}
                        onChange={handleExpiresOnChange}
                    />
                </Grid>
                <Grid container justify={'center'} style={{ marginTop: 16 }}>
                    <Button
                        color={'primary'}
                        variant={'contained'}
                        onClick={handleSaveClick}
                        disabled={saveDisabled}
                    >
                        Save
                    </Button>
                </Grid>
            </Grid>
        </>
    );
};

export default AddCardPage;
