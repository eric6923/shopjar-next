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
  const handleTabChange = (selectedTabIndex:any) => {
    setSelectedTab(selectedTabIndex);
  };

  function handleLogout() {
    alert("Logout Functionality");
  }

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
                  <TextField
                    label="Total rewards text"
                    autoComplete="off"
                  />
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
                  <TextField
                    label="Total Earnings text"
                    autoComplete="off"
                  />
                </div>
                <div className="custom-textfield">
                  <TextField
                    label="Total Paid text"
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
                  <TextField label="Your Affiliate coupons title" autoComplete="off" />
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
                  <TextField label="Paypal Email label text" autoComplete="off" />
                </div>
                <div className="custom-textfield">
                  <TextField label="Confirm Button text" autoComplete="off" />
                </div>
                <div className="custom-textfield">
                  <TextField label="PayPal Blocked Message" autoComplete="off" />
                </div>
                <div className="custom-textfield">
                  <TextField label="Update Email Label Text" autoComplete="off" />
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
                    source={isACTransactionOpen ? ChevronUpIcon : ChevronDownIcon}
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
                  <TextField label="No commissions debit yet" autoComplete="off" />
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
                  <TextField label="Coupon Claim Success Message" autoComplete="off" />
                  <div className="value">
                  <Text as="p">{"{{coupon_value:any}}"} -{">"} displays value of created coupon</Text>
                  </div>
                </div>
                <div className="custom-textfield">  
                  <TextField label="Coupon Claim Failed Message" autoComplete="off" />
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
                  <TextField label="Member blocked message" autoComplete="off" />
                </div>
                <div className="custom-textfield">
                  <TextField label="Member programs disabled message" autoComplete="off" />
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
          <div className="referral-card1">
          <Card>
          <div className="referral-card1-text1">
  <Text as="p" variant="bodySm">Referral link</Text>
</div>
<TextField
  suffix={
    <div className="copy-icon">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M16 12.9V17.1C16 20.6 14.6 22 11.1 22H6.9C3.4 22 2 20.6 2 17.1V12.9C2 9.4 3.4 8 6.9 8H11.1C14.6 8 16 9.4 16 12.9Z" stroke="#ffffff" stroke-width="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
          <path d="M22 6.9V11.1C22 14.6 20.6 16 17.1 16H16V12.9C16 9.4 14.6 8 11.1 8H8V6.9C8 3.4 9.4 2 12.9 2H17.1C20.6 2 22 3.4 22 6.9Z" stroke="#ffffff" stroke-width="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
        </svg>
    </div>
  }
></TextField>
<div className="referral-card1-text2">
  <Text as="p" variant="bodySm">Share your referral link</Text>
