import { Grid, Tabs, Text, TextField } from "@shopify/polaris";
import { useState, useCallback } from "react";

export default function TabsFittedExample() {
  const [selected, setSelected] = useState(0);

  const handleTabChange = useCallback(
    (selectedTabIndex: number) => setSelected(selectedTabIndex),
    []
  );

  const tabs = [
    {
      id: "all-customers-fitted-2",
      content: "My Account Portal",
      accessibilityLabel: "All customers",
      panelID: "all-customers-fitted-content-2",
    },
  ];

  return (
    <Tabs tabs={tabs} selected={selected} onSelect={handleTabChange} fitted>
      <Grid>
        <Grid.Cell columnSpan={{ xs: 6, sm: 3, md: 3, lg: 6, xl: 6 }}>
          <div className="referral-grid-text">
            <Text as="p" variant="bodyLg">
            CASH
            </Text>
          </div>
        </Grid.Cell>
        <Grid.Cell columnSpan={{ xs: 6, sm: 3, md: 3, lg: 6, xl: 6 }}>
          <div className="referral-grid-input"></div>
          <TextField></TextField>
        </Grid.Cell>
        <Grid.Cell columnSpan={{ xs: 6, sm: 3, md: 3, lg: 6, xl: 6 }}>
          <div className="referral-grid-text">
            <Text as="p" variant="bodyLg">
            COUPON
            </Text>
          </div>
        </Grid.Cell>
        <Grid.Cell columnSpan={{ xs: 6, sm: 3, md: 3, lg: 6, xl: 6 }}>
          <div className="referral-grid-input"></div>
          <TextField></TextField>
        </Grid.Cell>
        <Grid.Cell columnSpan={{ xs: 6, sm: 3, md: 3, lg: 6, xl: 6 }}>
          <div className="referral-grid-text">
            <Text as="p" variant="bodyLg">
            Reward
            </Text>
          </div>
        </Grid.Cell>
        <Grid.Cell columnSpan={{ xs: 6, sm: 3, md: 3, lg: 6, xl: 6 }}>
          <div className="referral-grid-input"></div>
          <TextField></TextField>
        </Grid.Cell>
        <Grid.Cell columnSpan={{ xs: 6, sm: 3, md: 3, lg: 6, xl: 6 }}>
          <div className="referral-grid-text">
            <Text as="p" variant="bodyLg">
            Reward value
            </Text>
          </div>
        </Grid.Cell>
        <Grid.Cell columnSpan={{ xs: 6, sm: 3, md: 3, lg: 6, xl: 6 }}>
          <div className="referral-grid-input"></div>
          <TextField></TextField>
        </Grid.Cell>
        <Grid.Cell columnSpan={{ xs: 6, sm: 3, md: 3, lg: 6, xl: 6 }}>
          <div className="referral-grid-text">
            <Text as="p" variant="bodyLg">
            Approved
            </Text>
          </div>
        </Grid.Cell>
        <Grid.Cell columnSpan={{ xs: 6, sm: 3, md: 3, lg: 6, xl: 6 }}>
          <div className="referral-grid-input"></div>
          <TextField></TextField>
        </Grid.Cell>
        <Grid.Cell columnSpan={{ xs: 6, sm: 3, md: 3, lg: 6, xl: 6 }}>
          <div className="referral-grid-text">
            <Text as="p" variant="bodyLg">
            Pending
            </Text>
          </div>
        </Grid.Cell>
        <Grid.Cell columnSpan={{ xs: 6, sm: 3, md: 3, lg: 6, xl: 6 }}>
          <div className="referral-grid-input"></div>
          <TextField></TextField>
        </Grid.Cell>
        <Grid.Cell columnSpan={{ xs: 6, sm: 3, md: 3, lg: 6, xl: 6 }}>
          <div className="referral-grid-text">
            <Text as="p" variant="bodyLg">
            Fraud
            </Text>
          </div>
        </Grid.Cell>
        <Grid.Cell columnSpan={{ xs: 6, sm: 3, md: 3, lg: 6, xl: 6 }}>
          <div className="referral-grid-input"></div>
          <TextField></TextField>
        </Grid.Cell>
        <Grid.Cell columnSpan={{ xs: 6, sm: 3, md: 3, lg: 6, xl: 6 }}>
          <div className="referral-grid-text">
            <Text as="p" variant="bodyLg">
            Cancelled
            </Text>
          </div>
        </Grid.Cell>
        <Grid.Cell columnSpan={{ xs: 6, sm: 3, md: 3, lg: 6, xl: 6 }}>
          <div className="referral-grid-input"></div>
          <TextField></TextField>
        </Grid.Cell>
        <Grid.Cell columnSpan={{ xs: 6, sm: 3, md: 3, lg: 6, xl: 6 }}>
          <div className="referral-grid-text">
            <Text as="p" variant="bodyLg">
            Claimed
            </Text>
          </div>
        </Grid.Cell>
        <Grid.Cell columnSpan={{ xs: 6, sm: 3, md: 3, lg: 6, xl: 6 }}>
          <div className="referral-grid-input"></div>
          <TextField></TextField>
        </Grid.Cell>
      </Grid>
    </Tabs>
  );
}
