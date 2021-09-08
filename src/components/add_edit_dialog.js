import React, {useState} from 'react';
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
    const [price, setPrice] = useState(0);

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
        <DialogTitle id="add-new-title">Add New Product</DialogTitle>
        <DialogContent>
          <DialogContentText>
          
            <TextField id="outlined-basic" label="Product" variant="outlined" value={product} fullWidth onChange={(e)=>setProduct(e.target.value)}/>
            <TextField id="outlined-basic" label="$$ Price" variant="outlined" fullWidth onChange={(e)=>setPrice(e.target.value)} />

          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleOkay} color="primary" autoFocus>
            Okay
          </Button>
        </DialogActions>
      </Dialog>
    );
  }
  
  AddEditDialog.propTypes = {
    open: PropTypes.bool.isRequired,
  }