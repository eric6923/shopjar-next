import React, { useState } from "react";
import {
  Page,
  Card,
  FormLayout,
  Button,
  Text,
  Box,
  InlineStack,
  ButtonGroup,
  Icon,
  TextField,
  Divider,
  BlockStack,
  RadioButton,
  Layout,
  Popover,
  ActionList,
  Tag,
  Select,
} from "@shopify/polaris";
import { ChevronDownIcon, XSmallIcon } from "@shopify/polaris-icons";

function Settings() {
  // States and Function for Available Short code and things after it
  const options = [
    { label: "Yes, cancel immediately", value: "1" },
    { label: "No, do not cancel the commission", value: "2" },
  ];
  const options2 = [
    { label: "Home Page", value: "1" },
    { label: "Products", value: "2" },
    { label: "Custom link", value: "3" },
  ];
  const [selected, setSelected] = useState("1");
  const [selected2, setSelected2] = useState("1");

  const handleSelectChange = (value: any) => setSelected(value);
  const handleSelectChange2 = (value: any) => setSelected2(value);
  const [selectedRewardApproval, setSelectedRewardApproval] = useState("auto");
  const [delayPeriod, setDelayPeriod] = useState("30");
  const [couponConversion, setCouponConversion] = useState(false);
  const [couponConversion2, setCouponConversion2] = useState(false);
  const [couponConversion3, setCouponConversion3] = useState(false);

  const handleRewardApprovalChange = (value) => {
    setSelectedRewardApproval(value);
  };

  const handleDelayPeriodChange = (value) => {
    setDelayPeriod(value);
  };

  const handleCouponConversionChange = (newValue) => {
    setCouponConversion(newValue);
  };

  // State for toggle switches with additional fields for text input values
  const [socialOptions, setSocialOptions] = useState({
    facebook: {
      enabled: false,
    },
    twitter: {
      enabled: false,
      text: "",
    },
    whatsapp: {
      enabled: false,
      text: "",
    },
    email: {
      enabled: false,
      text: "",
    },
  });

  // Handle toggle change
  const handleToggleChange = (platform) => {
    setSocialOptions({
      ...socialOptions,
      [platform]: {
        ...socialOptions[platform],
        enabled: !socialOptions[platform].enabled,
      },
    });
  };

  // Handle text field change
  const handleTextChange = (platform, value) => {
    setSocialOptions({
      ...socialOptions,
      [platform]: {
        ...socialOptions[platform],
        text: value,
      },
    });
  };

  const handleToggle = () => {
    setCouponConversion((prev) => !prev);
  };

  const handleToggle2 = () => {
    setCouponConversion2((prev) => !prev);
  };

  const handleToggle3 = () => {
    setCouponConversion3((prev) => !prev);
  };

  //States and Function for Last Two Cards
  const [selectedStatuses, setSelectedStatuses] = useState([
    "Refunded",
    "Voided",
  ]);
  const [statusPopoverActive, setStatusPopoverActive] = useState(false);

  // State for cancel action
  const [cancelAction, setCancelAction] = useState("Yes, cancel immediately");
  const [cancelPopoverActive, setCancelPopoverActive] = useState(false);

  // State for link destination
  const [linkDestination, setLinkDestination] = useState("Home page");
  const [linkPopoverActive, setLinkPopoverActive] = useState(false);
  const [redirectUrl, setRedirectUrl] = useState(
    "https://cart424.myshopify.com"
  );

  // Available statuses
  const availableStatuses = [
    "Refunded",
    "Voided",
    "Cancelled",
    "Partially Refunded",
  ];

  // Cancel commission options
  const cancelOptions = [
    "Yes, cancel immediately",
    "Yes, cancel after 14 days",
    "Yes, cancel after 30 days",
    "No, keep the commission",
  ];

  // Link destination options
  const linkOptions = [
    "Home page",
    "Collection page",
    "Product page",
    "Custom URL",
  ];

  // Handle removing a status
  const handleRemoveStatus = (statusToRemove) => {
    setSelectedStatuses(
      selectedStatuses.filter((status) => status !== statusToRemove)
    );
  };

  // Handle adding a status
  const handleAddStatus = (statusToAdd) => {
    if (!selectedStatuses.includes(statusToAdd)) {
      setSelectedStatuses([...selectedStatuses, statusToAdd]);
    }
    setStatusPopoverActive(false);
  };

  // Handle changing the cancel action
  const handleCancelActionChange = (selected) => {
    setCancelAction(selected);
    setCancelPopoverActive(false);
  };

  // Handle changing the link destination
  const handleLinkDestinationChange = (selected) => {
    setLinkDestination(selected);
    setLinkPopoverActive(false);
  };

  return (
    <Page
      title="Settings"
      primaryAction={{
        content: "Save",
        onAction: () => console.log("Save clicked"),
        primary: true,
      }}
      secondaryActions={[
        {
          content: "Cancel",
          onAction: () => console.log("Cancel clicked"),
        },
      ]}
    >
      <Box padding="100">
        <FormLayout>
          <Box paddingBlockEnd="100">
            <Text variant="headingMd" as="h2">
              Social Share Options
            </Text>
            <Text as="p" variant="bodyLg">
              Enable the social media link for the affiliates to share. These
              links will be disabled in Affiliate dashboard.
            </Text>
          </Box>

          <Box paddingBlockStart="100">
            {/* Facebook Option */}
            <Box paddingBlockEnd="400">
              <InlineStack align="space-between">
                <InlineStack gap="100" align="center">
                  <div
                    style={{
                      width: "50px",
                      height: "50px",
                      borderRadius: "50%",
                      background: "#4267B2",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      color: "white",
                    }}
                  >
                    <svg
                      width="50"
                      height="50"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M25 50c13.807 0 25-11.193 25-25S38.807 0 25 0 0 11.193 0 25s11.193 25 25 25Z"
                        fill="#334C8C"
                      ></path>
                      <path
                        d="M49.226 31.194a25.05 25.05 0 0 1-15.717 17.32L22.5 37.5l1.477-6.141-4.658-4.658c3.951-7.494 11.879-13.543 11.879-13.543l18.03 18.036Z"
                        fill="url(#facebook_svg__a)"
                      ></path>
                      <path
                        d="m31.336 22.635-.415 3.48a.658.658 0 0 1-.657.586h-3.619V37.03a.467.467 0 0 1-.46.47h-3.688a.467.467 0 0 1-.46-.474l.02-10.325h-2.74a.658.658 0 0 1-.659-.658v-3.48a.658.658 0 0 1 .658-.658h2.724V18.53c0-3.905 2.322-6.03 5.724-6.03h2.786a.658.658 0 0 1 .657.658v2.93a.658.658 0 0 1-.657.659h-1.708c-1.848.03-2.197.914-2.197 2.237v2.91h4.05a.658.658 0 0 1 .64.74Z"
                        fill="#fff"
                      ></path>
                      <defs>
                        <linearGradient
                          id="facebook_svg__a"
                          x1="23.21"
                          y1="21.694"
                          x2="42.746"
                          y2="41.23"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="#1E2D52"></stop>
                          <stop
                            offset="0.97"
                            stopColor="#1E2C52"
                            stopOpacity="0"
                          ></stop>
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>
                  <div className="affliate-settings-text">
                    <Text variant="headingMd" as="h6">
                      Facebook
                    </Text>
                  </div>
                </InlineStack>

                {/* Toggle switch for Facebook */}
                <div className="program-toggle-right">
                  <label className="toggle-switch">
                    <input
                      type="checkbox"
                      checked={socialOptions.facebook.enabled}
                      onChange={() => handleToggleChange("facebook")}
                    />
                    <span className="slider round"></span>
                  </label>
                </div>
              </InlineStack>
            </Box>

            {/* Twitter Option */}
            <Box paddingBlockEnd="400">
              <InlineStack align="space-between">
                <InlineStack gap="100">
                  <div
                    style={{
                      width: "48px",
                      height: "48px",
                      borderRadius: "50%",
                      background: "black",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      color: "white",
                    }}
                  >
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M18.244 2.25H21.552L14.325 10.51L22.823 21.75H16.043L10.96 14.933L5.035 21.75H1.727L9.467 12.915L1.254 2.25H8.179L12.774 8.481L18.244 2.25ZM16.912 19.77H18.658L7.304 4.126H5.439L16.912 19.77Z"
                        fill="white"
                      />
                    </svg>
                  </div>
                  <div className="affliate-settings-text">
                    <Text variant="headingMd" as="h6">
                      Twitter
                    </Text>
                  </div>
                </InlineStack>

                {/* Toggle switch for Twitter */}
                <div className="program-toggle-right">
                  <label className="toggle-switch">
                    <input
                      type="checkbox"
                      checked={socialOptions.twitter.enabled}
                      onChange={() => handleToggleChange("twitter")}
                    />
                    <span className="slider round"></span>
                  </label>
                </div>
              </InlineStack>

              {/* Conditional TextField for Twitter */}
              {socialOptions.twitter.enabled && (
                <Box paddingBlockStart="300">
                  <TextField
                    label="Twitter Message"
                    value={socialOptions.twitter.text}
                    onChange={(value) => handleTextChange("twitter", value)}
                    autoComplete="off"
                    placeholder=""
                  />
                </Box>
              )}
            </Box>

            {/* WhatsApp Option */}
            <Box paddingBlockEnd="400">
              <InlineStack align="space-between">
                <InlineStack gap="100">
                  <div
                    style={{
                      width: "50px",
                      height: "50px",
                      borderRadius: "50%",
                      background: "#25D366",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      color: "white",
                    }}
                  >
                    <svg
                      width="50"
                      height="50"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M25 50c13.807 0 25-11.193 25-25S38.807 0 25 0 0 11.193 0 25s11.193 25 25 25Z"
                        fill="#2AA81A"
                      ></path>
                      <path
                        d="M49.145 31.507A25 25 0 0 1 25.415 50L12.71 37.29l2.579-6.369c-4.54-24.25 18.53-14.75 18.53-14.75l15.325 15.336Z"
                        fill="url(#whatsapp_svg__a)"
                      ></path>
                      <path
                        d="M33.82 16.18a12.402 12.402 0 0 0-19.87 14.35l-1.315 6.388a.467.467 0 0 0 .076.371.477.477 0 0 0 .506.198l6.25-1.484A12.402 12.402 0 0 0 33.81 16.181h.01Zm-1.955 15.583a9.724 9.724 0 0 1-11.184 1.832l-.875-.434-3.839.908v-.05l.81-3.871-.428-.842A9.704 9.704 0 0 1 25 15.19a9.714 9.714 0 0 1 6.865 2.842l.043.06a9.71 9.71 0 0 1-.05 13.677l.007-.007Z"
                        fill="#fff"
                      ></path>
                      <path
                        d="M31.527 28.947c-.47.74-1.217 1.645-2.148 1.872-1.645.395-4.148 0-7.283-2.898l-.04-.036c-2.726-2.546-3.45-4.668-3.289-6.349.096-.957.892-1.819 1.563-2.385a.896.896 0 0 1 1.398.33l1.01 2.282a.887.887 0 0 1-.109.908l-.513.658a.872.872 0 0 0-.07.97 9.54 9.54 0 0 0 1.735 1.928 10.256 10.256 0 0 0 2.4 1.72.873.873 0 0 0 .951-.2l.59-.599a.89.89 0 0 1 .897-.25l2.402.688a.901.901 0 0 1 .506 1.361Z"
                        fill="#fff"
                      ></path>
                      <defs>
                        <linearGradient
                          id="whatsapp_svg__a"
                          x1="15.787"
                          y1="19.26"
                          x2="39.395"
                          y2="42.868"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="#1A6610"></stop>
                          <stop
                            offset="0.26"
                            stopColor="#1A6610"
                            stopOpacity="0.78"
                          ></stop>
                          <stop
                            offset="0.79"
                            stopColor="#1A6610"
                            stopOpacity="0.2"
                          ></stop>
                          <stop
                            offset="0.97"
                            stopColor="#1A6610"
                            stopOpacity="0"
                          ></stop>
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>
                  <div className="affliate-settings-text">
                    <Text variant="headingMd" as="h6">
                      Whatsapp
                    </Text>
                  </div>
                </InlineStack>

                {/* Toggle switch for WhatsApp */}
                <div className="program-toggle-right">
                  <label className="toggle-switch">
                    <input
                      type="checkbox"
                      checked={socialOptions.whatsapp.enabled}
                      onChange={() => handleToggleChange("whatsapp")}
                    />
                    <span className="slider round"></span>
                  </label>
                </div>
              </InlineStack>

              {/* Conditional TextField for WhatsApp */}
              {socialOptions.whatsapp.enabled && (
                <Box paddingBlockStart="300">
                  <TextField
                    label="Whatsapp Text"
                    value={socialOptions.whatsapp.text}
                    onChange={(value) => handleTextChange("whatsapp", value)}
                    autoComplete="off"
                    placeholder=""
                  />
                </Box>
              )}
            </Box>

            {/* Email Option */}
            <Box paddingBlockEnd="400">
              <InlineStack align="space-between">
                <InlineStack gap="100">
                  <div
                    style={{
                      width: "50px",
                      height: "50px",
                      borderRadius: "50%",
                      background: "#FFB74D",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      color: "white",
                    }}
                  >
                    <svg
                      width="50"
                      height="50"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M50 25v.57A25 25 0 0 1 25.543 50H25a25 25 0 1 1 25-25Z"
                        fill="#FFA930"
                      ></path>
                      <path
                        d="M50 25.57A25 25 0 0 1 25.543 50L10.855 35.312l1.576-.861-2.234-2.244V19.29l.53-4.44h28.546L50 25.569Z"
                        fill="url(#email_svg__a)"
                      ></path>
                      <path
                        d="M39.187 15.7c-4.07 3.441-11.185 9.494-13.293 11.382a1.223 1.223 0 0 1-1.79 0c-2.095-1.888-9.21-7.94-13.292-11.381a.622.622 0 0 1-.086-.852 2.467 2.467 0 0 1 1.94-.951h24.672a2.468 2.468 0 0 1 1.94.95.622.622 0 0 1-.091.853ZM39.803 18.122v14.085a.631.631 0 0 1-.33.556.66.66 0 0 1-.28.063.635.635 0 0 1-.36-.112c-2.675-1.931-6.376-4.635-8.833-6.602a.61.61 0 0 1-.23-.47.624.624 0 0 1 .213-.48c2.632-2.27 6.152-5.264 8.813-7.507a.606.606 0 0 1 1.007.467ZM20.243 25.658a.639.639 0 0 1-.236.47c-2.458 1.974-6.158 4.671-8.833 6.602a.635.635 0 0 1-.362.112.631.631 0 0 1-.615-.635V18.122a.618.618 0 0 1 1.02-.467c2.661 2.25 6.171 5.236 8.812 7.506a.658.658 0 0 1 .214.497Z"
                        fill="#fff"
                      ></path>
                      <path
                        d="M39.3 34.826a.602.602 0 0 1-.162.486 2.477 2.477 0 0 1-1.806.79H12.661a2.477 2.477 0 0 1-1.806-.79.6.6 0 0 1-.161-.486.586.586 0 0 1 .256-.435c2.58-1.852 7.346-5.299 10.175-7.598a.621.621 0 0 1 .796 0c.552.48 1.02.891 1.349 1.187a2.497 2.497 0 0 0 3.447 0l1.349-1.187a.621.621 0 0 1 .796 0c2.842 2.302 7.595 5.75 10.174 7.598a.57.57 0 0 1 .263.435Z"
                        fill="#fff"
                      ></path>
                      <defs>
                        <linearGradient
                          id="email_svg__a"
                          x1="13.786"
                          y1="13.799"
                          x2="42.983"
                          y2="42.997"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="#AD6500"></stop>
                          <stop
                            offset="1"
                            stopColor="#AD6500"
                            stopOpacity="0"
                          ></stop>
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>
                  <div className="affliate-settings-text">
                    <Text variant="headingMd" as="h6">
                      Email
                    </Text>
                  </div>
                </InlineStack>

                {/* Toggle switch for Email */}
                <div className="program-toggle-right">
                  <label className="toggle-switch">
                    <input
                      type="checkbox"
                      checked={socialOptions.email.enabled}
                      onChange={() => handleToggleChange("email")}
                    />
                    <span className="slider round"></span>
                  </label>
                </div>
              </InlineStack>

              {/* Conditional TextField for Email */}
              {socialOptions.email.enabled && (
                <Box paddingBlockStart="300">
                  <TextField
                    label="Email Subject"
                    value={socialOptions.email.text}
                    onChange={(value) => handleTextChange("email", value)}
                    autoComplete="off"
                    placeholder=""
                  />
                  <TextField
                    label="Message"
                    value={socialOptions.email.text}
                    onChange={(value) => handleTextChange("email", value)}
                    autoComplete="off"
                    placeholder=""
                  />
                </Box>
              )}
            </Box>
          </Box>
        </FormLayout>
      </Box>

      <div className="divider1">
        <Divider />
      </div>
      <Layout>
        <Layout.Section>
          <BlockStack gap="400">
            {/* Short codes section */}
            <Box padding="400">
              <BlockStack gap="400">
                <Text as="p" variant="headingMd" fontWeight="semibold">
                  Available Short codes
                </Text>
                <BlockStack gap="200">
                  <Text as="p" variant="bodyMd">
                    {"{{referral_link}} -> Referrer referral URL"}
                  </Text>
                  <Text as="p" variant="bodyMd">
                    {"{{store_url}} -> Store URL"}
                  </Text>
                </BlockStack>
              </BlockStack>
            </Box>

            <div className="divider1">
              <Divider />
            </div>

            {/* Reward Approval section */}
            <Box padding="400">
              <BlockStack gap="200">
                <Text as="p" variant="headingMd" fontWeight="semibold">
                  Reward Approval
                </Text>
                <Text as="p" variant="bodyMd">
                  By default, the reward for the referring person (Affiliate) is
                  automatically approved upon a successful referral. If you
                  wish, you can change this setting.
                </Text>

                <BlockStack gap="200">
                  <RadioButton
                    label="Auto"
                    helpText="Automatically rewards the referrer."
                    checked={selectedRewardApproval === "auto"}
                    id="auto"
                    name="rewardApproval"
                    onChange={() => handleRewardApprovalChange("auto")}
                  />

                  <RadioButton
                    label="Manual"
                    helpText="Manually approve the reward for the referrer."
                    checked={selectedRewardApproval === "manual"}
                    id="manual"
                    name="rewardApproval"
                    onChange={() => handleRewardApprovalChange("manual")}
                  />

                  <RadioButton
                    label="Auto approve after delay"
                    helpText="Useful, when you want the reward to be auto approved after X period."
                    checked={selectedRewardApproval === "delay"}
                    id="delay"
                    name="rewardApproval"
                    onChange={() => handleRewardApprovalChange("delay")}
                  />

                  {selectedRewardApproval === "delay" && (
                    <Box paddingInlineStart="100">
                      <TextField
                        label="Delay period in days"
                        type="number"
                        value={delayPeriod}
                        onChange={handleDelayPeriodChange}
                        autoComplete="off"
                      />
                    </Box>
                  )}
                </BlockStack>
              </BlockStack>
            </Box>

            <div className="divider1">
              <Divider />
            </div>

            {/* Coupon Conversion section */}
            <Box padding="200" position="relative">
              <BlockStack gap="200">
                <Text as="p" variant="headingMd" fontWeight="semibold">
                  Let affiliates convert the payout amount as a coupon
                </Text>
                <Text as="p" variant="bodyMd">
                  This will be useful for the affiliates to convert their entire
                  or a part of their commission earnings to a coupon code, which
                  they can use at your store to purchase products.
                </Text>

                <InlineStack gap={"300"} blockAlign="center">
                  <label className="toggle-switch2">
                    <input
                      type="checkbox"
                      checked={couponConversion}
                      onChange={handleToggle}
                    />
                    <span className="slider round"></span>
                  </label>

                  <Text as="p" variant="bodyMd">
                    {couponConversion ? "Enable" : "Disable"}
                  </Text>
                </InlineStack>
              </BlockStack>
            </Box>

            <div className="divider1">
              <Divider />
            </div>

            <Box padding="200" position="relative">
              <BlockStack gap="200">
                <Text as="p" variant="headingMd" fontWeight="semibold">
                  Embedded Pages
                </Text>
                <Text as="p" variant="bodyMd">
                  Useful when you run a headless storefront or when you would
                  like to embed the Affiliate Sign up form or the Affiliate
                  portal in a page other than the Shopify pages.
                </Text>

                <InlineStack gap={"300"} blockAlign="center">
                  <label className="toggle-switch2">
                    <input
                      type="checkbox"
                      checked={couponConversion2}
                      onChange={handleToggle2}
                    />
                    <span className="slider round"></span>
                  </label>

                  <Text as="p" variant="bodyMd">
                    {couponConversion2 ? "Enable" : "Disable"}
                  </Text>
                </InlineStack>
              </BlockStack>
            </Box>
            <div className="divider1">
              <Divider />
            </div>

            <Box padding="200" position="relative">
              <BlockStack gap="200">
                <Text as="p" variant="headingMd" fontWeight="semibold">
                  Affiliate Auto-Approval
                </Text>
                <Text as="p" variant="bodyMd">
                  Affiliates who register through the signup form are
                  automatically approved for the affiliate program.
                </Text>

                <InlineStack gap={"300"} blockAlign="center">
                  <label className="toggle-switch2">
                    <input
                      type="checkbox"
                      checked={couponConversion3}
                      onChange={handleToggle3}
                    />
                    <span className="slider round"></span>
                  </label>

                  <Text as="p" variant="bodyMd">
                    {couponConversion3 ? "Enable" : "Disable"}
                  </Text>
                </InlineStack>
              </BlockStack>
            </Box>

            <div className="divider1">
              <Divider />
            </div>

            <Box>
              <div className="affliate-settings-wrapper">
                {/* LEFT SIDE: Text Section */}
                <div className="affliate-settings-text-1">
                  <Text as="p" variant="headingMd" fontWeight="semibold">
                    Revoke Commission
                  </Text>
                  <Text as="p" variant="bodyMd">
                    Use the settings here to revoke the commission automatically
                    on certain scenarios. Example: When you refund an affiliate
                    sale.
                  </Text>
                </div>

                {/* RIGHT SIDE: Card */}
                <div className="affliate-settings-card">
                  <Card>
                    <InlineStack gap="500" align="space-between">
                      <Box width="300px">
                        <Text variant="headingMd" as="h6">
                          Choose unsuccessful order statuses
                        </Text>
                      </Box>

                      <Box>
                        <InlineStack gap="200" wrap={false}>
                          <Box>
                            <InlineStack gap="200">
                              {selectedStatuses.map((status) => (
                                <Tag
                                  key={status}
                                  onRemove={() => handleRemoveStatus(status)}
                                >
                                  {status}
                                </Tag>
                              ))}
                            </InlineStack>
                          </Box>

                          <Popover
                            active={statusPopoverActive}
                            activator={
                              <Button
                                onClick={() =>
                                  setStatusPopoverActive(!statusPopoverActive)
                                }
                                icon={<Icon source={ChevronDownIcon} />}
                                variant="plain"
                              />
                            }
                            onClose={() => setStatusPopoverActive(false)}
                          >
                            <ActionList
                              items={availableStatuses
                                .filter(
                                  (status) => !selectedStatuses.includes(status)
                                )
                                .map((status) => ({
                                  content: status,
                                  onAction: () => handleAddStatus(status),
                                }))}
                            />
                          </Popover>
                        </InlineStack>
                      </Box>
                    </InlineStack>

                    <Box width="300px">
                      <div className="settings-affilate-text">
                        <Text as="h6" variant="headingMd">
                          Should we cancel the affiliate commission if an order
                          (an affiliate sale) turns to one of the above
                          unsuccessful statuses?
                        </Text>
                      </div>
                      <div className="settings-affliate-select">
                        <Select
                          label=""
                          options={options}
                          onChange={handleSelectChange}
                          value={selected}
                        />
                      </div>
                    </Box>
                  </Card>
                </div>
              </div>
            </Box>

            <div className="divider1">
              <Divider />
            </div>

            <Box>
              <Text as="h6" variant="headingMd">
                Affiliate link destination
              </Text>
              <Text as="p" variant="bodyMd">
                Configure how an affiliate's link look and where to redirect
                when someone click the affiliate link, they will be redirect to
                this URL.
              </Text>
              <InlineStack gap="1000">
              <div className="affliate-settings-textfield2">
                <Select
                  label=""
                  options={options2}
                  onChange={handleSelectChange2}
                  value={selected2}
                />
              </div>
              <div className="affliate-settings-textfield3">
              <TextField label="" autoComplete="off" placeholder="Shop Url"></TextField>
              </div>
              </InlineStack>
            </Box>
          </BlockStack>
        </Layout.Section>
      </Layout>
    </Page>
  );
}

export default Settings;
