import {Page, Grid, InlineStack, Card, TextField, Button, Text} from '@shopify/polaris';
import React from 'react';

export default function EmailDomains() {
  return (
    <Page fullWidth>
      <Grid>
        <Grid.Cell columnSpan={{xs: 6, sm: 3, md: 3, lg: 5, xl: 5}}>
        <div className="manage-emails-text">
            <Text as="h2" variant="headingMd">
            Sending Email Domain (Advanced)
            </Text>
            <Text as="p" variant="bodyLg">
            Brand the emails sent for your referral and affiliate program members with your own sending email domain name.
            </Text>
            </div>
        </Grid.Cell>
        <Grid.Cell columnSpan={{xs: 6, sm: 3, md: 3, lg: 7, xl: 7}}>
            
         <Card>
            
            <div className="text-field-email">
            <TextField label="" autoComplete='' placeholder='Enter Your domain name'></TextField>
            </div>
            <div className="text-email">
            <Text as="p" variant='bodyMd' tone='base'>Example: example.com</Text>
            </div>
            <div className="button-email">
            <Button variant='primary' size='large'>Add Domain</Button>
            </div>
            </Card>
        </Grid.Cell>
        
      </Grid>
      
    </Page>
  );
}