</div>
          <div className="cf_ram_my_account_share_block" style={{ 
            display: 'flex', 
            justifyContent: 'start', 
            gap: '10px', 
            marginTop:"8px"
          }}>
            {/* Facebook Icon */}
            <div className="cf_ram_my_account_share_link">
              <svg width="34" height="34" viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M23 46C35.7025 46 46 35.7025 46 23C46 10.2975 35.7025 0 23 0C10.2975 0 0 10.2975 0 23C0 35.7025 10.2975 46 23 46Z" fill="#334C8C"/>
                <path d="M28.8285 20.8241L28.4471 24.0259C28.4307 24.1746 28.3597 24.312 28.2479 24.4115C28.1362 24.511 27.9915 24.5655 27.8419 24.5646H24.5129V34.0672C24.5137 34.1807 24.4697 34.2899 24.3903 34.3709C24.3109 34.452 24.2027 34.4984 24.0892 34.5H20.6967C20.6403 34.4992 20.5846 34.4873 20.5328 34.465C20.4809 34.4427 20.434 34.4103 20.3946 34.3699C20.3553 34.3294 20.3243 34.2816 20.3034 34.2291C20.2826 34.1767 20.2723 34.1206 20.2731 34.0642L20.2912 24.5646H17.7703C17.6098 24.5646 17.4558 24.5008 17.3423 24.3873C17.2288 24.2738 17.165 24.1199 17.165 23.9593V20.7575C17.165 20.597 17.2288 20.443 17.3423 20.3295C17.4558 20.216 17.6098 20.1522 17.7703 20.1522H20.2761V17.0472C20.2761 13.455 22.4127 11.5 25.5419 11.5H28.1052C28.2657 11.5 28.4196 11.5638 28.5332 11.6773C28.6467 11.7908 28.7104 11.9447 28.7104 12.1053V14.8017C28.7104 14.9622 28.6467 15.1162 28.5332 15.2297C28.4196 15.3432 28.2657 15.407 28.1052 15.407H26.5345C24.8337 15.4342 24.5129 16.2483 24.5129 17.4649V20.1432H28.2383C28.3233 20.1446 28.4071 20.164 28.4841 20.1999C28.5611 20.2359 28.6297 20.2877 28.6853 20.3519C28.741 20.4162 28.7825 20.4914 28.8072 20.5728C28.8319 20.6541 28.8391 20.7397 28.8285 20.8241Z" fill="white"/>
              </svg>
            </div>

            {/* Twitter/X Icon */}
            <div className="cf_ram_my_account_share_link">
              <svg width="34" height="34" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip0_4365_24222)">
                  <mask id="mask0_4365_24222" style={{maskType: 'luminance'}} maskUnits="userSpaceOnUse" x="0" y="0" width="32" height="32">
                    <path d="M32 0H0V32H32V0Z" fill="white"/>
                  </mask>
                  <g mask="url(#mask0_4365_24222)">
                    <path d="M16 0C7.16375 0 0 7.16375 0 16C0 24.8363 7.16375 32 16 32C24.8363 32 32 24.8363 32 16C32 7.16375 24.8363 0 16 0Z" fill="black"/>
                    <path d="M17.3319 14.928L22.5437 9H21.3087L16.7833 14.1473L13.1688 9H9L14.4657 16.7835L9 23H10.2351L15.014 17.5644L18.8312 23H23L17.3316 14.928H17.3319ZM10.6801 9.9098H12.5772L21.3092 22.1316H19.4122L10.6801 9.9098Z" fill="white"/>
                  </g>
                </g>
                <defs>
                  <clipPath id="clip0_4365_24222">
                    <rect width="32" height="32" fill="white"/>
                  </clipPath>
                </defs>
              </svg>
            </div>

            {/* WhatsApp Icon */}
            <div className="cf_ram_my_account_share_link">
              <svg width="34" height="34" viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M23 46C35.7025 46 46 35.7025 46 23C46 10.2975 35.7025 0 23 0C10.2975 0 0 10.2975 0 23C0 35.7025 10.2975 46 23 46Z" fill="#2AA81A"/>
                <path d="M31.1138 14.8863C29.2 12.9507 26.6571 11.7632 23.9444 11.5381C21.2318 11.313 18.528 12.0652 16.3213 13.6589C14.1145 15.2525 12.5503 17.5826 11.911 20.2285C11.2716 22.8744 11.5993 25.6616 12.8349 28.0871L11.6244 33.9642C11.6114 34.0229 11.6109 34.0836 11.6229 34.1425C11.6349 34.2014 11.6591 34.2572 11.694 34.3061C11.7439 34.3803 11.8153 34.4374 11.8986 34.4698C11.9819 34.5023 12.0731 34.5085 12.16 34.4877L17.91 33.1229C20.3288 34.326 23.0961 34.6319 25.7192 33.986C28.3424 33.34 30.6512 31.7843 32.2348 29.5956C33.8184 27.4069 34.574 24.7273 34.367 22.0337C34.1601 19.3401 33.0041 16.8074 31.1048 14.8863H31.1138ZM29.3162 29.2219C27.9926 30.5432 26.2881 31.4164 24.4425 31.7188C22.5968 32.0212 20.7028 31.7375 19.0267 30.9076L18.2217 30.5081L14.69 31.3434V31.298L15.4345 27.736L15.0411 26.9613C14.1841 25.2807 13.8815 23.3718 14.1767 21.5085C14.472 19.6453 15.3498 17.9235 16.6844 16.5901C18.3601 14.9161 20.6317 13.9759 23.0003 13.9759C25.3688 13.9759 27.6405 14.9161 29.3162 16.5901L29.3556 16.6446C31.0095 18.3238 31.9327 20.5887 31.9242 22.9456C31.9157 25.3026 30.9761 27.5607 29.3102 29.228L29.3162 29.2219Z" fill="white"/>
                <path d="M29.0047 26.631C28.5719 27.3119 27.885 28.1442 27.0285 28.353C25.5154 28.7162 23.2123 28.353 20.3283 25.6868L20.292 25.6535C17.7831 23.3112 17.1173 21.3592 17.2656 19.8127C17.3534 18.9321 18.0858 18.1392 18.7031 17.6187C18.8013 17.5359 18.9174 17.4772 19.0423 17.4474C19.1672 17.4175 19.2973 17.4173 19.4223 17.4467C19.5473 17.4761 19.6636 17.5343 19.7621 17.6167C19.8606 17.6991 19.9384 17.8034 19.9893 17.9213L20.9184 20.0216C20.9791 20.1567 21.0018 20.3059 20.9842 20.453C20.9666 20.6002 20.9093 20.7397 20.8185 20.8568L20.3464 21.4621C20.2483 21.5877 20.1898 21.7398 20.1785 21.8988C20.1672 22.0578 20.2035 22.2166 20.2829 22.3548C20.7313 23.0158 21.2679 23.6124 21.8777 24.1283C22.5339 24.7597 23.278 25.2928 24.087 25.711C24.2346 25.7705 24.3966 25.7847 24.5524 25.7519C24.7081 25.719 24.8506 25.6405 24.9616 25.5264L25.5033 24.9756C25.6063 24.8648 25.7381 24.7846 25.8839 24.744C26.0297 24.7034 26.1839 24.704 26.3295 24.7456L28.5387 25.3781C28.6638 25.4138 28.7789 25.4783 28.8745 25.5667C28.9701 25.655 29.0435 25.7646 29.0889 25.8866C29.1343 26.0086 29.1503 26.1395 29.1357 26.2689C29.121 26.3982 29.0762 26.5222 29.0047 26.631Z" fill="white"/>
              </svg>
            </div>

            {/* Email Icon */}
            <div className="cf_ram_my_account_share_link">
              <svg width="34" height="34" viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M23 46C35.7025 46 46 35.7025 46 23C46 10.2975 35.7025 0 23 0C10.2975 0 0 10.2975 0 23C0 35.7025 10.2975 46 23 46Z" fill="#EA4335"/>
                <path d="M24.0308 26.1872C23.7981 26.3326 23.5363 26.3908 23.3036 26.3908C23.0709 26.3908 22.8091 26.3326 22.5764 26.1872L11 19.1191V28.5141C11 30.5211 12.6288 32.1499 14.6358 32.1499H32.0005C34.0075 32.1499 35.6363 30.5211 35.6363 28.5141V19.1191L24.0308 26.1872Z" fill="white"/>
                <path d="M32.0013 14H14.6367C12.9206 14 11.4662 15.2216 11.1172 16.8505L23.3335 24.2966L35.5208 16.8505C35.1718 15.2216 33.7174 14 32.0013 14Z" fill="white"/>
              </svg>
            </div>
          </div>
        </Card>

          </div>
        </Box>
      );
    } else {
      // Affiliate tab
      return (
        <Box padding="400">
          <Text as="p" variant="bodyLg">
            Affiliate Dashboard Content
          </Text>
          <Box padding="400">
            <Text as="p">Detailed affiliate statistics and information</Text>
          </Box>
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
            maxWidth: "1400px",
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
