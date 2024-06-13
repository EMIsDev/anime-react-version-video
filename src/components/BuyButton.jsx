import {Button} from "@mui/material";
import {useState} from "react";
import PaymentOverlay from "./PaymentModal";


function BuyButton({animeName,animeImg,animeId}) {

    const [showPaymentOverlay, setShowPaymentOverlay] = useState(false);

    const handleBuyButtonClick = () => {
        setShowPaymentOverlay(true);
    };

    const handleCloseOverlay = () => {
        setShowPaymentOverlay(false);
    };



    return <>
        <Button variant="contained" onClick={handleBuyButtonClick}>
            Comprar
        </Button>
        <PaymentOverlay open={showPaymentOverlay} onClose={handleCloseOverlay} animeName={animeName} animeId={animeId} animeImg={animeImg} />
    </>;
}
export default BuyButton;