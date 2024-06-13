import { Dialog, DialogContent, DialogTitle, Button, Grid, Typography, CircularProgress } from '@mui/material';
import React, { useState, useEffect } from 'react';
import CheckIcon from '@mui/icons-material/Check';
import ErrorIcon from '@mui/icons-material/Error';

const PaymentOverlay = ({ open, onClose, animeName, animeId, animeImg }) => {
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState(false);
    const [purchaseMessage, setPurchaseMessage] = useState('');
    const [initialPrice, setInitialPrice] = useState(null);

    useEffect(() => {
        setInitialPrice(getRandomPrice());
    }, []);

    const getRandomPrice = (minPrice = 10, maxPrice = 100) => {
        const price = Math.random() * (maxPrice - minPrice) + minPrice;
        return price.toFixed(2);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        setLoading(true);

        const data = new URLSearchParams();
        data.append('userId', process.env.REACT_APP_USER_ID);
        data.append('animeObjId', animeId);

        try {
            const response = await fetch(process.env.REACT_APP_API_URL_BASE + '/comprar', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
                body: data,
            });

            if (!response.ok) {
                throw new Error('Failed to create subscription.');
            }

            setSuccess(true);
            setPurchaseMessage('Compra Correcta!');
        } catch (error) {
            setError(true);
            console.error('Error en la Compra!', error.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <Dialog open={open} onClose={onClose} >
            <DialogTitle>Payment Details</DialogTitle>
            <DialogContent>
                <Grid container spacing={2}>

                    <Grid item>
                        <img src={animeImg} alt={animeName} />
                    </Grid>

                    <Grid item xs={12} md={6}>
                        <Typography variant="h5">{animeName}</Typography>
                        <br/>
                        <Typography variant="h6">Precio: {initialPrice !== null ? `${initialPrice}€` : 'Loading...'}</Typography>
                    </Grid>
                </Grid>

                <Grid container className={'paymentDialog__buttonsContainer'} >

                    <Grid item>
                        <Button variant="contained" color="primary" onClick={onClose} disabled={loading}>
                            Close
                        </Button>
                    </Grid>

                    <Grid item>
                        <Button variant="contained" color="primary" onClick={handleSubmit} disabled={loading}>
                            {loading ? <CircularProgress size={24} /> : 'Comprar'}
                        </Button>
                        {success && <CheckIcon className={'paymenDialog__icon--success'} />}
                        {error && <ErrorIcon className={'paymenDialog__icon--error'} />}
                    </Grid>
                </Grid>
                {purchaseMessage && (
                    <Typography variant="body1" className={'paymenDialog__purchaseMessage'}>
                        {purchaseMessage}
                    </Typography>
                )}
            </DialogContent>
        </Dialog>
    );
};

export default PaymentOverlay;