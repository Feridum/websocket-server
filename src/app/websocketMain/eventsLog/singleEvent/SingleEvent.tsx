import React from 'react';
import { Card, CardContent, Typography } from "@material-ui/core";



export const SingleEvent = ({ message, channel }: any) => {

    return (
        <Card style={{marginBottom: 8}}>
            <CardContent>
                <Typography component="h5" variant="h5">
                    Channel: {channel}
                </Typography>
                <Typography variant="subtitle1" color="textSecondary">
                    Message: {message}
                </Typography>
            </CardContent>
        </Card>
    )
}