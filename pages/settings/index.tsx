"use client";
import React, { useCallback, useState } from "react";
import {
  Page,
  Card,
  Tabs,
  Text,
  Box,
  Icon,
  InlineStack,
  PageActions,
  Button,
  Toast,
  Frame,
  TextField,
  Checkbox,
  Select,
} from "@shopify/polaris";
import { MegaphoneIcon } from "@shopify/polaris-icons";
import EmailDomain from "./EmailDomains";
import Integration from "./Integration";
import Advanced from "./Advanced";

const SettingsPage = () => {
  const [selected, setSelected] = useState(0);
  const [cookieValidity, setCookieValidity] = useState(90);
  const [isOtpEnabled, setIsOtpEnabled] = useState(false);
  const [isCopied, setIsCopied] = useState(false);
  const [dropselected, setdropSelected] = useState("today");
  const [isReferralSaleTagEnabled, setIsReferralSaleTagEnabled] = useState(true);

  const handleTabChange = (selectedTabIndex: number) => {
    setSelected(selectedTabIndex);
  };

  const handleCopyLink = () => {
    const linkToCopy =
      "https://cart424.myshopify.com/a/shopjar-referral/my-account";
    navigator.clipboard.writeText(linkToCopy).then(() => {
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 3000);
    });
  };

  const handleCookieValidityChange = (value) => {
    const numValue = parseInt(value);
    if (!isNaN(numValue) && numValue >= 1 && numValue <= 365) {
      setCookieValidity(numValue);
    }
  };

  const handleOtpToggle = (checked: boolean) => {
    setIsOtpEnabled(checked);
  };

  const handleSelectChange = useCallback(
    (value: string) => setSelected(value),
    []
  );

  const options = [
    { label: "Order Total (Including shipping & taxes)", value: "InShipping" },
    { label: "Order Total (Without shipping & taxes)", value: "OutShipping" },
  ];

  const tabs = [
    {
      id: "general",
      content: "General",
    },
    {
      id: "email-domains",
      content: "Email Domains",
    },
    {
      id: "integration",
      content: "Integration",
    },
    {
      id: "advanced",
      content: "Advanced",
    },
  ];

  return (
    <Frame>
      <Page fullWidth title="">
        <Card>
          <div className="settings-header">
            <Text as="h2" variant="headingLg">
              Settings
            </Text>
            <div className="settings-actions">
              <Button size="large">Cancel</Button>
              <Button variant="primary" size="large">
                Save
              </Button>
            </div>
          </div>

          <Tabs tabs={tabs} selected={selected} onSelect={handleTabChange} />

          <Box
            paddingInlineStart="600"
            paddingInlineEnd="600"
            paddingBlockStart="500"
            paddingBlockEnd="600"
          >
            {selected === 0 && (
              <Box>
                <div className="manage-programs-section">
                  <div className="manage-programs-text">
                    <Text as="h2" variant="headingMd">
                      Manage Programs
                    </Text>
                    <Text as="p" variant="bodyLg">
                      This setting allows you to enable / disable the programs
                      globally.
                    </Text>
                  </div>

                  <div className="manage-programs-content">
                    <div className="program-toggle">
                      <div className="program-toggle-left">
                        <svg
                          width="40"
                          height="40"
                          viewBox="0 0 18 18"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M10.264 11.489a5.935 5.935 0 0 0-1.246-.666 3.181 3.181 0 0 0 1.035-2.098 4.656 4.656 0 0 1 3.277-1.331c.968 0 1.897.291 2.687.842a.625.625 0 1 0 .716-1.025 5.938 5.938 0 0 0-1.247-.665 3.18 3.18 0 0 0 1.045-2.358A3.19 3.19 0 0 0 13.344 1a3.19 3.19 0 0 0-3.187 3.188c0 .93.4 1.768 1.038 2.35a5.88 5.88 0 0 0-1.36.74 3.192 3.192 0 0 0-2.959-2A3.19 3.19 0 0 0 3.69 8.464a3.18 3.18 0 0 0 1.032 2.346c-1.695.635-3.07 2-3.63 3.74a1.857 1.857 0 0 0 .27 1.678c.357.49.91.771 1.516.771h5.437a.625.625 0 0 0 0-1.25H2.877a.619.619 0 0 1-.505-.257.62.62 0 0 1-.09-.56c.617-1.92 2.501-3.262 4.58-3.262.968 0 1.897.292 2.688.843a.625.625 0 1 0 .714-1.025Zm3.08-9.239a1.94 1.94 0 0 1 1.937 1.938 1.94 1.94 0 0 1-1.937 1.937 1.94 1.94 0 0 1-1.937-1.937 1.94 1.94 0 0 1 1.937-1.938ZM6.876 6.527a1.94 1.94 0 0 1 1.937 1.938 1.94 1.94 0 0 1-1.937 1.937A1.94 1.94 0 0 1 4.94 8.465a1.94 1.94 0 0 1 1.937-1.938ZM17 14.031c0 .345-.28.625-.625.625h-1.719v1.719a.625.625 0 1 1-1.25 0v-1.719h-1.718a.625.625 0 0 1 0-1.25h1.719v-1.719a.625.625 0 1 1 1.25 0v1.72h1.718c.345 0 .625.279.625.624Z"
                            fill="#000"
                          />
                        </svg>
                        <Text as="h1" variant="headingMd" fontWeight="semibold">
                          Affiliate
                        </Text>
                      </div>
                      <div className="program-toggle-right">
                        <label className="toggle-switch">
                          <input type="checkbox" defaultChecked />
                          <span className="slider round"></span>
                        </label>
                      </div>
                    </div>

                    <div className="program-toggle">
                      <div className="program-toggle-left">
                        <svg
                          width="40"
                          height="40"
                          viewBox="0 0 18 18"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          style={{ marginRight: "8px" }}
                        >
                          <path
                            d="M8.692 1.652a.625.625 0 1 0-.884.884l.41.41c-1.122 3.714-3.242 7.32-6.004 10.226l-.15-.148a.625.625 0 0 0-.879.89l2.938 2.905a.623.623 0 0 0 .884-.004.625.625 0 0 0-.005-.884l-.16-.159c.35-.331.708-.654 1.075-.966l.284.455c.27.434.695.732 1.196.84.5.108 1.01.01 1.435-.273l.005-.004 1.304-.889a1.878 1.878 0 0 0 .518-2.595l-.423-.637-.309-.467a.625.625 0 0 0-.835-.196 27.453 27.453 0 0 0-5.139 3.853l-.85-.841c1.357-1.424 2.566-3.001 3.596-4.694a26.396 26.396 0 0 0 2.515-5.416l4.852 4.852c-.738.244-1.472.524-2.19.836a.625.625 0 0 0 .498 1.147c.88-.383 1.783-.714 2.688-.987l.402.402a.623.623 0 0 0 .884 0 .625.625 0 0 0 0-.884L8.692 1.652Zm.522 10.77.404.61a.626.626 0 0 1-.179.869l-1.303.888a.62.62 0 0 1-.476.09.62.62 0 0 1-.399-.28l-.364-.584a26.338 26.338 0 0 1 2.317-1.592Zm4.188-7.824a.625.625 0 0 1 0-.884l1.531-1.53a.625.625 0 0 1 .884.883l-1.531 1.531a.623.623 0 0 1-.884 0Zm-1.964-2.046.375-1.125A.625.625 0 0 1 13 1.823l-.375 1.125a.625.625 0 1 1-1.186-.396Zm5.13 3.636-1.157.375a.623.623 0 0 1-.787-.401.625.625 0 0 1 .402-.788L16.182 5a.625.625 0 1 1 .386 1.19Z"
                            fill="#000"
                          />
                        </svg>
                        <Text as="h1" variant="headingMd" fontWeight="semibold">
                          Affiliate
                        </Text>
                      </div>

                      <div className="program-toggle-right">
                        <label className="toggle-switch">
                          <input type="checkbox" defaultChecked />
                          <span className="slider round"></span>
                        </label>
                      </div>
                    </div>
                  </div>
                </div>

                <Box paddingBlockStart="500">
                  <div className="translations-content">
                    <div className="translations-text">
                      <Text as="h1" variant="headingMd">
                        Translations
                      </Text>
                      <Text as="p" variant="bodyLg">
                        You can customize and translate the response or error
                        messages.
                      </Text>
                    </div>
                    <Card>
                      <Button variant="secondary" size="large">
                        Manage Translation
                      </Button>
                    </Card>
                  </div>
                </Box>
                <Box paddingBlockStart="500">
                  <div className="dashboard-content">
                    <div className="dashboard-text">
                      <Text as="h1" variant="headingMd">
                        Referrer / Affiliate dashboard
                      </Text>
                      <div className="referral-text">
                      <Text as="p" variant="bodyLg">
                        Let your referrer / affiliates (referring persons) to
                        see their earned rewards, referrals, referral sales and
                        commissions.
                      </Text>
                      </div>
                    </div>
                    <Card>
                      <div className="dashboard-link-container">
                        <div className="dashboard-link">
                          <Text as="p" variant="bodyLg">
                            https://cart424.myshopify.com/a/shopjar-referral/my-account
                          </Text>
                        </div>
                        <button
                          onClick={handleCopyLink}
                          className="copy-link-button"
                        >
                          <svg
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            stroke="#5A5D72"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M16 12.9v4.2c0 3.5-1.4 4.9-4.9 4.9H6.9C3.4 22 2 20.6 2 17.1v-4.2C2 9.4 3.4 8 6.9 8h4.2c3.5 0 4.9 1.4 4.9 4.9Z"
                              stroke="inherit"
                            ></path>
                            <path
                              d="M22 6.9v4.2c0 3.5-1.4 4.9-4.9 4.9H16v-3.1C16 9.4 14.6 8 11.1 8H8V6.9C8 3.4 9.4 2 12.9 2h4.2C20.6 2 22 3.4 22 6.9Z"
                              stroke="inherit"
                            ></path>
                          </svg>
                        </button>
                      </div>
                      <Button variant="secondary" size="large">
                        Customize Referrer / Affliate dashboard page
                      </Button>
                    </Card>
                  </div>
                </Box>

                <Box paddingBlockStart="500">
                  <div className="dashboard-content">
                    <div className="dashboard-text">
                      <Text as="h1" variant="headingMd">
                        Cookie Validity
                      </Text>
                      <Text as="p" variant="bodyLg">
                        Set the maximum validity of the cookie
                      </Text>
                    </div>
                    <Card>
                      <div className="dashboard-link-container">
                        <InlineStack gap="400" align="center">
                          <div className="cookie-text">
                            <Text as="p" variant="bodyLg">
                              Number of days
                            </Text>
                            <div className="cookie-textfield">
                              <TextField
                                label=""
                                type="number"
                                value={cookieValidity.toString()}
                                onChange={handleCookieValidityChange}
                                min={1}
                                max={365}
                                autoComplete="off"
                              />
                            </div>
                          </div>
                        </InlineStack>
                      </div>
                    </Card>
                  </div>
                </Box>

                <Box paddingBlockStart="500">
                  <div className="dashboard-content">
                    <div className="dashboard-text">
                      <Text as="h1" variant="headingMd">
                        Allow Guest Login via an Email OTP
                      </Text>
                      <div className="guest-login">
                      <div className="referral-text">
                        <Text as="p" variant="bodyLg">
                          Enable a seamless experience for your Referral &
                          Affiliate program members / referrer / affiliates to
                          login to their dashboard using an One-time-passcode
                          (OTP). When enabled, a one-time-passcode will be
                          generated and emailed to the affiliate / referral
                          members when accessing their dashboard. They can just
                          enter the OTP to access their referrer / affiliate
                          dashboard to see their rewards and commissions.
                        </Text>
                        </div>
                      </div>
                    </div>
                    <Card>
                      <div className="OTP-card">
                        <InlineStack gap="200">
                          <Checkbox
                            label=""
                            checked={isOtpEnabled}
                            onChange={handleOtpToggle}
                          />
                          <div className="otp-text">
                            <Text as="p" variant="bodyLg">
                              OTP Login?
                            </Text>
                          </div>
                          <Button variant="secondary" size="large">
                            Customize OTP Email
                          </Button>
                          <Button variant="secondary" size="large">
                            Customize OTP Page
                          </Button>
                        </InlineStack>
                      </div>
                    </Card>
                  </div>
                </Box>

                <Box paddingBlockStart="500">
                  <div className="dashboard-content">
                    <div className="dashboard-text">
                      <Text as="h1" variant="headingMd">
                        Calculate Reward or Commission from
                      </Text>
                      <div className="referral-text">
                      <Text as="p" variant="bodyLg">
                        Choose whether the affiliate commission should be
                        calculated with or without shipping & taxes.
                      </Text>
                      </div>
                    </div>
                    <Card>
                      <div className="select-width">
                        <Select
                          label=""
                          options={options}
                          onChange={handleSelectChange}
                          value={dropselected}
                        />
                      </div>
                    </Card>
                  </div>
                </Box>

                <Box paddingBlockStart="500">
                <div className="dashboard-content">
  <div className="dashboard-text">
    <Text as="h1" variant="headingMd">
      Enable Referral And Affiliate Sale Tag
    </Text>
    <div className="referral-text">
      <Text as="p" variant="bodyLg">
        This setting will allow referral and affiliate sales to
        be tagged as 'Referral and Affiliate Sale - Shopjar'.
      </Text>
    </div>
  </div>
  <div className="enable-referrer">
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
        {isReferralSaleTagEnabled ? 'Enabled' : 'Disabled'}
      </span>
    </div>
  </div>
</div>
                </Box>
              </Box>
            )}

            {selected === 1 && (
              <Box>
                <EmailDomain/>
              </Box>
            )}
            {selected === 2 && (
              <Box>
                <Integration/>
              </Box>
            )}
            {selected === 3 && (
              <Box>
                <Advanced/>
              </Box>
            )}

            {isCopied && (
              <Toast content="Copied!" onDismiss={() => setIsCopied(false)} />
            )}
          </Box>
        </Card>
      </Page>
    </Frame>
  );
};

export default SettingsPage;