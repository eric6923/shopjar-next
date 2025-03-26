import { Grid, Text, TextField } from "@shopify/polaris";


export default function TabsFittedExample() {

  return (


        <Grid>
          <Grid.Cell columnSpan={{ xs: 6, sm: 3, md: 3, lg: 6, xl: 6 }}>
            <div className="referral-grid-text">
              <Text as="p" variant="bodyLg">
              Authentication failed
              </Text>
            </div>
          </Grid.Cell>
          <Grid.Cell columnSpan={{ xs: 6, sm: 3, md: 3, lg: 6, xl: 6 }}>
            <div className="referral-grid-input"></div>
            <TextField></TextField>
          </Grid.Cell>
          <Grid.Cell columnSpan={{xs: 6, sm: 3, md: 3, lg: 6, xl: 6}}>
                    <div className="referral-grid-text">
                        <Text as="p" variant="bodyLg">Failed to create member</Text>
                        </div>
                    </Grid.Cell>
                    <Grid.Cell columnSpan={{xs: 6, sm: 3, md: 3, lg: 6, xl: 6}}>
                      <div className="referral-grid-input"></div>
                        <TextField></TextField>
                      
                    </Grid.Cell>
                    <Grid.Cell columnSpan={{xs: 6, sm: 3, md: 3, lg: 6, xl: 6}}>
                    <div className="referral-grid-text">
                        <Text as="p" variant="bodyLg">Invalid token</Text>
                        </div>
                    </Grid.Cell>
                    <Grid.Cell columnSpan={{xs: 6, sm: 3, md: 3, lg: 6, xl: 6}}>
                      <div className="referral-grid-input"></div>
                        <TextField></TextField>
                      
                    </Grid.Cell>
                    
        </Grid>
  );
}
