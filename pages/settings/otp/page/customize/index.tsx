"use client";

import { useCallback, useState } from "react";
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
  ColorPicker,
  hsbToHex,
  Popover,
  Checkbox,
} from "@shopify/polaris";
import {
  ArrowLeftIcon,
  ChevronDownIcon,
  ChevronUpIcon,
} from "@shopify/polaris-icons";
import router from "next/router";

export default function Customize() {
  // State for collapsible sections
  const [textColor, setTextColor] = useState({
    hue: 0,
    brightness: 0.6,
    saturation: 0.7,
  });
  const [bgColor, setBgColor] = useState({
    hue: 200,
    brightness: 0.6,
    saturation: 0.7,
  });

  // Separate state variables for each tab's color pickers
  // Send OTP tab (tab 0)
  const [sendOtpTextPopoverActive, setSendOtpTextPopoverActive] =
    useState(false);
  const [sendOtpBgPopoverActive, setSendOtpBgPopoverActive] = useState(false);

  // Verify OTP tab (tab 1)
  const [verifyOtpTextPopoverActive, setVerifyOtpTextPopoverActive] =
    useState(false);
  const [verifyOtpBgPopoverActive, setVerifyOtpBgPopoverActive] =
    useState(false);

  // Toggle functions for each color picker
  const toggleSendOtpTextPopover = useCallback(
    () => setSendOtpTextPopoverActive((active) => !active),
    []
  );
  const toggleSendOtpBgPopover = useCallback(
    () => setSendOtpBgPopoverActive((active) => !active),
    []
  );
  const toggleVerifyOtpTextPopover = useCallback(
    () => setVerifyOtpTextPopoverActive((active) => !active),
    []
  );
  const toggleVerifyOtpBgPopover = useCallback(
    () => setVerifyOtpBgPopoverActive((active) => !active),
    []
  );

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

  //CheckBox For Login
  const [checked, setChecked] = useState(false);
  const handleChange = useCallback(
    (newChecked: boolean) => setChecked(newChecked),
    []
  );

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
      // Send OTP tab
      return (
        <div className="box-fixed">
          <Box padding="400">
            <InlineStack align="space-between" blockAlign="center">
              <Text as="p" variant="bodyLg">
                TITLE & DESCRIPTION
              </Text>

              <Button
                variant="monochromePlain"
                onClick={togglePageTitleCollapsible}
                ariaExpanded={isPageTitleOpen}
                size="large"
                ariaControls="page-title-collapsible"
                icon={isPageTitleOpen ? ChevronUpIcon : ChevronDownIcon}
              ></Button>
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
                  <TextField label="Title" autoComplete="off" />
                </div>
                <div className="custom-textfield-desc">
                  <TextField label="Description" autoComplete="off" />
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
                  INPUT FIELDS
                </Text>
              </div>
              <div className="referral-button">
                <Button
                  variant="monochromePlain"
                  onClick={toggleReferralCollapsible}
                  ariaExpanded={isReferralOpen}
                  size="large"
                  ariaControls="referral-link-collapsible"
                  icon={isReferralOpen ? ChevronUpIcon : ChevronDownIcon}
                ></Button>
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
                  <TextField label="Label" autoComplete="off" />
                </div>
                <div className="custom-textfield">
                  <TextField label="Placeholder" autoComplete="off" />
                </div>
                <div className="custom-textfield">
                  <TextField label="Button Text" autoComplete="off" />
                </div>

                <div className="btn-backgroundcolor">
                  <Text variant="bodyMd" as="span">
                    Button Text Color
                  </Text>
                  <Popover
                    active={sendOtpTextPopoverActive}
                    activator={
                      <div
                        style={{
                          width: "40px",
                          height: "25px",
                          borderRadius: "6px",
                          border: "1px solid #ccc",
                          backgroundColor: hsbToHex(textColor),
                          cursor: "pointer",
                        }}
                        onClick={toggleSendOtpTextPopover}
                      />
                    }
                    onClose={toggleSendOtpTextPopover}
                  >
                    <Popover.Section>
                      <ColorPicker onChange={setTextColor} color={textColor} />
                    </Popover.Section>
                  </Popover>
                </div>
                {/* Button Background Color Picker */}
                <div className="btn-backgroundcolor2">
                  <Text variant="bodyMd" as="span">
                    Button Background Color
                  </Text>
                  <Popover
                    active={sendOtpBgPopoverActive}
                    activator={
                      <div
                        style={{
                          width: "40px",
                          height: "25px",
                          borderRadius: "6px",
                          border: "1px solid #ccc",
                          backgroundColor: hsbToHex(bgColor),
                          cursor: "pointer",
                        }}
                        onClick={toggleSendOtpBgPopover}
                      />
                    }
                    onClose={toggleSendOtpBgPopover}
                  >
                    <Popover.Section>
                      <ColorPicker onChange={setBgColor} color={bgColor} />
                    </Popover.Section>
                  </Popover>
                </div>
                <div className="custom-textfield">
                  <TextField label="Invalid Email Message" autoComplete="off" />
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
                  REDIRECT LINKS
                </Text>
              </div>
              <div className="referral-button">
                <Button
                  variant="monochromePlain"
                  onClick={toggleStatsCollapsible}
                  ariaExpanded={isStatsOpen}
                  size="large"
                  ariaControls="page-title-collapsible"
                  icon={isStatsOpen ? ChevronUpIcon : ChevronDownIcon}
                ></Button>
              </div>
            </InlineStack>

            <Collapsible
              open={isStatsOpen}
              id="page-title-collapsible"
              transition={{
                duration: "500ms",
                timingFunction: "ease-in-out",
              }}
            >
              <Box padding="400" paddingInline="400">
                <div className="custom-textfield">
                  <TextField
                    label="Referral redirect Link text"
                    autoComplete="off"
                  />
                </div>
                <div className="custom-textfield">
                  <TextField
                    label="Affiliate redirect Link Text"
                    autoComplete="off"
                  />
                </div>
                <div className="custom-textfield">
                  <TextField label="Login Page Link Text" autoComplete="off" />
                </div>
                <div className="checkbox-text">
                  <Checkbox
                    label="Login"
                    checked={checked}
                    onChange={handleChange}
                  />
                  <Text as="p" variant="bodyMd">
                    Enable the link to the normal Shopify store login page?
                  </Text>
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
                  onClick={toggleRewardCollapsible}
                  ariaExpanded={isRewardOpen}
                  size="large"
                  ariaControls="page-title-collapsible"
                  icon={isRewardOpen ? ChevronUpIcon : ChevronDownIcon}
                ></Button>
              </div>
            </InlineStack>

            <Collapsible
              open={isRewardOpen}
              id="page-title-collapsible"
              transition={{
                duration: "500ms",
                timingFunction: "ease-in-out",
              }}
            >
              <Box padding="400" paddingInline="400">
                <div className="custom-textfield-desc">
                  <TextField label="Custom css" autoComplete="off" />
                </div>
              </Box>
            </Collapsible>
          </Box>
        </div>
      );
    } else {
      // Verify OTP tab
      return (
        <div className="affliate-fixed">
          <Box padding="400">
            <InlineStack align="space-between" blockAlign="center">
              <Text as="p" variant="bodyLg">
                TITLE & DESCRIPTION
              </Text>

              <Button
                variant="monochromePlain"
                onClick={togglePageTitleCollapsible}
                ariaExpanded={isPageTitleOpen}
                size="large"
                ariaControls="page-title-collapsible"
                icon={isPageTitleOpen ? ChevronUpIcon : ChevronDownIcon}
              ></Button>
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
                  <TextField label="Title" autoComplete="off" />
                </div>
                <div className="custom-textfield-desc">
                  <TextField label="Description" autoComplete="off" />
                </div>
                <div className="verify-otp-text">
                  <Text as="p" variant="bodyLg">
                    Available short codes : {`{{ email_id }}`} --{">"} Email ID
                    of the user
                  </Text>
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
                  INPUT FIELDS
                </Text>
              </div>
              <div className="affiliate-button">
                <Button
                  variant="monochromePlain"
                  onClick={toggleReferralCollapsible}
                  ariaExpanded={isReferralOpen}
                  size="large"
                  ariaControls="affiliate-settings-collapsible"
                  icon={isReferralOpen ? ChevronUpIcon : ChevronDownIcon}
                ></Button>
              </div>
            </InlineStack>

            <Collapsible
              open={isReferralOpen}
              id="affiliate-settings-collapsible"
              transition={{
                duration: "500ms",
                timingFunction: "ease-in-out",
              }}
              // style={{ overflow: "visible" }}
            >
              <Box padding="400" paddingInline="400">
                <div className="custom-textfield">
                  <TextField label="Label" autoComplete="off" />
                </div>
                <div className="custom-textfield">
                  <TextField label="Button Text" autoComplete="off" />
                </div>
                <div className="btn-backgroundcolor">
                  <Text variant="bodyMd" as="span">
                    Button Text Color
                  </Text>
                  <Popover
                    active={verifyOtpTextPopoverActive}
                    activator={
                      <div
                        style={{
                          width: "40px",
                          height: "25px",
                          borderRadius: "6px",
                          border: "1px solid #ccc",
                          backgroundColor: hsbToHex(textColor),
                          cursor: "pointer",
                        }}
                        onClick={toggleVerifyOtpTextPopover}
                      />
                    }
                    onClose={toggleVerifyOtpTextPopover}
                  >
                    <Popover.Section>
                      <ColorPicker onChange={setTextColor} color={textColor} />
                    </Popover.Section>
                  </Popover>
                </div>
                {/* Button Background Color Picker */}
                <div className="btn-backgroundcolor2">
                  <Text variant="bodyMd" as="span">
                    Button Background Color
                  </Text>
                  <Popover
                    active={verifyOtpBgPopoverActive}
                    activator={
                      <div
                        style={{
                          width: "40px",
                          height: "25px",
                          borderRadius: "6px",
                          border: "1px solid #ccc",
                          backgroundColor: hsbToHex(bgColor),
                          cursor: "pointer",
                        }}
                        onClick={toggleVerifyOtpBgPopover}
                      />
                    }
                    onClose={toggleVerifyOtpBgPopover}
                  >
                    <Popover.Section>
                      <ColorPicker onChange={setBgColor} color={bgColor} />
                    </Popover.Section>
                  </Popover>
                </div>
                <div className="custom-textfield">
                  <TextField label="Invalid OTP Message" autoComplete="off" />
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
                  onClick={toggleRewardCollapsible}
                  ariaExpanded={isRewardOpen}
                  size="large"
                  ariaControls="page-title-collapsible"
                  icon={isRewardOpen ? ChevronUpIcon : ChevronDownIcon}
                ></Button>
              </div>
            </InlineStack>

            <Collapsible
              open={isRewardOpen}
              id="page-title-collapsible"
              transition={{
                duration: "500ms",
                timingFunction: "ease-in-out",
              }}
            >
              <Box padding="400" paddingInline="400">
                <div className="custom-textfield-desc">
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
            <Text as="h6" variant="headingLg">
              Login to referrer / affiliate dashboard
            </Text>
          </div>
          <div className="send-otp-text2">
            <Text as="p" variant="bodyLg">
              Please enter your email address to receive the one-time
              verification code. NOTE: You will receive the code only if you are
              an approved member of our referral / affiliate program.
            </Text>
          </div>
          <div className="send-otp-textfield">
            <TextField
              label="Your Email address"
              placeholder="Enter your email address"
              autoComplete="off"
            ></TextField>
          </div>
          <div className="send-otp-btn">
            <button className="verify-button2">Send verification code</button>
          </div>
          <div className="send-otp-text3">
            <Text as="p" variant="bodyLg">
              Become an referral member
            </Text>
          </div>
          <div className="send-otp-text4">
            <Text as="p" variant="bodyLg">
              Become an affiliate member
            </Text>
          </div>
          <div className="send-otp-text5">
            <Text as="p" variant="bodyLg">
              Login
            </Text>
          </div>
        </Box>
      );
    } else {
      // Verify OTP tab
      return (
        <Box padding="400">
          <div className="verify-otp-text1">
            <Text as="h2" variant="headingLg">
              Verify your one time code
            </Text>
          </div>
          <div className="verify-otp-text2">
            <Text as="p" variant="bodyLg">
              We've sent a one-time verification code to your email address{" "}
              {`{{email_id}}`}. Please check your email inbox to get the code
              and enter it here to verify to access your referral / affiliate
              dashboard{" "}
            </Text>
          </div>
          <div className="verify-otp-textfield">
            <TextField
              label="Your verification code"
              autoComplete="off"
            ></TextField>
          </div>
          <div className="verify-otp-btn">
            <button className="verify-button">Verify</button>
          </div>
        </Box>
      );
    }
  };

  return (
    <div>
      {/* Navigation and Header Section */}
      <div className="translation-icon">
        <Button
          variant="secondary"
          onClick={() => router.push("/settings")}
          icon={ArrowLeftIcon}
          tone="success"
        ></Button>
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
