import React, {useState, useEffect} from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { actionCreators } from '../state_mgr';
import { bindActionCreators } from 'redux';
import {Dialog, DialogTitle, DialogActions,DialogContent,DialogContentText, Button, TextField} from '@material-ui/core';


export default function AddEditDialog(props) {
    const dispatch = useDispatch();

    const {editProduct} = bindActionCreators(actionCreators, dispatch);

    const { open, setOpen, productname, productid } = props;
    const [product, setProduct] = useState(productname);
    const [productErrorMsg, setProductErrorMsg] = useState("");
    const [productError, setProductError] = useState(false);

    const [priceError, setPriceError] = useState(false);
    const [priceErrorMsg, setPriceErrorMsg] = useState("");
    const [price, setPrice] = useState(0);

    useEffect(() => {
        if (product.length === 0){
            //product can't be empty
            setProductError(true);
            setProductErrorMsg("Product can't be empty!");
            return;
        }

        if (price < 0){
            setPriceError(true);
            setPriceErrorMsg("Price cannot be a negative amount!");
            return;
        }

        if (price.length === 0){
            setPriceError(true);
            setPriceErrorMsg("Price cannot be empty!");
            return;
        }

        if (isNaN(price)){
            setPriceError(true);
            setPriceErrorMsg("Price is not a number!");
            return;
        }

        setProductError(false);
        setProductErrorMsg("");

        setPriceError(false);
        setPriceErrorMsg("");
    },[product, price])

    const handleClose = () => {
        setOpen(false);
    }

    const handleOkay = () => {
        setOpen(false);
        editProduct({
            product_id: productid,
            product: productname,
            date: new Date().toISOString(),
            price, price
        })
    }

    return (
      <Dialog aria-labelledby="add-new-title" open={open}>
        <DialogTitle id="add-new-title">Edit Product ({productname})</DialogTitle>
        <DialogContent>
          <DialogContentText>
          
            <TextField id="outlined-basic" 
                label="Product" variant="outlined" value={product} fullWidth onChange={(e)=>setProduct(e.target.value)}
                error={productError} helperText={productErrorMsg}
                />
            <TextField id="outlined-basic" label="Enter Price" value={price} variant="outlined" fullWidth onChange={(e)=>setPrice(e.target.value)} 
                error={priceError} helperText={priceErrorMsg}
                />

          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleOkay} color="primary" autoFocus disabled={priceError || productError}>
            Okay
          </Button>
        </DialogActions>
      </Dialog>
    );
  }
  
  AddEditDialog.propTypes = {
    open: PropTypes.bool.isRequired,
  }