import React from 'react'
import { Form, Field } from 'react-final-form'
import { ipcRenderer } from '../../../electron';
import { Input } from 'final-form-material-ui';
import { Grid, Button, CardHeader } from '@material-ui/core';



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
                 <Grid container justify="center" alignItems='center' direction='column'>
                    <CardHeader title='Start websocket on port' style={{padding: "16px 0"}}/>
                    <Grid item style={{width: '100%'}}>
                    <Field 
                        required 
                        name="portNumber" 
                        component={Input} 
                        placeholder="Port number eg.: 5000"
                        style={{width: '100%'}}
                    />
                    </Grid>
                   <Grid item style={{ marginTop: 32, width: '100%', display: "flex" }} justify='flex-end'>
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
                        Start server
                    </Button>
                    </Grid>
                </Grid>
                </form>
                        
            )}
        </Form>
    )
}