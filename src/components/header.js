import React,{useState} from 'react';
import {Box, Fab, makeStyles, styled, Tooltip, Dialog, DialogTitle, DialogActions,DialogContent,DialogContentText, Button, TextField, Divider} from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { actionCreators } from '../state_mgr';
import { bindActionCreators } from 'redux';

function AddNewDialog(props) {
    const state = useSelector((state) => state);
    const dispatch = useDispatch();

    const {addProduct} = bindActionCreators(actionCreators, dispatch);

    const { open, setOpen } = props;
    const [product, setProduct] = useState("");
    const [price, setPrice] = useState(0);

    const handleClose = () => {
        setOpen(false);
    }

    const handleOkay = () => {
        console.log("okay clicked");
        setOpen(false);

        addProduct({
            "name": product,
            "price": price,
            "date": new Date().toISOString()
        });
    }

    

    return (
      <Dialog aria-labelledby="add-new-title" open={open}>
        <DialogTitle id="add-new-title">Add New Product</DialogTitle>
        <DialogContent>
          <DialogContentText>
          
            <TextField id="outlined-basic" label="Product" variant="outlined" fullWidth onChange={(e)=>setProduct(e.target.value)}/>
            <Divider />
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
  
  AddNewDialog.propTypes = {
    open: PropTypes.bool.isRequired,
  }



const MyStyledHeader = styled(Box)({
    background: 'hsla(19, 100%, 50%, 1)',
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
    height: 48,
    padding: '0 30px',
    height: '100px'
  });

export default function Header(){
    const classes = useStyles();
    const [open, setOpen] = useState(false);

    return (
        <MyStyledHeader>
            <h1 className={classes.heading}>
                mPharma Products
            <Tooltip title="Add Product">
                <Fab color="secondary" aria-label="add" className={classes.fab} onClick={() => setOpen(prev => !prev)}>
                    <AddIcon />
                </Fab>
            </Tooltip>
            </h1>
            <AddNewDialog open={open} setOpen={setOpen}/>
        </MyStyledHeader>
    );
}



const useStyles = makeStyles({
    heading: {
        flex: 1,
        textAlign: 'left',
        paddingTop: 25
    },
    fab: {
        float: 'right',
        backgroundColor: 'white',
        color: 'hsla(19, 100%, 50%, 1)',
        '&:hover': {
            backgroundColor: 'hsla(151, 0%, 63%, 1)',
        }
    }
});


