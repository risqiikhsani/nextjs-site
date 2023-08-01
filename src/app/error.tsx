'use client'
 
import * as React from 'react';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import { Button } from '@mui/material';
import LinkButton from '@/components/buttons/link-button';

export default function Error({
  error,
  reset,
}: {
  error: Error
  reset: () => void
}) {
  return (
    <>
    <Alert variant="filled" severity="error">
        <AlertTitle>Error</AlertTitle>
        {JSON.stringify(error)} — <strong>check it out!</strong>
        <Button onClick={() => reset()}>TRY AGAIN</Button>
        <LinkButton name="go to homepage" to="/"/>
      </Alert>
    </>
  )
}