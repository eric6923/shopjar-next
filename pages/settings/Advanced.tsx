import { Page, Grid, Text, Button } from '@shopify/polaris';
import React, { useState } from 'react';

export default function Advanced() {
  const [isReferralSaleTagEnabled, setIsReferralSaleTagEnabled] = useState(false);

  return (
    <Page fullWidth>
      <Grid>
        <Grid.Cell columnSpan={{ xs: 6, sm: 3, md: 3, lg: 5, xl: 5 }}>
          <div className="manage-emails-text">
            <Text as="h2" variant="headingMd">
              IP Fraud Detection (Advanced)
            </Text>
            <Text as="p" variant="bodyLg">
              Brand the emails sent for your referral and affiliate program members with your own sending email domain name.
            </Text>
          </div>
        </Grid.Cell>
        <Grid.Cell columnSpan={{ xs: 6, sm: 3, md: 3, lg: 7, xl: 7 }}>
          <div className="enable-referrer-advanced">
            <div className="toggle-container-advanced">
              <label className="toggle-switch">
                <input 
                  type="checkbox" 
                  checked={isReferralSaleTagEnabled} 
                  onChange={(e) => setIsReferralSaleTagEnabled(e.target.checked)} // ✅ Now it works
                />
                <span className="slider round"></span>
              </label>
              <Text as="p" variant='bodyLg'>
                {isReferralSaleTagEnabled ? 'Enabled' : 'Disabled'}
              </Text>
            </div>
          </div>
        </Grid.Cell>
      </Grid>
    </Page>
  );
}
