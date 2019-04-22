import React, { useContext } from 'react';
import { ipcRenderer } from '../../../electron';
import { Form, Field } from 'react-final-form';
import { WebsocketEventsContext } from '../../../context/websocketsEvents/WebsocketEventsContext';
import { Grid, Button, CardHeader } from '@material-ui/core';
import { TextField } from 'final-form-material-ui';



export const WebsocketEventForm = () => {
    const websocketsEventsContext = useContext(WebsocketEventsContext)
    
    const sendEvent = (formValues:{channel?:string, message?:string }) =>{
        console.log(formValues)
        websocketsEventsContext.addEvent(formValues);
        ipcRenderer.send('send-websocket-event', {channel: formValues.channel, message: formValues.message})
    }

    return (
        <Form onSubmit={sendEvent}>
            {({ handleSubmit, reset, submitting, pristine }) => (
                <form onSubmit={handleSubmit}>
                <Grid container alignItems="flex-start" spacing={8}>
                    <CardHeader title='Send Event'/>
                    <Grid item xs={12}>
                    <Field 
                    fullWidth
                        required 
                        name="channel" 
                        component={TextField} 
                        placeholder="Message channel" 
                        variant="outlined"
                    />
                    </Grid>
                
                    <Grid item xs={12}>
                    <Field 
                    fullWidth
                        required 
                        name="message" 
                        component={TextField} 
                        placeholder="Message" 
                        multiline
                        variant="outlined"
                        rows={10}
                    />
                    </Grid>

                    <Grid item style={{ marginTop: 16 }}>
                    <Button
                        type="button"
                        variant="contained"
                        disabled={submitting || pristine}
                        onClick={reset}
                        style={{marginRight: 16}}
                    >
                        Reset
                    </Button>

                    <Button
                        variant="contained"
                        color="primary"
                        type="submit"
                        disabled={submitting}
                    >
                        Send Event
                    </Button>
                    </Grid>
                    </Grid>
                </form>
            )}
        </Form>
    )
}