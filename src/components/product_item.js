import React from 'react';
import {Card, makeStyles, Tooltip, CardContent, CardHeader, Avatar, IconButton, CardActions, Chip } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import CreateIcon from '@material-ui/icons/Create';


const useStyles = makeStyles({
    root: {
      maxWidth: 250,
      margin: 15
    },
  });

export default function ProductItem(){
    const classes = useStyles();
    
    return (
        <Card className={classes.root}>
            <CardHeader
                avatar={
                <Avatar aria-label="recipe" className={classes.avatar}>
                    R
                </Avatar>
                }
                action={
                    <Tooltip title="Delete">
                    <IconButton aria-label="close">
                        <CloseIcon />
                    </IconButton>
                    </Tooltip>
                }
                title="Shrimp fggyh"
                subheader="$850.00"
            />

            <CardContent>
                <Chip label="$200" disabled size="small" variant="outlined"/>
                <Chip label="$300" disabled size="small" variant="outlined"/>
                <Chip label="$500" disabled size="small" variant="outlined"/>
                <Chip label="$600" disabled size="small" variant="outlined"/>
                <Chip label="$600" disabled size="small" variant="outlined"/>
                <Chip label="$800" disabled size="small" variant="outlined"/>
            </CardContent>
            <CardActions style={{justifyContent: 'flex-end'}}>
                <Tooltip title="Edit Product">
                    <IconButton aria-label="Edit Product">
                        <CreateIcon />
                    </IconButton>
                </Tooltip>
            </CardActions>
        </Card>
    );
}