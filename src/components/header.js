import React from 'react';
import {Box, Fab, makeStyles, styled, Tooltip} from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';


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
    return (
        <MyStyledHeader>
            <h1 className={classes.heading}>
                mPharma Products
            <Tooltip title="Add Product">
                <Fab color="secondary" aria-label="add" className={classes.fab}>
                    <AddIcon />
                </Fab>
            </Tooltip>
            </h1>
            
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


