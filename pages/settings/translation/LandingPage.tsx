import { Grid, LegacyCard, Tabs, Text, TextField } from "@shopify/polaris";
import { useState, useCallback } from "react";

export default function TabsFittedExample() {

  return (


        <Grid>
          <Grid.Cell columnSpan={{ xs: 6, sm: 3, md: 3, lg: 6, xl: 6 }}>
            <div className="referral-grid-text">
              <Text as="p" variant="bodyLg">
              Failed to create member
              </Text>
            </div>
          </Grid.Cell>
          <Grid.Cell columnSpan={{ xs: 6, sm: 3, md: 3, lg: 6, xl: 6 }}>
            <div className="referral-grid-input"></div>
            <TextField label="" autoComplete="off"></TextField>
          </Grid.Cell>
          <Grid.Cell columnSpan={{xs: 6, sm: 3, md: 3, lg: 6, xl: 6}}>
                    <div className="referral-grid-text">
                        <Text as="p" variant="bodyLg">Failed to send invitation.</Text>
                        </div>
                    </Grid.Cell>
                    <Grid.Cell columnSpan={{xs: 6, sm: 3, md: 3, lg: 6, xl: 6}}>
                      <div className="referral-grid-input"></div>
                        <TextField label="" autoComplete="off"></TextField>
                      
                    </Grid.Cell>
                    <Grid.Cell columnSpan={{xs: 6, sm: 3, md: 3, lg: 6, xl: 6}}>
                    <div className="referral-grid-text">
                        <Text as="p" variant="bodyLg">Invalid token</Text>
                        </div>
                    </Grid.Cell>
                    <Grid.Cell columnSpan={{xs: 6, sm: 3, md: 3, lg: 6, xl: 6}}>
                      <div className="referral-grid-input"></div>
                        <TextField label="" autoComplete="off"></TextField>
                      
                    </Grid.Cell>
                    <Grid.Cell columnSpan={{xs: 6, sm: 3, md: 3, lg: 6, xl: 6}}>
                    <div className="referral-grid-text">
                        <Text as="p" variant="bodyLg">Invitation already sent!</Text>
                        </div>
                    </Grid.Cell>
                    <Grid.Cell columnSpan={{xs: 6, sm: 3, md: 3, lg: 6, xl: 6}}>
                      <div className="referral-grid-input"></div>
                        <TextField label="" autoComplete="off"></TextField>
                      
                    </Grid.Cell>
                    <Grid.Cell columnSpan={{xs: 6, sm: 3, md: 3, lg: 6, xl: 6}}>
                    <div className="referral-grid-text">
                        <Text as="p" variant="bodyLg">Invitation sent successfully!</Text>
                        </div>
                    </Grid.Cell>
                    <Grid.Cell columnSpan={{xs: 6, sm: 3, md: 3, lg: 6, xl: 6}}>
                      <div className="referral-grid-input"></div>
                        <TextField label="" autoComplete="off"></TextField>
                      
                    </Grid.Cell>
                    <Grid.Cell columnSpan={{xs: 6, sm: 3, md: 3, lg: 6, xl: 6}}>
                    <div className="referral-grid-text">
                        <Text as="p" variant="bodyLg">Maximum invite limit reached!</Text>
                        </div>
                    </Grid.Cell>
                    <Grid.Cell columnSpan={{xs: 6, sm: 3, md: 3, lg: 6, xl: 6}}>
                      <div className="referral-grid-input"></div>
                        <TextField label="" autoComplete="off"></TextField>
                      
                    </Grid.Cell>
                    <Grid.Cell columnSpan={{xs: 6, sm: 3, md: 3, lg: 6, xl: 6}}>
                    <div className="referral-grid-text">
                        <Text as="p" variant="bodyLg">Self invite is invalid!
                        </Text>
                        </div>
                    </Grid.Cell>
                    <Grid.Cell columnSpan={{xs: 6, sm: 3, md: 3, lg: 6, xl: 6}}>
                      <div className="referral-grid-input"></div>
                        <TextField label="" autoComplete="off"></TextField>
                      
                    </Grid.Cell>
                    <Grid.Cell columnSpan={{xs: 6, sm: 3, md: 3, lg: 6, xl: 6}}>
                    <div className="referral-grid-text">
                        <Text as="p" variant="bodyLg">Invalid email
                        </Text>
                        </div>
                    </Grid.Cell>
                    <Grid.Cell columnSpan={{xs: 6, sm: 3, md: 3, lg: 6, xl: 6}}>
                      <div className="referral-grid-input"></div>
                        <TextField label="" autoComplete="off"></TextField>
                      
                    </Grid.Cell>
                    <Grid.Cell columnSpan={{xs: 6, sm: 3, md: 3, lg: 6, xl: 6}}>
                    <div className="referral-grid-text">
                        <Text as="p" variant="bodyLg">Copied!
                        </Text>
                        </div>
                    </Grid.Cell>
                    <Grid.Cell columnSpan={{xs: 6, sm: 3, md: 3, lg: 6, xl: 6}}>
                      <div className="referral-grid-input"></div>
                        <TextField label="" autoComplete="off"></TextField>
                      
                    </Grid.Cell>
                    <Grid.Cell columnSpan={{xs: 6, sm: 3, md: 3, lg: 6, xl: 6}}>
                    <div className="referral-grid-text">
                        <Text as="p" variant="bodyLg">Sent!
                        </Text>
                        </div>
                    </Grid.Cell>
                    <Grid.Cell columnSpan={{xs: 6, sm: 3, md: 3, lg: 6, xl: 6}}>
                      <div className="referral-grid-input"></div>
                        <TextField label="" autoComplete="off"></TextField>
                      
                    </Grid.Cell>
                    <Grid.Cell columnSpan={{xs: 6, sm: 3, md: 3, lg: 6, xl: 6}}>
                    <div className="referral-grid-text">
                        <Text as="p" variant="bodyLg">Referral reward is not available for existing customer or Invitation already sent!
                        </Text>
                        </div>
                    </Grid.Cell>
                    <Grid.Cell columnSpan={{xs: 6, sm: 3, md: 3, lg: 6, xl: 6}}>
                      <div className="referral-grid-input"></div>
                        <TextField label="" autoComplete="off"></TextField>
                      
                    </Grid.Cell>
                    <Grid.Cell columnSpan={{xs: 6, sm: 3, md: 3, lg: 6, xl: 6}}>
                    <div className="referral-grid-text">
                        <Text as="p" variant="bodyLg">You should be an existing customer with at least one order to become a member and participate in the referral program
                        </Text>
                        </div>
                    </Grid.Cell>
                    <Grid.Cell columnSpan={{xs: 6, sm: 3, md: 3, lg: 6, xl: 6}}>
                      <div className="referral-grid-input"></div>
                        <TextField label="" autoComplete="off"></TextField>
                      
                    </Grid.Cell>
        </Grid>
  );
}
