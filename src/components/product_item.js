import React,{useState} from 'react';
import {Card, makeStyles, Tooltip, CardContent, CardHeader, Avatar, IconButton, CardActions, Chip, Typography } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import CreateIcon from '@material-ui/icons/Create';
import AddEditDialog from './add_edit_dialog';
import { useDispatch } from 'react-redux';
import { actionCreators } from '../state_mgr';
import { bindActionCreators } from 'redux';
import { removeProduct } from '../state_mgr/action_creators';


const useStyles = makeStyles({
    root: {
      maxWidth: 250,
      margin: 15
    },
  });

export default function ProductItem({product, prices}){
    const [open, setOpen] = useState(false);
    const classes = useStyles();
    const dispatch = useDispatch();

    let currentLatestDateObject = {
                                    date:prices[product.prices[0]]?.date,
                                    priceIndex: product.prices[0]
                                    }
    
    const {removeProduct} = bindActionCreators(actionCreators, dispatch);                                
    product.prices.forEach((priceIndex) => { 
        if (new Date(currentLatestDateObject.date) < new Date(prices[priceIndex].date)){
            currentLatestDateObject.date = prices[priceIndex].date;
            currentLatestDateObject.priceIndex = priceIndex;
        } 
    })

    const handleEditProduct = () => {
        setOpen(true); //open the dialog box to edit product
    }

    const handleDelete = () => {
        
        removeProduct({
            product_id: product.id
        });
    }


    return (
        <Card className={classes.root}>
            <CardHeader
                avatar={
                <Avatar aria-label="recipe" className={classes.avatar}>
                    {product.name[0]}
                </Avatar>
                }
                action={
                    <Tooltip title="Delete">
                    <IconButton aria-label="close" onClick={() => handleDelete()}>
                        <CloseIcon />
                    </IconButton>
                    </Tooltip>
                }
                title={product.name}
                subheader={`$${prices[currentLatestDateObject.priceIndex].price}`}
            />

            <CardContent>
                {
                    product.prices.map((priceIndex, key) => 
                        {
                            if (priceIndex === currentLatestDateObject.priceIndex) return; 
                            return (<Chip key={key} label={`$${prices[priceIndex].price}`} disabled size="small" variant="outlined"/>)
                        })
                    
                }
            </CardContent>
            <CardActions style={{justifyContent: 'flex-end'}}>
                <Tooltip title="Edit Product">
                    <IconButton aria-label="Edit Product" onClick={() => handleEditProduct() } >
                        <CreateIcon />
                    </IconButton>
                </Tooltip>
            </CardActions>
            <AddEditDialog open={open} setOpen={setOpen} productname={product.name} productid={product.id}/>
        </Card>
    );
}