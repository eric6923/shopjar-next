import React, { useState } from "react";
import {
  Button,
  ButtonGroup,
  Icon,
  InlineGrid,
  InlineStack,
  Text,
  Card,
  Box,
  Collapsible,
  TextField,
  Divider,
  Tabs,
  LegacyCard,
  DataTable,
  Page,
  Grid,
} from "@shopify/polaris";
import {
  ArrowLeftIcon,
  ChevronDownIcon,
  ChevronUpIcon,
  ExitIcon,
} from "@shopify/polaris-icons";
import router from "next/router";

export default function Customize() {
  // State for collapsible sections
  const [isPageTitleOpen, setIsPageTitleOpen] = useState(false);
  const [isReferralOpen, setIsReferralOpen] = useState(false);
  const [isStatsOpen, setIsStatsOpen] = useState(false);
  const [isRewardOpen, setIsRewardOpen] = useState(false);
  const [isMessagesOpen, setIsMessagesOpen] = useState(false);
  const [isCustomcssOpen, setIsCustomcssOpen] = useState(false);

  const [isAstatsOpen, setAstatsOpen] = useState(false);
  const [isAcouponsOpen, setAcouponsOpen] = useState(false);
  const [isApaypalOpen, setApaypalOpen] = useState(false);
  const [isACTransactionOpen, setACTransactionOpen] = useState(false);
  const [isACCouponOpen, setACCouponOpen] = useState(false);
  const [isAMessageOpen, setAMessageOpen] = useState(false);
  const [isACustomcssOpen, setACustomcssOpen] = useState(false);
  // State for tabs
  const [selectedTab, setSelectedTab] = useState(0);

  // Tabs configuration
  const tabs = [
    {
      id: "referrer",
      content: "Send OTP",
      accessibilityLabel: "Referrer tab",
      panelID: "referrer-panel",
    },
    {
      id: "affiliate",
      content: "Verify OTP",
      accessibilityLabel: "Affiliate tab",
      panelID: "affiliate-panel",
    },
  ];

  // Collapsible toggle functions
  const togglePageTitleCollapsible = () => {
    setIsPageTitleOpen(!isPageTitleOpen);
  };
  const toggleReferralCollapsible = () => {
    setIsReferralOpen(!isReferralOpen);
  };
  const toggleStatsCollapsible = () => {
    setIsStatsOpen(!isStatsOpen);
  };
  const toggleRewardCollapsible = () => {
    setIsRewardOpen(!isRewardOpen);
  };
  const toggleMessagesCollapsible = () => {
    setIsMessagesOpen(!isMessagesOpen);
  };
  const toggleCustomcssCollapsible = () => {
    setIsCustomcssOpen(!isCustomcssOpen);
  };
  const toggleAstatsCollapsible = () => {
    setAstatsOpen(!isAstatsOpen);
  };
  const toggleAcouponsCollapsible = () => {
    setAcouponsOpen(!isAcouponsOpen);
  };
  const toggleApaypalCollapsible = () => {
    setApaypalOpen(!isApaypalOpen);
  };
  const toggleACTransactionCollapsible = () => {
    setACTransactionOpen(!isACTransactionOpen);
  };
  const toggleACCouponCollapsible = () => {
    setACCouponOpen(!isACCouponOpen);
  };
  const toggleAMessagesCollapsible = () => {
    setAMessageOpen(!isAMessageOpen);
  };
  const toggleACustomcssCollapsible = () => {
    setACustomcssOpen(!isACustomcssOpen);
  };

  // Handle tab change
  const handleTabChange = (selectedTabIndex: any) => {
    setSelectedTab(selectedTabIndex);
  };

  function handleLogout() {
    alert("Logout Functionality");
  }
  const rows = [["12-04-2025", "Raman", 124689, 140, "Pending"]];

  const rows2 = [["12-04-2025", 10000, "Pending"]];

  const rows3 = [["12-04-2025", "Ram", 1000, 1200, "Pending"]];
  // Render left grid content based on selected tab
  const renderLeftGridContent = () => {
    if (selectedTab === 0) {
      // Referrer tab
      return (
        <div className="box-fixed">
          <Box padding="400">
            <InlineStack align="space-between" blockAlign="center">
              <Text as="p" variant="bodyLg">
                PAGE TITLE
              </Text>

              <Button
                variant="monochromePlain"
                onClick={togglePageTitleCollapsible}
                ariaExpanded={isPageTitleOpen}
                size="large"
                className="chevron-icon"
                ariaControls="page-title-collapsible"
              >
                <Icon
                  source={isPageTitleOpen ? ChevronUpIcon : ChevronDownIcon}
                />
              </Button>
            </InlineStack>

            <Collapsible
              open={isPageTitleOpen}
              id="page-title-collapsible"
              transition={{
                duration: "500ms",
                timingFunction: "ease-in-out",
              }}
              style={{ overflow: "visible" }}
            >
              <Box padding="400" paddingInline="400">
                <div className="custom-textfield">
                  <TextField label="" autoComplete="off" />
                </div>
                <div className="custom-textfield">
                  <TextField label="Referral Tab title" autoComplete="off" />
                </div>
                <div className="custom-textfield">
                  <TextField label="Affliate Tab title" autoComplete="off" />
                </div>
                <div className="custom-textfield">
                  <TextField
                    label="Logout Text
"
                    autoComplete="off"
                  />
                </div>
              </Box>
            </Collapsible>
          </Box>
          <div className="divider">
            <Divider />
          </div>
          <Box padding="400">
            <InlineStack align="space-between" blockAlign="center">
              <div className="referral-link">
                <Text as="p" variant="bodyLg">
                  REFERRAL LINK
                </Text>
              </div>
              <div className="referral-button">
                <Button
                  variant="monochromePlain"
                  onClick={toggleReferralCollapsible}
                  ariaExpanded={isReferralOpen}
                  size="large"
                  className="chevron-icon"
                  ariaControls="referral-link-collapsible"
                >
                  <Icon
                    source={isReferralOpen ? ChevronUpIcon : ChevronDownIcon}
                  />
                </Button>
              </div>
            </InlineStack>

            <Collapsible
              open={isReferralOpen}
              id="referral-link-collapsible"
              transition={{
                duration: "500ms",
                timingFunction: "ease-in-out",
              }}
            >
              <Box padding="400" paddingInline="400">
                <div className="custom-textfield">
                  <TextField label="Referral link title" autoComplete="off" />
                </div>
                <div className="custom-textfield">
                  <TextField
                    label="Referral link share text"
                    autoComplete="off"
                  />
                </div>
              </Box>
            </Collapsible>
          </Box>
          <div className="divider">
            <Divider />
          </div>
          <Box padding="400">
            <InlineStack align="space-between" blockAlign="center">
              <div className="referral-link">
                <Text as="p" variant="bodyLg">
                  STATS
                </Text>
              </div>
              <div className="referral-button">
                <Button
                  variant="monochromePlain"
                  onClick={toggleStatsCollapsible}
                  ariaExpanded={isStatsOpen}
                  size="large"
                  className="chevron-icon"
                  ariaControls="page-title-collapsible"
                >
                  <Icon
                    source={isStatsOpen ? ChevronUpIcon : ChevronDownIcon}
                  />
                </Button>
              </div>
            </InlineStack>

            <Collapsible
              open={isStatsOpen}
              id="page-title-collapsible"
              transition={{
                duration: "500ms",
                timingFunction: "ease-in-out",
              }}
              style={{ overflow: "visible" }}
            >
              <Box padding="400" paddingInline="400">
                <div className="custom-textfield">
                  <TextField label="Total sales text" autoComplete="off" />
                </div>
                <div className="custom-textfield">
                  <TextField label="Total rewards text" autoComplete="off" />
                </div>
              </Box>
            </Collapsible>
          </Box>
          <div className="divider">
            <Divider />
          </div>
          <Box padding="400">
            <InlineStack align="space-between" blockAlign="center">
              <div className="referral-link">
                <Text as="p" variant="bodyLg">
                  REWARD HISTORY
                </Text>
              </div>
              <div className="referral-button">
                <Button
                  variant="monochromePlain"
                  onClick={toggleRewardCollapsible}
                  ariaExpanded={isRewardOpen}
                  size="large"
                  className="chevron-icon"
                  ariaControls="page-title-collapsible"
                >
                  <Icon
                    source={isRewardOpen ? ChevronUpIcon : ChevronDownIcon}
                  />
                </Button>
              </div>
            </InlineStack>

            <Collapsible
              open={isRewardOpen}
              id="page-title-collapsible"
              transition={{
                duration: "500ms",
                timingFunction: "ease-in-out",
              }}
              style={{ overflow: "visible" }}
            >
              <Box padding="400" paddingInline="400">
                <div className="custom-textfield">
                  <TextField label="Title" autoComplete="off" />
                </div>
                <div className="custom-textfield">
                  <TextField label="Date header" autoComplete="off" />
                </div>
                <div className="custom-textfield">
                  <TextField label="Customer header" autoComplete="off" />
                </div>
                <div className="custom-textfield">
                  <TextField label="Order Value header" autoComplete="off" />
                </div>
                <div className="custom-textfield">
                  <TextField label="Commission header" autoComplete="off" />
                </div>
                <div className="custom-textfield">
                  <TextField label="Status header" autoComplete="off" />
                </div>
                <div className="custom-textfield">
                  <TextField label="No rewards yet" autoComplete="off" />
                </div>
              </Box>
            </Collapsible>
          </Box>
          <div className="divider">
            <Divider />
          </div>
          <Box padding="400">
            <InlineStack align="space-between" blockAlign="center">
              <div className="referral-link">
                <Text as="p" variant="bodyLg">
                  MESSAGES
                </Text>
              </div>
              <div className="referral-button">
                <Button
                  variant="monochromePlain"
                  onClick={toggleMessagesCollapsible}
                  ariaExpanded={isMessagesOpen}
                  size="large"
                  className="chevron-icon"
                  ariaControls="page-title-collapsible"
                >
                  <Icon
                    source={isMessagesOpen ? ChevronUpIcon : ChevronDownIcon}
                  />
                </Button>
              </div>
            </InlineStack>

            <Collapsible
              open={isMessagesOpen}
              id="page-title-collapsible"
              transition={{
                duration: "500ms",
                timingFunction: "ease-in-out",
              }}
            >
              <Box padding="400" paddingInline="400">
                <div className="custom-textfield">
                  <TextField
                    label="Member blocked message"
                    autoComplete="off"
                  />
                </div>
                <div className="custom-textfield">
                  <TextField
                    label="Member programs disabled message"
                    autoComplete="off"
                  />
                </div>
              </Box>
            </Collapsible>
          </Box>
          <div className="divider">
            <Divider />
          </div>
          <Box padding="400">
            <InlineStack align="space-between" blockAlign="center">
              <div className="referral-link">
                <Text as="p" variant="bodyLg">
                  CUSTOM CSS
                </Text>
              </div>
              <div className="referral-button">
                <Button
                  variant="monochromePlain"
                  onClick={toggleCustomcssCollapsible}
                  ariaExpanded={isCustomcssOpen}
                  size="large"
                  className="chevron-icon"
                  ariaControls="page-title-collapsible"
                >
                  <Icon
                    source={isCustomcssOpen ? ChevronUpIcon : ChevronDownIcon}
                  />
                </Button>
              </div>
            </InlineStack>

            <Collapsible
              open={isCustomcssOpen}
              id="page-title-collapsible"
              transition={{
                duration: "500ms",
                timingFunction: "ease-in-out",
              }}
            >
              <Box padding="400" paddingInline="400">
                <div className="custom-textfield-customcss">
                  <TextField label="Custom css" autoComplete="off" />
                </div>
              </Box>
            </Collapsible>
          </Box>
        </div>
      );
    } else {
      // Affiliate tab
      return (
        <div className="affliate-fixed">
          <Box padding="400">
            <InlineStack align="space-between" blockAlign="center">
              <Text as="p" variant="bodyLg">
                PAGE TITLE
              </Text>

              <Button
                variant="monochromePlain"
                onClick={togglePageTitleCollapsible}
                ariaExpanded={isPageTitleOpen}
                size="large"
                className="chevron-icon"
                ariaControls="page-title-collapsible"
              >
                <Icon
                  source={isPageTitleOpen ? ChevronUpIcon : ChevronDownIcon}
                />
              </Button>
            </InlineStack>

            <Collapsible
              open={isPageTitleOpen}
              id="page-title-collapsible"
              transition={{
                duration: "500ms",
                timingFunction: "ease-in-out",
              }}
            >
              <Box padding="400" paddingInline="400">
                <div className="custom-textfield">
                  <TextField label="" autoComplete="off" />
                </div>
                <div className="custom-textfield">
                  <TextField label="Referral Tab title" autoComplete="off" />
                </div>
                <div className="custom-textfield">
                  <TextField label="Affiliate Tab title" autoComplete="off" />
                </div>
                <div className="custom-textfield">
                  <TextField label="Logout Text" autoComplete="off" />
                </div>
              </Box>
            </Collapsible>
          </Box>
          <div className="divider">
            <Divider />
          </div>
          <Box padding="400">
            <InlineStack align="space-between" blockAlign="center">
              <div className="referral-link">
                <Text as="p" variant="bodyLg">
                  AFFILIATE LINK
                </Text>
              </div>
              <div className="affiliate-button">
                <Button
                  variant="monochromePlain"
                  onClick={toggleReferralCollapsible}
                  ariaExpanded={isReferralOpen}
                  size="large"
                  className="chevron-icon"
                  ariaControls="affiliate-settings-collapsible"
                >
                  <Icon
                    source={isReferralOpen ? ChevronUpIcon : ChevronDownIcon}
                  />
                </Button>
              </div>
            </InlineStack>

            <Collapsible
              open={isReferralOpen}
              id="affiliate-settings-collapsible"
              transition={{
                duration: "500ms",
                timingFunction: "ease-in-out",
              }}
              style={{ overflow: "visible" }}
            >
              <Box padding="400" paddingInline="400">
                <div className="custom-textfield">
                  <TextField label="Affiliate link title" autoComplete="off" />
                </div>
                <div className="custom-textfield">
                  <TextField
                    label="Affiliate link share text"
                    autoComplete="off"
                  />
                </div>
              </Box>
            </Collapsible>
          </Box>
          <div className="divider">
            <Divider />
          </div>
          <Box padding="400">
            <InlineStack align="space-between" blockAlign="center">
              <div className="referral-link">
                <Text as="p" variant="bodyLg">
                  STATS
                </Text>
              </div>
              <div className="affiliate-button">
                <Button
                  variant="monochromePlain"
                  onClick={toggleAstatsCollapsible}
                  ariaExpanded={isAstatsOpen}
                  size="large"
                  className="chevron-icon"
                  ariaControls="affiliate-settings-collapsible"
                >
                  <Icon
                    source={isAstatsOpen ? ChevronUpIcon : ChevronDownIcon}
                  />
                </Button>
              </div>
            </InlineStack>

            <Collapsible
              open={isAstatsOpen}
              id="affiliate-settings-collapsible"
              transition={{
                duration: "500ms",
                timingFunction: "ease-in-out",
              }}
              style={{ overflow: "visible" }}
            >
              <Box padding="400" paddingInline="400">
                <div className="custom-textfield">
                  <TextField label="Total sales text" autoComplete="off" />
                </div>
                <div className="custom-textfield">
                  <TextField label="Total rewards text" autoComplete="off" />
                </div>
                <div className="custom-textfield">
                  <TextField
                    label="Commission Balance text"
                    autoComplete="off"
                  />
                </div>
                <div className="custom-textfield">
                  <TextField
                    label="Coupon claim button text"
                    autoComplete="off"
                  />
                </div>
                <div className="custom-textfield">
                  <TextField label="Total Earnings text" autoComplete="off" />
                </div>
                <div className="custom-textfield">
                  <TextField label="Total Paid text" autoComplete="off" />
                </div>
              </Box>
            </Collapsible>
          </Box>
          <div className="divider">
            <Divider />
          </div>
          <Box padding="400">
            <InlineStack align="space-between" blockAlign="center">
              <div className="referral-link">
                <Text as="p" variant="bodyLg">
                  YOUR AFFILIATE COUPONS
                </Text>
              </div>
              <div className="affiliate-button">
                <Button
                  variant="monochromePlain"
                  onClick={toggleAcouponsCollapsible}
                  ariaExpanded={isAcouponsOpen}
                  size="large"
                  className="chevron-icon"
                  ariaControls="affiliate-settings-collapsible"
                >
                  <Icon
                    source={isAcouponsOpen ? ChevronUpIcon : ChevronDownIcon}
                  />
                </Button>
              </div>
            </InlineStack>

            <Collapsible
              open={isAcouponsOpen}
              id="affiliate-settings-collapsible"
              transition={{
                duration: "500ms",
                timingFunction: "ease-in-out",
              }}
              style={{ overflow: "visible" }}
            >
              <Box padding="400" paddingInline="400">
                <div className="custom-textfield">
                  <TextField
                    label="Your Affiliate coupons title"
                    autoComplete="off"
                  />
                </div>
              </Box>
            </Collapsible>
          </Box>
          <div className="divider">
            <Divider />
          </div>
          <Box padding="400">
            <InlineStack align="space-between" blockAlign="center">
              <div className="referral-link">
                <Text as="p" variant="bodyLg">
                  PAYPAL ID
                </Text>
              </div>
              <div className="affiliate-button">
                <Button
                  variant="monochromePlain"
                  onClick={toggleApaypalCollapsible}
                  ariaExpanded={isApaypalOpen}
                  size="large"
                  className="chevron-icon"
                  ariaControls="affiliate-settings-collapsible"
                >
                  <Icon
                    source={isApaypalOpen ? ChevronUpIcon : ChevronDownIcon}
                  />
                </Button>
              </div>
            </InlineStack>

            <Collapsible
              open={isApaypalOpen}
              id="affiliate-settings-collapsible"
              transition={{
                duration: "500ms",
                timingFunction: "ease-in-out",
              }}
              style={{ overflow: "visible" }}
            >
              <Box padding="400" paddingInline="400">
                <div className="custom-textfield">
                  <TextField
                    label="Paypal Email label text"
                    autoComplete="off"
                  />
                </div>
                <div className="custom-textfield">
                  <TextField label="Confirm Button text" autoComplete="off" />
                </div>
                <div className="custom-textfield">
                  <TextField
                    label="PayPal Blocked Message"
                    autoComplete="off"
                  />
                </div>
                <div className="custom-textfield">
                  <TextField
                    label="Update Email Label Text"
                    autoComplete="off"
                  />
                </div>
                <div className="custom-textfield">
                  <TextField label="Update Button text" autoComplete="off" />
                </div>
              </Box>
            </Collapsible>
          </Box>
          <div className="divider">
            <Divider />
          </div>
          <Box padding="400">
            <InlineStack align="space-between" blockAlign="center">
              <div className="referral-link">
                <Text as="p" variant="bodyLg">
                  COMMISSIONS TRANSACTIONS
                </Text>
              </div>
              <div className="affiliate-button">
                <Button
                  variant="monochromePlain"
                  onClick={toggleACTransactionCollapsible}
                  ariaExpanded={isACTransactionOpen}
                  size="large"
                  className="chevron-icon"
                  ariaControls="affiliate-settings-collapsible"
                >
                  <Icon
                    source={
                      isACTransactionOpen ? ChevronUpIcon : ChevronDownIcon
                    }
                  />
                </Button>
              </div>
            </InlineStack>

            <Collapsible
              open={isACTransactionOpen}
              id="affiliate-settings-collapsible"
              transition={{
                duration: "500ms",
                timingFunction: "ease-in-out",
              }}
              style={{ overflow: "visible" }}
            >
              <Box padding="400" paddingInline="400">
                <div className="custom-textfield">
                  <TextField label="Commissions Title" autoComplete="off" />
                </div>
                <div className="custom-textfield">
                  <TextField label="Date Header" autoComplete="off" />
                </div>
                <div className="custom-textfield">
                  <TextField label="Amount Header" autoComplete="off" />
                </div>
                <div className="custom-textfield">
                  <TextField label="Reward type Header" autoComplete="off" />
                </div>
                <div className="custom-textfield">
                  <TextField
                    label="No commissions debit yet"
                    autoComplete="off"
                  />
                </div>
              </Box>
            </Collapsible>
          </Box>
          <div className="divider">
            <Divider />
          </div>
          <Box padding="400">
            <InlineStack align="space-between" blockAlign="center">
              <div className="referral-link">
                <Text as="p" variant="bodyLg">
                  COMMISSION COUPON CLAIM POPUP
                </Text>
              </div>
              <div className="affiliate-button">
                <Button
                  variant="monochromePlain"
                  onClick={toggleACCouponCollapsible}
                  ariaExpanded={isACCouponOpen}
                  size="large"
                  className="chevron-icon"
                  ariaControls="affiliate-settings-collapsible"
                >
                  <Icon
                    source={isACCouponOpen ? ChevronUpIcon : ChevronDownIcon}
                  />
                </Button>
              </div>
            </InlineStack>

            <Collapsible
              open={isACCouponOpen}
              id="affiliate-settings-collapsible"
              transition={{
                duration: "500ms",
                timingFunction: "ease-in-out",
              }}
              style={{ overflow: "visible" }}
            >
              <Box padding="400" paddingInline="400">
                <div className="custom-textfield">
                  <TextField label="Popup Title" autoComplete="off" />
                </div>
                <div className="custom-textfield">
                  <TextField label="Popup description" autoComplete="off" />
                </div>
                <div className="custom-textfield">
                  <TextField label="Button text" autoComplete="off" />
                </div>
                <div className="custom-textfield">
                  <TextField
                    label="Coupon Claim Success Message"
                    autoComplete="off"
                  />
                  <div className="value">
                    <Text as="p">
                      {"{{coupon_value:any}}"} -{">"} displays value of created
                      coupon
                    </Text>
                  </div>
                </div>
                <div className="custom-textfield">
                  <TextField
                    label="Coupon Claim Failed Message"
                    autoComplete="off"
                  />
                </div>
              </Box>
            </Collapsible>
          </Box>
          <div className="divider">
            <Divider />
          </div>
          <Box padding="400">
            <InlineStack align="space-between" blockAlign="center">
              <div className="referral-link">
                <Text as="p" variant="bodyLg">
                  MESSAGES
                </Text>
              </div>
              <div className="affiliate-button">
                <Button
                  variant="monochromePlain"
                  onClick={toggleAMessagesCollapsible}
                  ariaExpanded={isAMessageOpen}
                  size="large"
                  className="chevron-icon"
                  ariaControls="affiliate-settings-collapsible"
                >
                  <Icon
                    source={isAMessageOpen ? ChevronUpIcon : ChevronDownIcon}
                  />
                </Button>
              </div>
            </InlineStack>

            <Collapsible
              open={isAMessageOpen}
              id="affiliate-settings-collapsible"
              transition={{
                duration: "500ms",
                timingFunction: "ease-in-out",
              }}
              style={{ overflow: "visible" }}
            >
              <Box padding="400" paddingInline="400">
                <div className="custom-textfield">
                  <TextField
                    label="Member blocked message"
                    autoComplete="off"
                  />
                </div>
                <div className="custom-textfield">
                  <TextField
                    label="Member programs disabled message"
                    autoComplete="off"
                  />
                </div>
              </Box>
            </Collapsible>
          </Box>
          <div className="divider">
            <Divider />
          </div>
          <Box padding="400">
            <InlineStack align="space-between" blockAlign="center">
              <div className="referral-link">
                <Text as="p" variant="bodyLg">
                  CUSTOM CSS
                </Text>
              </div>
              <div className="affiliate-button">
                <Button
                  variant="monochromePlain"
                  onClick={toggleACustomcssCollapsible}
                  ariaExpanded={isACustomcssOpen}
                  size="large"
                  className="chevron-icon"
                  ariaControls="affiliate-settings-collapsible"
                >
                  <Icon
                    source={isACustomcssOpen ? ChevronUpIcon : ChevronDownIcon}
                  />
                </Button>
              </div>
            </InlineStack>

            <Collapsible
              open={isACustomcssOpen}
              id="affiliate-settings-collapsible"
              transition={{
                duration: "500ms",
                timingFunction: "ease-in-out",
              }}
              style={{ overflow: "visible" }}
            >
              <Box padding="400" paddingInline="400">
                <div className="custom-textfield">
                  <TextField label="Custom css" autoComplete="off" />
                </div>
              </Box>
            </Collapsible>
          </Box>
        </div>
      );
    }
  };

  // Render right grid content based on selected tab
  const renderRightGridContent = () => {
    if (selectedTab === 0) {
      // Send OTP tab
      return (
        <Box padding="400">
            <div className="send-otp-text">
            <Text as="h6" variant="headingLg">Login to referrer / affiliate dashboard</Text>
            </div>
            <div className="send-otp-text2">
            <Text as="p" variant="bodyLg">Please enter your email address to receive the one-time verification code. NOTE: You will receive the code only if you are an approved member of our referral / affiliate program.</Text>
            </div>
            <div className="send-otp-textfield">
            <TextField label="Your Email address" placeholder="Enter your email address" autoComplete="off"></TextField>
            </div>
            <div className="send-otp-btn">
            <Button variant="primary" size="large">Send verification code</Button>
            </div>
            <div className="send-otp-text3">
            <Text as="p" variant="bodyLg">Become an referral member</Text>
            </div>
            <div className="send-otp-text4">
            <Text as="p"variant="bodyLg">Become an affiliate member</Text>
            </div>
            <div className="send-otp-text5">
            <Text as="p" variant="bodyLg">Login</Text>
            </div>
        </Box>
      );
    } else {
      // Verify OTP tab
      return (
        <Box padding="400">
         
        </Box>
      );
    }
  };

  return (
    <div>
      {/* Navigation and Header Section */}
      <div className="translation-icon">
        <Button variant="secondary" onClick={() => router.push("/settings")}>
          <Icon source={ArrowLeftIcon} tone="base" />
        </Button>
      </div>

      <div className="translation-text1">
        <Text as="h1" variant="headingLg">      
            Customize OTP Page
        </Text>
      </div>

      <div className="translation-buttongroup">
        <ButtonGroup>
          <Button size="large">Cancel</Button>
          <Button variant="primary" size="large">
            Save
          </Button>
        </ButtonGroup>
      </div>

      {/* Inline Grid Section */}
      <Box padding="600" paddingBlockStart="400">
        <div
          style={{
            maxWidth: "1800px",
            margin: "0 auto",
            minHeight: "60vh",
          }}
        >
          <InlineGrid columns={["oneThird", "twoThirds"]} gap="400">
            {/* Left Box Content */}
            <Card>{renderLeftGridContent()}</Card>

            {/* Right Box Content */}
            <Card>
              <Box padding="400">
                <Tabs
                  tabs={tabs}
                  selected={selectedTab}
                  onSelect={handleTabChange}
                />
                {renderRightGridContent()}
              </Box>
            </Card>
          </InlineGrid>
        </div>
      </Box>
    </div>
  );
}
