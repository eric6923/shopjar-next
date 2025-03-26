import { Grid, LegacyCard, Tabs, Text, TextField } from "@shopify/polaris";
import { useState, useCallback } from "react";
import LandingPage from "./LandingPage";
import ThankYouWidget from "./ThankYouWidget";
import ReferralWidget from "./ReferralWidget";

export default function TabsFittedExample() {
  const [selected, setSelected] = useState(0);

  const handleTabChange = useCallback(
    (selectedTabIndex: number) => setSelected(selectedTabIndex),
    []
  );

  const tabs = [
    {
      id: "all-customers-fitted-2",
      content: "Reward Claim Widget",
      accessibilityLabel: "All customers",
      panelID: "all-customers-fitted-content-2",
    },
    {
      id: "accepts-marketing-fitted-2",
      content: "Landing page",
      panelID: "accepts-marketing-fitted-Ccontent-2",
    },
    {
      id: "accepts-marketing-fitted-3",
      content: "Thank you widget",
      panelID: "accepts-marketing-fitted-Ccontent-2",
    },
    {
      id: "accepts-marketing-fitted-4",
      content: "Referral Widget",
      panelID: "accepts-marketing-fitted-Ccontent-2",
    },
  ];

  return (
    <Tabs tabs={tabs} selected={selected} onSelect={handleTabChange} fitted>
      {selected === 0 && (
        <Grid>
          <Grid.Cell columnSpan={{ xs: 6, sm: 3, md: 3, lg: 6, xl: 6 }}>
            <div className="referral-grid-text">
              <Text as="p" variant="bodyLg">
                Failed to add tracker
              </Text>
            </div>
          </Grid.Cell>
          <Grid.Cell columnSpan={{ xs: 6, sm: 3, md: 3, lg: 6, xl: 6 }}>
            <div className="referral-grid-input"></div>
            <TextField></TextField>
          </Grid.Cell>
          <Grid.Cell columnSpan={{xs: 6, sm: 3, md: 3, lg: 6, xl: 6}}>
                    <div className="referral-grid-text">
                        <Text as="p" variant="bodyLg">Failed to create coupon</Text>
                        </div>
                    </Grid.Cell>
                    <Grid.Cell columnSpan={{xs: 6, sm: 3, md: 3, lg: 6, xl: 6}}>
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
                    <Grid.Cell columnSpan={{xs: 6, sm: 3, md: 3, lg: 6, xl: 6}}>
                    <div className="referral-grid-text">
                        <Text as="p" variant="bodyLg">Referral reward is not available for existing customers. It appears you already an existing customer in our store</Text>
                        </div>
                    </Grid.Cell>
                    <Grid.Cell columnSpan={{xs: 6, sm: 3, md: 3, lg: 6, xl: 6}}>
                      <div className="referral-grid-input"></div>
                        <TextField></TextField>
                      
                    </Grid.Cell>
                    <Grid.Cell columnSpan={{xs: 6, sm: 3, md: 3, lg: 6, xl: 6}}>
                    <div className="referral-grid-text">
                        <Text as="p" variant="bodyLg">You can't use your own referral</Text>
                        </div>
                    </Grid.Cell>
                    <Grid.Cell columnSpan={{xs: 6, sm: 3, md: 3, lg: 6, xl: 6}}>
                      <div className="referral-grid-input"></div>
                        <TextField></TextField>
                      
                    </Grid.Cell>
                    <Grid.Cell columnSpan={{xs: 6, sm: 3, md: 3, lg: 6, xl: 6}}>
                    <div className="referral-grid-text">
                        <Text as="p" variant="bodyLg">Self referral detected through IP
                        </Text>
                        </div>
                    </Grid.Cell>
                    <Grid.Cell columnSpan={{xs: 6, sm: 3, md: 3, lg: 6, xl: 6}}>
                      <div className="referral-grid-input"></div>
                        <TextField></TextField>
                      
                    </Grid.Cell>
        </Grid>
      )}
      {selected === 1 && <LandingPage/>}
      {selected === 2 && <ThankYouWidget/>}

      {selected === 3 && <ReferralWidget/>}
    </Tabs>
  );
}
