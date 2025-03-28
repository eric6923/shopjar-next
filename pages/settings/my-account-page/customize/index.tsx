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
      content: "Referrer",
      accessibilityLabel: "Referrer tab",
      panelID: "referrer-panel",
    },
    {
      id: "affiliate",
      content: "Affiliate",
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
  const rows = [
    ['12-04-2025', 'Raman', 124689, 140, 'Pending'],
  ];

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
      // Referrer tab
      return (
        <Box padding="400">
          <div className="referral-card-total">
          <div className="referral-card1">
            <Card>
              <div className="referral-card1-text1">
                <Text as="p" variant="bodySm">
                  Referral link
                </Text>
              </div>
              <TextField
                suffix={
                  <div className="copy-icon">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M16 12.9V17.1C16 20.6 14.6 22 11.1 22H6.9C3.4 22 2 20.6 2 17.1V12.9C2 9.4 3.4 8 6.9 8H11.1C14.6 8 16 9.4 16 12.9Z"
                        stroke="#ffffff"
                        stroke-width="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                      <path
                        d="M22 6.9V11.1C22 14.6 20.6 16 17.1 16H16V12.9C16 9.4 14.6 8 11.1 8H8V6.9C8 3.4 9.4 2 12.9 2H17.1C20.6 2 22 3.4 22 6.9Z"
                        stroke="#ffffff"
                        stroke-width="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </svg>
                  </div>
                }
              ></TextField>
              <div className="referral-card1-text2">
                <Text as="p" variant="bodySm">
                  Share your referral link
                </Text>
              </div>
              <div
                className="cf_ram_my_account_share_block"
                style={{
                  display: "flex",
                  justifyContent: "start",
                  gap: "10px",
                  marginTop: "8px",
                }}
              >
                {/* Facebook Icon */}
                <div className="cf_ram_my_account_share_link">
                  <svg
                    width="34"
                    height="34"
                    viewBox="0 0 46 46"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M23 46C35.7025 46 46 35.7025 46 23C46 10.2975 35.7025 0 23 0C10.2975 0 0 10.2975 0 23C0 35.7025 10.2975 46 23 46Z"
                      fill="#334C8C"
                    />
                    <path
                      d="M28.8285 20.8241L28.4471 24.0259C28.4307 24.1746 28.3597 24.312 28.2479 24.4115C28.1362 24.511 27.9915 24.5655 27.8419 24.5646H24.5129V34.0672C24.5137 34.1807 24.4697 34.2899 24.3903 34.3709C24.3109 34.452 24.2027 34.4984 24.0892 34.5H20.6967C20.6403 34.4992 20.5846 34.4873 20.5328 34.465C20.4809 34.4427 20.434 34.4103 20.3946 34.3699C20.3553 34.3294 20.3243 34.2816 20.3034 34.2291C20.2826 34.1767 20.2723 34.1206 20.2731 34.0642L20.2912 24.5646H17.7703C17.6098 24.5646 17.4558 24.5008 17.3423 24.3873C17.2288 24.2738 17.165 24.1199 17.165 23.9593V20.7575C17.165 20.597 17.2288 20.443 17.3423 20.3295C17.4558 20.216 17.6098 20.1522 17.7703 20.1522H20.2761V17.0472C20.2761 13.455 22.4127 11.5 25.5419 11.5H28.1052C28.2657 11.5 28.4196 11.5638 28.5332 11.6773C28.6467 11.7908 28.7104 11.9447 28.7104 12.1053V14.8017C28.7104 14.9622 28.6467 15.1162 28.5332 15.2297C28.4196 15.3432 28.2657 15.407 28.1052 15.407H26.5345C24.8337 15.4342 24.5129 16.2483 24.5129 17.4649V20.1432H28.2383C28.3233 20.1446 28.4071 20.164 28.4841 20.1999C28.5611 20.2359 28.6297 20.2877 28.6853 20.3519C28.741 20.4162 28.7825 20.4914 28.8072 20.5728C28.8319 20.6541 28.8391 20.7397 28.8285 20.8241Z"
                      fill="white"
                    />
                  </svg>
                </div>

                {/* Twitter/X Icon */}
                <div className="cf_ram_my_account_share_link">
                  <svg
                    width="34"
                    height="34"
                    viewBox="0 0 32 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_4365_24222)">
                      <mask
                        id="mask0_4365_24222"
                        style={{ maskType: "luminance" }}
                        maskUnits="userSpaceOnUse"
                        x="0"
                        y="0"
                        width="32"
                        height="32"
                      >
                        <path d="M32 0H0V32H32V0Z" fill="white" />
                      </mask>
                      <g mask="url(#mask0_4365_24222)">
                        <path
                          d="M16 0C7.16375 0 0 7.16375 0 16C0 24.8363 7.16375 32 16 32C24.8363 32 32 24.8363 32 16C32 7.16375 24.8363 0 16 0Z"
                          fill="black"
                        />
                        <path
                          d="M17.3319 14.928L22.5437 9H21.3087L16.7833 14.1473L13.1688 9H9L14.4657 16.7835L9 23H10.2351L15.014 17.5644L18.8312 23H23L17.3316 14.928H17.3319ZM10.6801 9.9098H12.5772L21.3092 22.1316H19.4122L10.6801 9.9098Z"
                          fill="white"
                        />
                      </g>
                    </g>
                    <defs>
                      <clipPath id="clip0_4365_24222">
                        <rect width="32" height="32" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </div>

                {/* WhatsApp Icon */}
                <div className="cf_ram_my_account_share_link">
                  <svg
                    width="34"
                    height="34"
                    viewBox="0 0 46 46"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M23 46C35.7025 46 46 35.7025 46 23C46 10.2975 35.7025 0 23 0C10.2975 0 0 10.2975 0 23C0 35.7025 10.2975 46 23 46Z"
                      fill="#2AA81A"
                    />
                    <path
                      d="M31.1138 14.8863C29.2 12.9507 26.6571 11.7632 23.9444 11.5381C21.2318 11.313 18.528 12.0652 16.3213 13.6589C14.1145 15.2525 12.5503 17.5826 11.911 20.2285C11.2716 22.8744 11.5993 25.6616 12.8349 28.0871L11.6244 33.9642C11.6114 34.0229 11.6109 34.0836 11.6229 34.1425C11.6349 34.2014 11.6591 34.2572 11.694 34.3061C11.7439 34.3803 11.8153 34.4374 11.8986 34.4698C11.9819 34.5023 12.0731 34.5085 12.16 34.4877L17.91 33.1229C20.3288 34.326 23.0961 34.6319 25.7192 33.986C28.3424 33.34 30.6512 31.7843 32.2348 29.5956C33.8184 27.4069 34.574 24.7273 34.367 22.0337C34.1601 19.3401 33.0041 16.8074 31.1048 14.8863H31.1138ZM29.3162 29.2219C27.9926 30.5432 26.2881 31.4164 24.4425 31.7188C22.5968 32.0212 20.7028 31.7375 19.0267 30.9076L18.2217 30.5081L14.69 31.3434V31.298L15.4345 27.736L15.0411 26.9613C14.1841 25.2807 13.8815 23.3718 14.1767 21.5085C14.472 19.6453 15.3498 17.9235 16.6844 16.5901C18.3601 14.9161 20.6317 13.9759 23.0003 13.9759C25.3688 13.9759 27.6405 14.9161 29.3162 16.5901L29.3556 16.6446C31.0095 18.3238 31.9327 20.5887 31.9242 22.9456C31.9157 25.3026 30.9761 27.5607 29.3102 29.228L29.3162 29.2219Z"
                      fill="white"
                    />
                    <path
                      d="M29.0047 26.631C28.5719 27.3119 27.885 28.1442 27.0285 28.353C25.5154 28.7162 23.2123 28.353 20.3283 25.6868L20.292 25.6535C17.7831 23.3112 17.1173 21.3592 17.2656 19.8127C17.3534 18.9321 18.0858 18.1392 18.7031 17.6187C18.8013 17.5359 18.9174 17.4772 19.0423 17.4474C19.1672 17.4175 19.2973 17.4173 19.4223 17.4467C19.5473 17.4761 19.6636 17.5343 19.7621 17.6167C19.8606 17.6991 19.9384 17.8034 19.9893 17.9213L20.9184 20.0216C20.9791 20.1567 21.0018 20.3059 20.9842 20.453C20.9666 20.6002 20.9093 20.7397 20.8185 20.8568L20.3464 21.4621C20.2483 21.5877 20.1898 21.7398 20.1785 21.8988C20.1672 22.0578 20.2035 22.2166 20.2829 22.3548C20.7313 23.0158 21.2679 23.6124 21.8777 24.1283C22.5339 24.7597 23.278 25.2928 24.087 25.711C24.2346 25.7705 24.3966 25.7847 24.5524 25.7519C24.7081 25.719 24.8506 25.6405 24.9616 25.5264L25.5033 24.9756C25.6063 24.8648 25.7381 24.7846 25.8839 24.744C26.0297 24.7034 26.1839 24.704 26.3295 24.7456L28.5387 25.3781C28.6638 25.4138 28.7789 25.4783 28.8745 25.5667C28.9701 25.655 29.0435 25.7646 29.0889 25.8866C29.1343 26.0086 29.1503 26.1395 29.1357 26.2689C29.121 26.3982 29.0762 26.5222 29.0047 26.631Z"
                      fill="white"
                    />
                  </svg>
                </div>

                {/* Email Icon */}
                <div className="cf_ram_my_account_share_link">
                  <svg
                    width="34"
                    height="34"
                    viewBox="0 0 46 46"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M23 46C35.7025 46 46 35.7025 46 23C46 10.2975 35.7025 0 23 0C10.2975 0 0 10.2975 0 23C0 35.7025 10.2975 46 23 46Z"
                      fill="#EA4335"
                    />
                    <path
                      d="M24.0308 26.1872C23.7981 26.3326 23.5363 26.3908 23.3036 26.3908C23.0709 26.3908 22.8091 26.3326 22.5764 26.1872L11 19.1191V28.5141C11 30.5211 12.6288 32.1499 14.6358 32.1499H32.0005C34.0075 32.1499 35.6363 30.5211 35.6363 28.5141V19.1191L24.0308 26.1872Z"
                      fill="white"
                    />
                    <path
                      d="M32.0013 14H14.6367C12.9206 14 11.4662 15.2216 11.1172 16.8505L23.3335 24.2966L35.5208 16.8505C35.1718 15.2216 33.7174 14 32.0013 14Z"
                      fill="white"
                    />
                  </svg>
                </div>
              </div>
            </Card>
          </div>

          {/* Second Card */}
          <div className="refferer-2ndcard">
          <Card>
            <div className="referrer-2ndcard-inside">
            <svg
              width="50"
              height="50"
              viewBox="0 0 50 50"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="text-blue-500"
            >
              <g clipPath="url(#clip0_817_11497)">
                <path
                  d="M48.5348 50H1.46483C0.655854 50 0 49.3441 0 48.5351C0 47.7262 0.655854 47.0703 1.46483 47.0703H48.5348C49.3438 47.0703 49.9996 47.7262 49.9996 48.5351C49.9996 49.3441 49.3438 50 48.5348 50Z"
                  fill="currentColor"
                ></path>
                <path
                  d="M10.3515 49.9999H4.49218C3.6832 49.9999 3.02734 49.344 3.02734 48.5351V37.7929C3.02734 36.4468 4.12255 35.3516 5.46873 35.3516H9.37495C10.7211 35.3516 11.8163 36.4468 11.8163 37.7929V48.5351C11.8163 49.344 11.1605 49.9999 10.3515 49.9999ZM5.95701 47.0702H8.88667V38.2812H5.95701V47.0702ZM9.37495 38.2812H9.37593H9.37495Z"
                  fill="currentColor"
                ></path>
                <path
                  d="M22.0703 49.9999H16.2109C15.4019 49.9999 14.7461 49.344 14.7461 48.535V34.2773C14.7461 32.9311 15.8413 31.8359 17.1875 31.8359H21.0937C22.4399 31.8359 23.5351 32.9311 23.5351 34.2773V48.535C23.5351 49.344 22.8792 49.9999 22.0703 49.9999ZM17.6758 47.0702H20.6054V34.7656H17.6758V47.0702ZM21.0937 34.7656H21.0947H21.0937Z"
                  fill="currentColor"
                ></path>
                <path
                  d="M33.789 49.9998H27.9297C27.1207 49.9998 26.4648 49.344 26.4648 48.535V28.9062C26.4648 27.5601 27.5601 26.4648 28.9062 26.4648H32.8125C34.1586 26.4648 35.2538 27.5601 35.2538 28.9062V48.535C35.2538 49.344 34.598 49.9998 33.789 49.9998ZM29.3945 47.0702H32.3242V29.3945H29.3945V47.0702ZM32.8125 29.3945H32.8134H32.8125Z"
                  fill="currentColor"
                ></path>
                <path
                  d="M45.5078 49.9997H39.6484C38.8394 49.9997 38.1836 49.3439 38.1836 48.5349V19.1406C38.1836 17.7944 39.2788 16.6992 40.625 16.6992H44.5312C45.8774 16.6992 46.9726 17.7944 46.9726 19.1406V48.5349C46.9726 49.3439 46.3167 49.9997 45.5078 49.9997ZM41.1133 47.0701H44.0429V19.6289H41.1133V47.0701ZM44.5312 19.6289H44.5322H44.5312Z"
                  fill="currentColor"
                ></path>
                <path
                  d="M1.46483 31.4748C0.655854 31.4748 0 30.819 0 30.01C0 29.201 0.655854 28.5452 1.46483 28.5452C10.0786 28.5452 19.4573 25.4085 27.8729 19.7129C35.6152 14.4732 41.7844 7.6041 44.7989 0.866946C45.1293 0.128476 45.9958 -0.202381 46.7342 0.128183C47.4727 0.458551 47.8034 1.32505 47.473 2.06352C44.2419 9.28485 37.6965 16.6022 29.515 22.1391C20.6197 28.1593 10.6578 31.4748 1.46483 31.4748Z"
                  fill="#4D77FF"
                ></path>
                <path
                  d="M48.5338 11.8824C47.8869 11.8824 47.2951 11.4508 47.1198 10.7963L45.1002 3.25917L37.5631 5.27878C36.7813 5.48835 35.9784 5.02448 35.769 4.24304C35.5597 3.4616 36.0233 2.65839 36.8048 2.44902L45.7568 0.0503034C46.5386 -0.159168 47.3415 0.304696 47.5509 1.08604L49.9496 10.0381C50.159 10.8196 49.6953 11.6228 48.9138 11.8321C48.7868 11.8661 48.6593 11.8824 48.5338 11.8824Z"
                  fill="#4D77FF"
                ></path>
              </g>
              <defs>
                <clipPath id="clip0_817_11497">
                  <rect width="50" height="50" fill="white"></rect>
                </clipPath>
              </defs>
            </svg>
            <div className="referrer-2ndcard-text1">
            <Text as="p" variant="bodyLg">Total Sales</Text>
            </div>
            <div className="referrer-2ndcard-text2">
            <Text as="h1" variant="headingLg">1</Text>
            </div>
            </div>
          </Card>
          </div>

          {/* Third Card */}
          <div className="referrer-3rdcard">
          <Card>
          <div className="referrer-2ndcard-inside">
        <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M50 29.707V48.5352C50 49.3458 49.3458 50 48.5352 50H9.30672C6.7482 50 4.70695 47.9198 4.70695 45.4002V24.8924H4.59976C2.08969 24.8924 0 22.8615 0 20.293V18.7206C0 16.1522 2.08969 14.1212 4.59976 14.1212H11.5135C10.2051 12.627 9.41391 10.664 9.41391 8.52547C9.41391 3.82805 13.2423 0 17.9394 0C20.8691 0 23.4669 1.49422 25 3.74985C26.5331 1.49422 29.1309 0 32.0606 0C36.7577 0 40.5861 3.82805 40.5861 8.52547C40.5861 10.6056 39.8438 12.5683 38.4865 14.1212H45.3907C47.9591 14.1212 49.9901 16.201 49.9901 18.7206V20.293C49.9901 22.8615 47.9103 24.8924 45.3907 24.8924H45.2831V28.2421H48.5352C49.3458 28.2421 50 28.8963 50 29.707ZM47.0703 47.0703V31.1718H18.623V47.0703H47.0703ZM47.0703 20.293V18.7206C47.0703 17.7929 46.3184 17.0509 45.4002 17.0509H26.4648V21.9627H45.4002C46.3184 21.9627 47.0703 21.2208 47.0703 20.293ZM42.3634 28.2421V24.8924H26.4648V28.2421H42.3634ZM36.0157 12.4805C37.0705 11.4258 37.6564 10.0197 37.6564 8.52547C37.6564 5.43938 35.1463 2.92969 32.0606 2.92969C28.9745 2.92969 26.4648 5.43938 26.4648 8.52547V14.1212H32.0606C33.5548 14.1212 34.9609 13.5353 36.0157 12.4805ZM23.5352 28.2421V24.8924H7.63664V45.3907C7.63664 45.8397 7.8125 46.2597 8.12492 46.5721C8.44727 46.8849 8.86726 47.0604 9.30672 47.0604H15.6837V29.707C15.6837 28.8963 16.338 28.2421 17.1486 28.2421H23.5352ZM23.5352 21.9627V17.0509H4.59976C3.67203 17.0509 2.92969 17.8028 2.92969 18.7206V20.293C2.92969 21.2208 3.68156 21.9627 4.59976 21.9627H23.5352ZM23.5352 14.1212V8.52547C23.5352 5.43938 21.0255 2.92969 17.9394 2.92969C14.8537 2.92969 12.3436 5.43938 12.3436 8.52547C12.3436 11.6112 14.8537 14.1212 17.9394 14.1212H23.5352Z" fill="currentColor"></path>
          <path d="M43.7207 35.9863V42.2657C43.7207 43.0763 43.0665 43.7305 42.2559 43.7305C41.4452 43.7305 40.791 43.0763 40.791 42.2657V35.9863C40.791 35.1757 41.4452 34.5215 42.2559 34.5215C43.0665 34.5215 43.7207 35.1757 43.7207 35.9863Z" fill="#4D77FF"></path>
          <path d="M32.8419 34.5215C35.381 34.5215 37.4413 36.5822 37.4413 39.1212C37.4413 41.6603 35.381 43.7206 32.8419 43.7206C30.3029 43.7206 28.2422 41.6603 28.2422 39.1212C28.2422 36.5822 30.3029 34.5215 32.8419 34.5215ZM34.5216 39.1212C34.5216 38.1935 33.7697 37.4512 32.8515 37.4512C31.9337 37.4512 31.1818 38.203 31.1818 39.1212C31.1818 40.0391 31.9337 40.7909 32.8515 40.7909C33.7697 40.7909 34.5216 40.0391 34.5216 39.1212Z" fill="#4D77FF"></path>
          <path d="M24.8926 35.9863V42.2657C24.8926 43.0763 24.2384 43.7305 23.4277 43.7305C22.6175 43.7305 21.9629 43.0763 21.9629 42.2657V35.9863C21.9629 35.1757 22.6175 34.5215 23.4277 34.5215C24.2384 34.5215 24.8926 35.1757 24.8926 35.9863Z" fill="#4D77FF"></path>
        </svg>
        <div className="referrer-3ndcard-text1">
            <Text as="p" variant="bodyLg">Total Rewards</Text>
            </div>
            <div className="referrer-2ndcard-text2">
            <Text as="h1" variant="headingLg">1</Text>
            </div>
            </div>
          </Card>
          </div>
          <div className="referrer-text-table">
          <Text as="p" variant="bodyMd">Reward / Commission History</Text>
          </div>
          <div className="referrer-table">
          <Card>
          <DataTable
            columnContentTypes={[
              'text',
              'numeric',
              'numeric',
              'numeric',
              'numeric',
            ]}
            headings={[
              'Date',
              'Customer',
              'Order Value',
              'Reward / Commission',
              'Status',
            ]}
            rows={rows}
          />
          </Card>
          </div>
          
          </div>
        </Box>
      );
    } else {
      // Affiliate tab
      return (
        <Box padding="400">
          <div className="referral-card-total">
          <div className="referral-card1">
            <Card>
              <div className="referral-card1-text1">
                <Text as="p" variant="bodySm">
                  Referral link
                </Text>
              </div>
              <TextField
                suffix={
                  <div className="copy-icon">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M16 12.9V17.1C16 20.6 14.6 22 11.1 22H6.9C3.4 22 2 20.6 2 17.1V12.9C2 9.4 3.4 8 6.9 8H11.1C14.6 8 16 9.4 16 12.9Z"
                        stroke="#ffffff"
                        stroke-width="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                      <path
                        d="M22 6.9V11.1C22 14.6 20.6 16 17.1 16H16V12.9C16 9.4 14.6 8 11.1 8H8V6.9C8 3.4 9.4 2 12.9 2H17.1C20.6 2 22 3.4 22 6.9Z"
                        stroke="#ffffff"
                        stroke-width="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </svg>
                  </div>
                }
              ></TextField>
              <div className="referral-card1-text2">
                <Text as="p" variant="bodySm">
                  Share your referral link
                </Text>
              </div>
              <div
                className="cf_ram_my_account_share_block"
                style={{
                  display: "flex",
                  justifyContent: "start",
                  gap: "10px",
                  marginTop: "8px",
                }}
              >
                {/* Facebook Icon */}
                <div className="cf_ram_my_account_share_link">
                  <svg
                    width="34"
                    height="34"
                    viewBox="0 0 46 46"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M23 46C35.7025 46 46 35.7025 46 23C46 10.2975 35.7025 0 23 0C10.2975 0 0 10.2975 0 23C0 35.7025 10.2975 46 23 46Z"
                      fill="#334C8C"
                    />
                    <path
                      d="M28.8285 20.8241L28.4471 24.0259C28.4307 24.1746 28.3597 24.312 28.2479 24.4115C28.1362 24.511 27.9915 24.5655 27.8419 24.5646H24.5129V34.0672C24.5137 34.1807 24.4697 34.2899 24.3903 34.3709C24.3109 34.452 24.2027 34.4984 24.0892 34.5H20.6967C20.6403 34.4992 20.5846 34.4873 20.5328 34.465C20.4809 34.4427 20.434 34.4103 20.3946 34.3699C20.3553 34.3294 20.3243 34.2816 20.3034 34.2291C20.2826 34.1767 20.2723 34.1206 20.2731 34.0642L20.2912 24.5646H17.7703C17.6098 24.5646 17.4558 24.5008 17.3423 24.3873C17.2288 24.2738 17.165 24.1199 17.165 23.9593V20.7575C17.165 20.597 17.2288 20.443 17.3423 20.3295C17.4558 20.216 17.6098 20.1522 17.7703 20.1522H20.2761V17.0472C20.2761 13.455 22.4127 11.5 25.5419 11.5H28.1052C28.2657 11.5 28.4196 11.5638 28.5332 11.6773C28.6467 11.7908 28.7104 11.9447 28.7104 12.1053V14.8017C28.7104 14.9622 28.6467 15.1162 28.5332 15.2297C28.4196 15.3432 28.2657 15.407 28.1052 15.407H26.5345C24.8337 15.4342 24.5129 16.2483 24.5129 17.4649V20.1432H28.2383C28.3233 20.1446 28.4071 20.164 28.4841 20.1999C28.5611 20.2359 28.6297 20.2877 28.6853 20.3519C28.741 20.4162 28.7825 20.4914 28.8072 20.5728C28.8319 20.6541 28.8391 20.7397 28.8285 20.8241Z"
                      fill="white"
                    />
                  </svg>
                </div>

                {/* Twitter/X Icon */}
                <div className="cf_ram_my_account_share_link">
                  <svg
                    width="34"
                    height="34"
                    viewBox="0 0 32 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_4365_24222)">
                      <mask
                        id="mask0_4365_24222"
                        style={{ maskType: "luminance" }}
                        maskUnits="userSpaceOnUse"
                        x="0"
                        y="0"
                        width="32"
                        height="32"
                      >
                        <path d="M32 0H0V32H32V0Z" fill="white" />
                      </mask>
                      <g mask="url(#mask0_4365_24222)">
                        <path
                          d="M16 0C7.16375 0 0 7.16375 0 16C0 24.8363 7.16375 32 16 32C24.8363 32 32 24.8363 32 16C32 7.16375 24.8363 0 16 0Z"
                          fill="black"
                        />
                        <path
                          d="M17.3319 14.928L22.5437 9H21.3087L16.7833 14.1473L13.1688 9H9L14.4657 16.7835L9 23H10.2351L15.014 17.5644L18.8312 23H23L17.3316 14.928H17.3319ZM10.6801 9.9098H12.5772L21.3092 22.1316H19.4122L10.6801 9.9098Z"
                          fill="white"
                        />
                      </g>
                    </g>
                    <defs>
                      <clipPath id="clip0_4365_24222">
                        <rect width="32" height="32" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </div>

                {/* WhatsApp Icon */}
                <div className="cf_ram_my_account_share_link">
                  <svg
                    width="34"
                    height="34"
                    viewBox="0 0 46 46"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M23 46C35.7025 46 46 35.7025 46 23C46 10.2975 35.7025 0 23 0C10.2975 0 0 10.2975 0 23C0 35.7025 10.2975 46 23 46Z"
                      fill="#2AA81A"
                    />
                    <path
                      d="M31.1138 14.8863C29.2 12.9507 26.6571 11.7632 23.9444 11.5381C21.2318 11.313 18.528 12.0652 16.3213 13.6589C14.1145 15.2525 12.5503 17.5826 11.911 20.2285C11.2716 22.8744 11.5993 25.6616 12.8349 28.0871L11.6244 33.9642C11.6114 34.0229 11.6109 34.0836 11.6229 34.1425C11.6349 34.2014 11.6591 34.2572 11.694 34.3061C11.7439 34.3803 11.8153 34.4374 11.8986 34.4698C11.9819 34.5023 12.0731 34.5085 12.16 34.4877L17.91 33.1229C20.3288 34.326 23.0961 34.6319 25.7192 33.986C28.3424 33.34 30.6512 31.7843 32.2348 29.5956C33.8184 27.4069 34.574 24.7273 34.367 22.0337C34.1601 19.3401 33.0041 16.8074 31.1048 14.8863H31.1138ZM29.3162 29.2219C27.9926 30.5432 26.2881 31.4164 24.4425 31.7188C22.5968 32.0212 20.7028 31.7375 19.0267 30.9076L18.2217 30.5081L14.69 31.3434V31.298L15.4345 27.736L15.0411 26.9613C14.1841 25.2807 13.8815 23.3718 14.1767 21.5085C14.472 19.6453 15.3498 17.9235 16.6844 16.5901C18.3601 14.9161 20.6317 13.9759 23.0003 13.9759C25.3688 13.9759 27.6405 14.9161 29.3162 16.5901L29.3556 16.6446C31.0095 18.3238 31.9327 20.5887 31.9242 22.9456C31.9157 25.3026 30.9761 27.5607 29.3102 29.228L29.3162 29.2219Z"
                      fill="white"
                    />
                    <path
                      d="M29.0047 26.631C28.5719 27.3119 27.885 28.1442 27.0285 28.353C25.5154 28.7162 23.2123 28.353 20.3283 25.6868L20.292 25.6535C17.7831 23.3112 17.1173 21.3592 17.2656 19.8127C17.3534 18.9321 18.0858 18.1392 18.7031 17.6187C18.8013 17.5359 18.9174 17.4772 19.0423 17.4474C19.1672 17.4175 19.2973 17.4173 19.4223 17.4467C19.5473 17.4761 19.6636 17.5343 19.7621 17.6167C19.8606 17.6991 19.9384 17.8034 19.9893 17.9213L20.9184 20.0216C20.9791 20.1567 21.0018 20.3059 20.9842 20.453C20.9666 20.6002 20.9093 20.7397 20.8185 20.8568L20.3464 21.4621C20.2483 21.5877 20.1898 21.7398 20.1785 21.8988C20.1672 22.0578 20.2035 22.2166 20.2829 22.3548C20.7313 23.0158 21.2679 23.6124 21.8777 24.1283C22.5339 24.7597 23.278 25.2928 24.087 25.711C24.2346 25.7705 24.3966 25.7847 24.5524 25.7519C24.7081 25.719 24.8506 25.6405 24.9616 25.5264L25.5033 24.9756C25.6063 24.8648 25.7381 24.7846 25.8839 24.744C26.0297 24.7034 26.1839 24.704 26.3295 24.7456L28.5387 25.3781C28.6638 25.4138 28.7789 25.4783 28.8745 25.5667C28.9701 25.655 29.0435 25.7646 29.0889 25.8866C29.1343 26.0086 29.1503 26.1395 29.1357 26.2689C29.121 26.3982 29.0762 26.5222 29.0047 26.631Z"
                      fill="white"
                    />
                  </svg>
                </div>

                {/* Email Icon */}
                <div className="cf_ram_my_account_share_link">
                  <svg
                    width="34"
                    height="34"
                    viewBox="0 0 46 46"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M23 46C35.7025 46 46 35.7025 46 23C46 10.2975 35.7025 0 23 0C10.2975 0 0 10.2975 0 23C0 35.7025 10.2975 46 23 46Z"
                      fill="#EA4335"
                    />
                    <path
                      d="M24.0308 26.1872C23.7981 26.3326 23.5363 26.3908 23.3036 26.3908C23.0709 26.3908 22.8091 26.3326 22.5764 26.1872L11 19.1191V28.5141C11 30.5211 12.6288 32.1499 14.6358 32.1499H32.0005C34.0075 32.1499 35.6363 30.5211 35.6363 28.5141V19.1191L24.0308 26.1872Z"
                      fill="white"
                    />
                    <path
                      d="M32.0013 14H14.6367C12.9206 14 11.4662 15.2216 11.1172 16.8505L23.3335 24.2966L35.5208 16.8505C35.1718 15.2216 33.7174 14 32.0013 14Z"
                      fill="white"
                    />
                  </svg>
                </div>
              </div>
            </Card>
          </div>
          <div className="grid-affliate">
          <Grid>
            
        <Grid.Cell columnSpan={{xs: 6, sm: 3, md: 3, lg: 3, xl: 3}}>
          <div className="grid1">
            <Card>
            <div className="affliate-card-2nd">
            <svg
              width="40"
              height="40"
              viewBox="0 0 50 50"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="text-blue-500"
            >
              <g clipPath="url(#clip0_817_11497)">
                <path
                  d="M48.5348 50H1.46483C0.655854 50 0 49.3441 0 48.5351C0 47.7262 0.655854 47.0703 1.46483 47.0703H48.5348C49.3438 47.0703 49.9996 47.7262 49.9996 48.5351C49.9996 49.3441 49.3438 50 48.5348 50Z"
                  fill="currentColor"
                ></path>
                <path
                  d="M10.3515 49.9999H4.49218C3.6832 49.9999 3.02734 49.344 3.02734 48.5351V37.7929C3.02734 36.4468 4.12255 35.3516 5.46873 35.3516H9.37495C10.7211 35.3516 11.8163 36.4468 11.8163 37.7929V48.5351C11.8163 49.344 11.1605 49.9999 10.3515 49.9999ZM5.95701 47.0702H8.88667V38.2812H5.95701V47.0702ZM9.37495 38.2812H9.37593H9.37495Z"
                  fill="currentColor"
                ></path>
                <path
                  d="M22.0703 49.9999H16.2109C15.4019 49.9999 14.7461 49.344 14.7461 48.535V34.2773C14.7461 32.9311 15.8413 31.8359 17.1875 31.8359H21.0937C22.4399 31.8359 23.5351 32.9311 23.5351 34.2773V48.535C23.5351 49.344 22.8792 49.9999 22.0703 49.9999ZM17.6758 47.0702H20.6054V34.7656H17.6758V47.0702ZM21.0937 34.7656H21.0947H21.0937Z"
                  fill="currentColor"
                ></path>
                <path
                  d="M33.789 49.9998H27.9297C27.1207 49.9998 26.4648 49.344 26.4648 48.535V28.9062C26.4648 27.5601 27.5601 26.4648 28.9062 26.4648H32.8125C34.1586 26.4648 35.2538 27.5601 35.2538 28.9062V48.535C35.2538 49.344 34.598 49.9998 33.789 49.9998ZM29.3945 47.0702H32.3242V29.3945H29.3945V47.0702ZM32.8125 29.3945H32.8134H32.8125Z"
                  fill="currentColor"
                ></path>
                <path
                  d="M45.5078 49.9997H39.6484C38.8394 49.9997 38.1836 49.3439 38.1836 48.5349V19.1406C38.1836 17.7944 39.2788 16.6992 40.625 16.6992H44.5312C45.8774 16.6992 46.9726 17.7944 46.9726 19.1406V48.5349C46.9726 49.3439 46.3167 49.9997 45.5078 49.9997ZM41.1133 47.0701H44.0429V19.6289H41.1133V47.0701ZM44.5312 19.6289H44.5322H44.5312Z"
                  fill="currentColor"
                ></path>
                <path
                  d="M1.46483 31.4748C0.655854 31.4748 0 30.819 0 30.01C0 29.201 0.655854 28.5452 1.46483 28.5452C10.0786 28.5452 19.4573 25.4085 27.8729 19.7129C35.6152 14.4732 41.7844 7.6041 44.7989 0.866946C45.1293 0.128476 45.9958 -0.202381 46.7342 0.128183C47.4727 0.458551 47.8034 1.32505 47.473 2.06352C44.2419 9.28485 37.6965 16.6022 29.515 22.1391C20.6197 28.1593 10.6578 31.4748 1.46483 31.4748Z"
                  fill="#4D77FF"
                ></path>
                <path
                  d="M48.5338 11.8824C47.8869 11.8824 47.2951 11.4508 47.1198 10.7963L45.1002 3.25917L37.5631 5.27878C36.7813 5.48835 35.9784 5.02448 35.769 4.24304C35.5597 3.4616 36.0233 2.65839 36.8048 2.44902L45.7568 0.0503034C46.5386 -0.159168 47.3415 0.304696 47.5509 1.08604L49.9496 10.0381C50.159 10.8196 49.6953 11.6228 48.9138 11.8321C48.7868 11.8661 48.6593 11.8824 48.5338 11.8824Z"
                  fill="#4D77FF"
                ></path>
              </g>
              <defs>
                <clipPath id="clip0_817_11497">
                  <rect width="50" height="50" fill="white"></rect>
                </clipPath>
              </defs>
            </svg>
            </div>
            <div className="affliate-card2-text">
            <Text as="p" variant="bodyMd">Total Sales</Text>
            </div>
            <div className="affliate-card2-text2">
            <Text as="h1" variant="headingLg">1</Text>
            </div>
            
            </Card>
           </div>
        </Grid.Cell>
       <div className="grid-sample1">
        <Grid.Cell columnSpan={{xs: 6, sm: 3, md: 3, lg: 3, xl: 3}}>
          <div className="grid2">
        <Card>
            <div className="affliate-card-2nd">
            <svg width="40" height="40" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M50 29.707V48.5352C50 49.3458 49.3458 50 48.5352 50H9.30672C6.7482 50 4.70695 47.9198 4.70695 45.4002V24.8924H4.59976C2.08969 24.8924 0 22.8615 0 20.293V18.7206C0 16.1522 2.08969 14.1212 4.59976 14.1212H11.5135C10.2051 12.627 9.41391 10.664 9.41391 8.52547C9.41391 3.82805 13.2423 0 17.9394 0C20.8691 0 23.4669 1.49422 25 3.74985C26.5331 1.49422 29.1309 0 32.0606 0C36.7577 0 40.5861 3.82805 40.5861 8.52547C40.5861 10.6056 39.8438 12.5683 38.4865 14.1212H45.3907C47.9591 14.1212 49.9901 16.201 49.9901 18.7206V20.293C49.9901 22.8615 47.9103 24.8924 45.3907 24.8924H45.2831V28.2421H48.5352C49.3458 28.2421 50 28.8963 50 29.707ZM47.0703 47.0703V31.1718H18.623V47.0703H47.0703ZM47.0703 20.293V18.7206C47.0703 17.7929 46.3184 17.0509 45.4002 17.0509H26.4648V21.9627H45.4002C46.3184 21.9627 47.0703 21.2208 47.0703 20.293ZM42.3634 28.2421V24.8924H26.4648V28.2421H42.3634ZM36.0157 12.4805C37.0705 11.4258 37.6564 10.0197 37.6564 8.52547C37.6564 5.43938 35.1463 2.92969 32.0606 2.92969C28.9745 2.92969 26.4648 5.43938 26.4648 8.52547V14.1212H32.0606C33.5548 14.1212 34.9609 13.5353 36.0157 12.4805ZM23.5352 28.2421V24.8924H7.63664V45.3907C7.63664 45.8397 7.8125 46.2597 8.12492 46.5721C8.44727 46.8849 8.86726 47.0604 9.30672 47.0604H15.6837V29.707C15.6837 28.8963 16.338 28.2421 17.1486 28.2421H23.5352ZM23.5352 21.9627V17.0509H4.59976C3.67203 17.0509 2.92969 17.8028 2.92969 18.7206V20.293C2.92969 21.2208 3.68156 21.9627 4.59976 21.9627H23.5352ZM23.5352 14.1212V8.52547C23.5352 5.43938 21.0255 2.92969 17.9394 2.92969C14.8537 2.92969 12.3436 5.43938 12.3436 8.52547C12.3436 11.6112 14.8537 14.1212 17.9394 14.1212H23.5352Z" fill="currentColor"></path>
          <path d="M43.7207 35.9863V42.2657C43.7207 43.0763 43.0665 43.7305 42.2559 43.7305C41.4452 43.7305 40.791 43.0763 40.791 42.2657V35.9863C40.791 35.1757 41.4452 34.5215 42.2559 34.5215C43.0665 34.5215 43.7207 35.1757 43.7207 35.9863Z" fill="#4D77FF"></path>
          <path d="M32.8419 34.5215C35.381 34.5215 37.4413 36.5822 37.4413 39.1212C37.4413 41.6603 35.381 43.7206 32.8419 43.7206C30.3029 43.7206 28.2422 41.6603 28.2422 39.1212C28.2422 36.5822 30.3029 34.5215 32.8419 34.5215ZM34.5216 39.1212C34.5216 38.1935 33.7697 37.4512 32.8515 37.4512C31.9337 37.4512 31.1818 38.203 31.1818 39.1212C31.1818 40.0391 31.9337 40.7909 32.8515 40.7909C33.7697 40.7909 34.5216 40.0391 34.5216 39.1212Z" fill="#4D77FF"></path>
          <path d="M24.8926 35.9863V42.2657C24.8926 43.0763 24.2384 43.7305 23.4277 43.7305C22.6175 43.7305 21.9629 43.0763 21.9629 42.2657V35.9863C21.9629 35.1757 22.6175 34.5215 23.4277 34.5215C24.2384 34.5215 24.8926 35.1757 24.8926 35.9863Z" fill="#4D77FF"></path>
        </svg>
            
            </div>
            <div className="affliate-card3-text">
            <Text as="p" variant="bodyMd">Total Rewards</Text>
            </div>
            <div className="affliate-card3-text2">
            <Text as="h1" variant="headingLg">1</Text>
            </div>
            
            </Card>
            </div>
        </Grid.Cell>
        </div>
        
      </Grid>
      <Grid>
        <Grid.Cell columnSpan={{xs: 6, sm: 3, md: 3, lg: 3, xl: 3}}>
        <div className="grid2">
        <Card>
            <div className="affliate-card-2nd">
            <svg width="40" height="40" viewBox="0 0 50 46" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M36.8164 30.3696C37.6254 30.3696 38.2812 29.7138 38.2812 28.9048C38.2812 28.0958 37.6254 27.4399 36.8164 27.4399C36.0074 27.4399 35.3516 28.0958 35.3516 28.9048C35.3516 29.7138 36.0074 30.3696 36.8164 30.3696Z" fill="currentColor"></path>
          <path d="M47.0703 21.8326V14.2564C47.0703 13.4475 46.4145 12.7916 45.6055 12.7916H44.4266C44.0336 11.7119 40.9538 3.25049 40.479 1.9457C40.2027 1.18652 39.3638 0.794333 38.6041 1.06924L22.4008 6.93222H4.39453C1.97139 6.93222 0 8.90361 0 11.3268V40.6236C0 43.0468 1.97139 45.0182 4.39453 45.0182H45.6055C46.4145 45.0182 47.0703 44.3623 47.0703 43.5533V35.9771C48.7753 35.3725 50 33.7442 50 31.8346V25.9752C50 24.0655 48.7753 22.4373 47.0703 21.8326ZM32.8509 6.2665C33.5944 7.48906 34.6809 8.46621 36.0071 9.08467C37.2799 9.67812 38.7092 9.91377 40.1807 9.6917L41.3089 12.7915H14.8177L32.8509 6.2665ZM39.1437 6.84297C38.496 6.84951 37.8497 6.71142 37.2453 6.42949C36.6383 6.14648 36.1153 5.73779 35.7032 5.23447L38.2261 4.32158L39.1437 6.84297ZM4.39453 9.86191H14.304L6.20723 12.7916H4.39453C3.58682 12.7916 2.92969 12.1345 2.92969 11.3268C2.92969 10.519 3.58682 9.86191 4.39453 9.86191ZM4.39453 42.0885C3.58682 42.0885 2.92969 41.4313 2.92969 40.6236V15.4693C3.38818 15.6319 3.88105 15.7213 4.39453 15.7213H44.1406V21.5807H36.8164C32.7778 21.5807 29.4922 24.8663 29.4922 28.9049C29.4922 32.9435 32.7778 36.2291 36.8164 36.2291H44.1406V42.0885H4.39453ZM47.0703 31.8346C47.0703 32.6423 46.4132 33.2994 45.6055 33.2994H36.8164C34.3933 33.2994 32.4219 31.328 32.4219 28.9049C32.4219 26.4817 34.3933 24.5103 36.8164 24.5103H45.6055C46.4132 24.5103 47.0703 25.1675 47.0703 25.9752V31.8346Z" fill="currentColor"></path>
          <path d="M19.2672 28.5807C18.457 27.8452 17.3716 27.4402 16.211 27.4402C15.4581 27.4402 14.7462 26.6333 14.7462 25.7798C14.7462 25.2305 15.1293 24.7133 15.7222 24.4621C16.0906 24.3061 17.0622 24.0537 18.1215 25.08C18.7025 25.6429 19.6299 25.6282 20.1928 25.0473C20.7557 24.4663 20.741 23.5389 20.1601 22.976C19.4239 22.2628 18.568 21.7811 17.676 21.5485V20.1162C17.676 19.3072 17.0201 18.6514 16.2111 18.6514C15.4021 18.6514 14.7463 19.3072 14.7463 20.1162V21.6979C14.6905 21.719 14.635 21.7412 14.5797 21.7646C12.9011 22.4752 11.8165 24.0514 11.8165 25.7797C11.8165 28.2679 13.8289 30.3698 16.211 30.3698C16.9166 30.3698 17.6759 30.767 17.6759 31.6391C17.6759 32.2628 17.2998 32.8188 16.7401 33.0227C16.0222 33.284 15.1704 32.91 14.403 31.9963C13.8827 31.3769 12.9587 31.2964 12.3392 31.8167C11.7197 32.337 11.6393 33.261 12.1596 33.8805C12.9283 34.7958 13.8167 35.4315 14.7461 35.7654V37.694C14.7461 38.503 15.4019 39.1589 16.2109 39.1589C17.0199 39.1589 17.6758 38.503 17.6758 37.694V35.7982C17.698 35.7905 17.7205 35.7836 17.7428 35.7755C19.4551 35.1519 20.6056 33.4895 20.6056 31.6391C20.6056 30.4503 20.1303 29.3641 19.2672 28.5807Z" fill="#4D77FF"></path>
        </svg>
            
            </div>
            <div className="affliate-card4-text">
            <Text as="p" variant="bodyMd">Total Earnings</Text>
            </div>
            <div className="affliate-card4-text2">
            <Text as="h1" variant="headingLg">$$$</Text>
            </div>
            
            </Card>
            </div>
        </Grid.Cell>
        <div className="grid-sample1">
        <Grid.Cell columnSpan={{xs: 6, sm: 3, md: 3, lg: 3, xl: 3}}>
        <div className="grid2">
        <Card>
            <div className="affliate-card-2nd">
            <svg width="40" height="40" viewBox="0 0 50 46" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M36.8164 30.3696C37.6254 30.3696 38.2812 29.7138 38.2812 28.9048C38.2812 28.0958 37.6254 27.4399 36.8164 27.4399C36.0074 27.4399 35.3516 28.0958 35.3516 28.9048C35.3516 29.7138 36.0074 30.3696 36.8164 30.3696Z" fill="currentColor"></path>
          <path d="M47.0703 21.8326V14.2564C47.0703 13.4475 46.4145 12.7916 45.6055 12.7916H44.4266C44.0336 11.7119 40.9538 3.25049 40.479 1.9457C40.2027 1.18652 39.3638 0.794333 38.6041 1.06924L22.4008 6.93222H4.39453C1.97139 6.93222 0 8.90361 0 11.3268V40.6236C0 43.0468 1.97139 45.0182 4.39453 45.0182H45.6055C46.4145 45.0182 47.0703 44.3623 47.0703 43.5533V35.9771C48.7753 35.3725 50 33.7442 50 31.8346V25.9752C50 24.0655 48.7753 22.4373 47.0703 21.8326ZM32.8509 6.2665C33.5944 7.48906 34.6809 8.46621 36.0071 9.08467C37.2799 9.67812 38.7092 9.91377 40.1807 9.6917L41.3089 12.7915H14.8177L32.8509 6.2665ZM39.1437 6.84297C38.496 6.84951 37.8497 6.71142 37.2453 6.42949C36.6383 6.14648 36.1153 5.73779 35.7032 5.23447L38.2261 4.32158L39.1437 6.84297ZM4.39453 9.86191H14.304L6.20723 12.7916H4.39453C3.58682 12.7916 2.92969 12.1345 2.92969 11.3268C2.92969 10.519 3.58682 9.86191 4.39453 9.86191ZM4.39453 42.0885C3.58682 42.0885 2.92969 41.4313 2.92969 40.6236V15.4693C3.38818 15.6319 3.88105 15.7213 4.39453 15.7213H44.1406V21.5807H36.8164C32.7778 21.5807 29.4922 24.8663 29.4922 28.9049C29.4922 32.9435 32.7778 36.2291 36.8164 36.2291H44.1406V42.0885H4.39453ZM47.0703 31.8346C47.0703 32.6423 46.4132 33.2994 45.6055 33.2994H36.8164C34.3933 33.2994 32.4219 31.328 32.4219 28.9049C32.4219 26.4817 34.3933 24.5103 36.8164 24.5103H45.6055C46.4132 24.5103 47.0703 25.1675 47.0703 25.9752V31.8346Z" fill="currentColor"></path>
          <path d="M19.2672 28.5807C18.457 27.8452 17.3716 27.4402 16.211 27.4402C15.4581 27.4402 14.7462 26.6333 14.7462 25.7798C14.7462 25.2305 15.1293 24.7133 15.7222 24.4621C16.0906 24.3061 17.0622 24.0537 18.1215 25.08C18.7025 25.6429 19.6299 25.6282 20.1928 25.0473C20.7557 24.4663 20.741 23.5389 20.1601 22.976C19.4239 22.2628 18.568 21.7811 17.676 21.5485V20.1162C17.676 19.3072 17.0201 18.6514 16.2111 18.6514C15.4021 18.6514 14.7463 19.3072 14.7463 20.1162V21.6979C14.6905 21.719 14.635 21.7412 14.5797 21.7646C12.9011 22.4752 11.8165 24.0514 11.8165 25.7797C11.8165 28.2679 13.8289 30.3698 16.211 30.3698C16.9166 30.3698 17.6759 30.767 17.6759 31.6391C17.6759 32.2628 17.2998 32.8188 16.7401 33.0227C16.0222 33.284 15.1704 32.91 14.403 31.9963C13.8827 31.3769 12.9587 31.2964 12.3392 31.8167C11.7197 32.337 11.6393 33.261 12.1596 33.8805C12.9283 34.7958 13.8167 35.4315 14.7461 35.7654V37.694C14.7461 38.503 15.4019 39.1589 16.2109 39.1589C17.0199 39.1589 17.6758 38.503 17.6758 37.694V35.7982C17.698 35.7905 17.7205 35.7836 17.7428 35.7755C19.4551 35.1519 20.6056 33.4895 20.6056 31.6391C20.6056 30.4503 20.1303 29.3641 19.2672 28.5807Z" fill="#4D77FF"></path>
        </svg>
            
            </div>
            <div className="affliate-card5-text">
            <Text as="p" variant="bodyMd">Total Paid</Text>
            </div>
            <div className="affliate-card5-text2">
            <Text as="h1" variant="headingLg">$$$</Text>
            </div>
            
            </Card>
            </div>
            
        </Grid.Cell>
        </div>
      </Grid>
      </div>
      <div className="affliate-coupon-text">
      <Text as="p">Your affiliate coupons</Text>
      <div className="input">
      <TextField
                suffix={
                  <div className="copy-icon">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M16 12.9V17.1C16 20.6 14.6 22 11.1 22H6.9C3.4 22 2 20.6 2 17.1V12.9C2 9.4 3.4 8 6.9 8H11.1C14.6 8 16 9.4 16 12.9Z"
                        stroke="#ffffff"
                        stroke-width="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                      <path
                        d="M22 6.9V11.1C22 14.6 20.6 16 17.1 16H16V12.9C16 9.4 14.6 8 11.1 8H8V6.9C8 3.4 9.4 2 12.9 2H17.1C20.6 2 22 3.4 22 6.9Z"
                        stroke="#ffffff"
                        stroke-width="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </svg>
                  </div>
                }
              ></TextField>
              </div>
            
      </div>
      <div className="grid-affliate2">
      <Grid>
        <Grid.Cell columnSpan={{xs: 6, sm: 3, md: 3, lg: 3, xl: 3}}>
          <div className="grid4">
          <Card>
            <div className="img">
            <Text as="p" variant="bodySM">**Paypal Svg Here**</Text>
            <Text as="p" variant="bodySm">Enter your PayPal email address to receive payouts.</Text>
            <TextField></TextField>
            <Button variant="primary">Confirm</Button>
            </div>
          </Card>
          </div>
        </Grid.Cell>
        <Grid.Cell columnSpan={{xs: 6, sm: 3, md: 3, lg: 3, xl: 3}}>
        <div className="grid5">
          <Card>
            <p>View a summary of your online store’s orders.</p>
          </Card>
          </div>
        </Grid.Cell>
      </Grid>
      </div>
      
          </div>
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
          Referrer / Affiliate Dashboard Customizer
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
                <div className="tab-heading">
                  <Text as="h1" variant="headingLg">
                    Referrer Dashboard
                  </Text>
                </div>
                <Tabs
                  tabs={tabs}
                  selected={selectedTab}
                  onSelect={handleTabChange}
                />
                <div className="logout-section">
                  <div className="logout-icon">
                    <Icon source={ExitIcon} tone="base" />
                  </div>
                  <div className="logout-text">
                    <Text as="p" variant="bodyLg">
                      Logout
                    </Text>
                  </div>
                </div>
                {renderRightGridContent()}
              </Box>
            </Card>
          </InlineGrid>
        </div>
      </Box>
    </div>
  );
}
