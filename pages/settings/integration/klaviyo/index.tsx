"use client"

import { useState } from "react"
import {
  Page,
  LegacyCard,
  TextField,
  Button,
  Text,
  Link,
  Divider,
  InlineStack,
  BlockStack,
  Card,
  Grid,
} from "@shopify/polaris"
import { ArrowLeftIcon } from "@shopify/polaris-icons"
import router from "next/router"

export default function KlaviyoCredentials() {
  const [apiSecret, setApiSecret] = useState("")
  const [isDraft, setIsDraft] = useState(true)
  const [isReferralSaleTagEnabled, setIsReferralSaleTagEnabled] = useState(false)

  const handleBackClick = () => {
    console.log("Back button clicked")
    // Navigation logic would go here
  }

  const handleSaveClick = () => {
    console.log("Save button clicked", { apiSecret, isDraft })
    // Save logic would go here
  }

  return (
    <Page fullWidth>
      <Card>
        <BlockStack gap="400">
          <InlineStack align="space-between">
            <InlineStack gap="400" align="start">
              <Button icon={ArrowLeftIcon} onClick={()=>router.push('/settings')} accessibilityLabel="Go back" variant="tertiary" />
              <div className="klaviyo-text">
              <Text as="h1" variant="headingLg">
                Klaviyo
              </Text>
              </div>
            </InlineStack>

            <InlineStack gap="400" align="center">
              <InlineStack gap="200" align="center">
              </InlineStack>
              <div className="enable-referrer-new">
                <div className="toggle-container">
                  <label className="toggle-switch">
                    <input 
                      type="checkbox" 
                      checked={isReferralSaleTagEnabled} 
                      onChange={(e) => setIsReferralSaleTagEnabled(e.target.checked)}
                    />
                    <span className="slider round"></span>
                  </label>
                  <span className="toggle-label">
                    {isReferralSaleTagEnabled ? 'Live' : 'Draft'}
                  </span>
                </div>
              </div>
              <Button variant="primary" size="large" onClick={handleSaveClick}>
                Save
              </Button>
            </InlineStack>
          </InlineStack>

          <Divider />

          {/* Grid layout with spacing adjustments */}
          <Grid gap="800">

            {/* Left side content - now with 5 columns */}
            <Grid.Cell columnSpan={{ xs: 6, sm: 5, md: 5, lg: 5, xl: 5 }}>
                <div className="klaviyo-grid">
              <BlockStack gap="400">
                <Text as="h2" variant="headingMd">
                  API credentials
                </Text>

                <Text as="p" variant="bodyMd">
                  Retrieve the Private API Keys from your Klaviyo account and ensure the selected access level is Grant
                  applications full access for every API scope. This step is essential for successful integration with
                  Klaviyo. For instructions on obtaining a Private API key with the specified scope, please consult the
                  provided documentation.
                </Text>
                <Link url="https://help.klaviyo.com/hc/en-us/articles/7423954176283" external removeUnderline>
                  https://help.klaviyo.com/hc/en-us/articles/7423954176283
                </Link>
              </BlockStack>
              </div>
            </Grid.Cell>

            
            {/* Right side content - now with 4 columns and aligned to the end */}
            <Grid.Cell columnSpan={{ xs: 6, sm: 4, md: 4, lg: 6, xl: 6 }}>
                <div className="klaviyo-grid2">
              <BlockStack gap="400">
                <Card>
                  <TextField
                    label="API-Secret"
                    value={apiSecret}
                    onChange={setApiSecret}
                    autoComplete="off"
                    placeholder="Enter your private key"
                  />
                </Card>
              </BlockStack>
              </div>
            </Grid.Cell>
            
            {/* Empty cell for spacing at the end */}
            {/* <Grid.Cell columnSpan={{ xs: 0, sm: 1, md: 1, lg: 1, xl: 1 }}></Grid.Cell> */}
          </Grid>
        </BlockStack>
      </Card>
    </Page>
  )
}