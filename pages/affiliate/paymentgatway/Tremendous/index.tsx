"use client";

import { useState } from "react";
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
} from "@shopify/polaris";
import { ArrowLeftIcon } from "@shopify/polaris-icons";
import router from "next/router";

export default function KlaviyoCredentials() {
  const [apiSecret, setApiSecret] = useState("");
  const [isDraft, setIsDraft] = useState(true);
  const [isReferralSaleTagEnabled, setIsReferralSaleTagEnabled] =
    useState(false);

  const handleBackClick = () => {
    console.log("Back button clicked");
    // Navigation logic would go here
  };

  const handleSaveClick = () => {
    console.log("Save button clicked", { apiSecret, isDraft });
    // Save logic would go here
  };

  return (
    <Page fullWidth>
      <Card>
        <BlockStack gap="400">
          <InlineStack align="space-between">
            <InlineStack gap="400" align="start">
              <Button
                icon={ArrowLeftIcon}
                onClick={() => router.push("/affiliate")}
                accessibilityLabel="Go back"
                variant="tertiary"
              />
              <svg
                width="35"
                height="40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path fill="#0373FD" d="M0 0h35v40H0z"></path>
                <path
                  d="M26 12H9v3.438h6.445V28h4.081V15.438h6.446V12H26Z"
                  fill="#fff"
                ></path>
              </svg>
              <div className="tremendus-text">
                <Text as="h1" variant="headingLg">
                  Tremendous
                </Text>
              </div>
            </InlineStack>

            <InlineStack gap="400" align="center">
              <InlineStack gap="200" align="center"></InlineStack>
              <div className="enable-referrer-new">
                <div className="toggle-container">
                  <label className="toggle-switch">
                    <input
                      type="checkbox"
                      checked={isReferralSaleTagEnabled}
                      onChange={(e) =>
                        setIsReferralSaleTagEnabled(e.target.checked)
                      }
                    />
                    <span className="slider round"></span>
                  </label>
                  <span className="toggle-label">
                    {isReferralSaleTagEnabled ? "Live" : "Draft"}
                  </span>
                </div>
              </div>
              <div className="tremendus-btn2">
                <Button
                  variant="primary"
                  size="large"
                  onClick={handleSaveClick}
                >
                  Save
                </Button>
              </div>
            </InlineStack>
          </InlineStack>

          <Divider />

          {/* Grid layout with spacing adjustments */}
          <Grid>
            {/* Left side content - now with 5 columns */}
            <Grid.Cell columnSpan={{ xs: 6, sm: 5, md: 5, lg: 5, xl: 5 }}>
              <div className="klaviyo-grid">
                <BlockStack gap="400">
                  <Text as="h2" variant="headingMd">
                    API credentials
                  </Text>

                  <Text as="p" variant="bodyMd">
                    Get the Client ID and Client Secret Keys from your PayPal
                    account and paste them here. Only then, you will be able to
                    process PayOuts via the PayPal. Refer this document for
                    getting a Client ID and Secret:
                  </Text>
                </BlockStack>
              </div>
            </Grid.Cell>

            {/* Right side content - now with 4 columns and aligned to the end */}
            <Grid.Cell columnSpan={{ xs: 6, sm: 4, md: 4, lg: 6, xl: 6 }}>
              <BlockStack gap="400">
                <Card>
                  <InlineStack>
                    <div className="tremendus-txtfield">
                      <TextField
                        label="API-Secret"
                        value={apiSecret}
                        onChange={setApiSecret}
                        autoComplete="off"
                        placeholder="Enter your private key"
                      />
                    </div>
                    <div className="tremendus-btn">
                      <Button variant="primary" size="large">
                        Verify
                      </Button>
                    </div>
                  </InlineStack>
                </Card>
              </BlockStack>
            </Grid.Cell>
          </Grid>
        </BlockStack>
      </Card>
    </Page>
  );
}
