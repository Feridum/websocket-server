import React from 'react'
import { Form, Field } from 'react-final-form'
import { ipcRenderer } from '../../../electron';
import { Input } from 'final-form-material-ui';
import { Grid, Button } from '@material-ui/core';



export const WebsocketInitForm = ({ redirectOnSuccess }: any) => {

    const startWebsocketServer = (formValues: { portNumber?: number }) => {
        console.log(formValues)
        ipcRenderer.send('start-websocket-server', { port: formValues.portNumber })
        redirectOnSuccess();
    }


    return (
        <Form onSubmit={startWebsocketServer}>
            {({ handleSubmit, submitting, pristine, reset }) => (
                
                <form onSubmit={handleSubmit}>
                 <Grid container alignItems="flex-start" spacing={8}>
                    <h2>Simple Default Input</h2>
                    <Grid item xs={12}>
                    <Field 
                        required 
                        name="portNumber" 
                        component={Input} 
                        placeholder="Port number eg.: 5000" 
                    />
                    </Grid>
                   <Grid item style={{ marginTop: 16 }}>
                    <Button
                        type="button"
                        variant="contained"
                        disabled={submitting || pristine}
                        onClick={reset}
                    >
                        Reset
                    </Button>

                    <Button
                        variant="contained"
                        color="primary"
                        type="submit"
                        disabled={submitting}
                    >
                        Submit
                    </Button>
                    </Grid>
                </Grid>
                </form>
                        
            )}
        </Form>
    )
}