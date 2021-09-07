import React from 'react';
import {Card, makeStyles, Typography, CardContent, CardHeader, Avatar, IconButton, CardActions, Chip } from '@material-ui/core';
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
                    <IconButton aria-label="close">
                        <CloseIcon />
                    </IconButton>
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
                <IconButton aria-label="Edit Product">
                    <CreateIcon />
                </IconButton>
            </CardActions>
        </Card>
    );
}