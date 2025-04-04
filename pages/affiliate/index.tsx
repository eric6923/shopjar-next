import React, { useState, useCallback } from "react";
import {
  Page,
  Layout,
  Box,
  Text,
  BlockStack,
  Card,
  Button,
} from "@shopify/polaris";
import { EditIcon } from "@shopify/polaris-icons";
import ComissionTiers from "./ComissionTiers";
import router, { Router } from "next/router";
import Emails from "./Emails";
import Sales from "./Sales";
import CommissionEarnings from "./CommissionEarnings";
import Payouts from "./Payouts";
import PaymentMethods from "./PaymentMethods";
import Settings from "./Settings";

const VerticalTabsComponent = () => {
  const [selectedTab, setSelectedTab] = useState("commission-tiers");

  const handleTabChange = useCallback((tabId) => {
    setSelectedTab(tabId);
  }, []);

  const tabs = [
    { id: "commission-tiers", label: "Commission Tiers" },
    { id: "affiliate-signup", label: "Affiliate Signup Form" },
    { id: "emails", label: "Emails" },
    { id: "sales", label: "Sales" },
    { id: "commission-earnings", label: "Commission Earnings" },
    { id: "payouts", label: "Payouts" },
    { id: "payment-methods", label: "Payment Methods" },
    { id: "settings", label: "Settings" },
  ];

  // Content rendering based on selected tab
  const renderContent = () => {
    switch (selectedTab) {
      case "commission-tiers":
        return <ComissionTiers />;
      case "affiliate-signup":
        return (
          <Page title="Affiliate Signup Form">
          <Box padding="400">
              <div className="affliate-signup-card">
                <Card>
                  <div className="affliate-card-1">
                    <Text as="h1" variant="headingMd">
                      Affiliate Sign-up form
                    </Text>
                    <div className="affliate-signup-btn">
                      <Button
                        icon={EditIcon}
                        onClick={() =>
                          router.push(
                            "/affiliate/page/customize/default-affiliate-request-form-page-template"
                          )
                        }
                      ></Button>
                    </div>
                  </div>
                  <div className="affliate-signup-text2">
                    <Text as="p" variant="bodyLg">
                      Let people apply to become a member of your affiliate
                      program. The form will help you capture the details of the
                      potential affiliate members, review their application and
                      approve them. It will be helpful to influencers, brand
                      ambassadors and manage them effectively.
                    </Text>
                  </div>
                </Card>
              </div>
          </Box>
          </Page>
        );
      case "emails":
        return (
          <Box padding="400">
            <Emails/>
          </Box>
        );
      case "sales":
        return (
          <Box padding="400">
            <Sales/>
          </Box>
        );
      case "commission-earnings":
        return (
          <Box padding="400">
            <CommissionEarnings/>
          </Box>
        );
      case "payouts":
        return (
          <Box padding="400">
            <Payouts/>
          </Box>
        );
      case "payment-methods":
        return (
          <Box padding="400">
            <PaymentMethods/>
          </Box>
        );
      case "settings":
        return (
          <Box padding="400">
            <Settings/>
          </Box>
        );
      default:
        return null;
    }
  };

  return (
    <Page>
      <Layout>
        <Layout.Section>
          {/* Card with defined width and height */}
          <div
            style={{
              width: "1225px",
              maxWidth: "1400px",
              marginLeft: "0px",
              position: "relative",
              left: "-135px",
            }}
          >
            <Card padding="0">
              <div
                style={{
                  display: "flex",
                  height: "600px", // Set a fixed height for the card
                  width: "100%",
                }}
              >
                {/* Vertical Tabs Sidebar */}
                <div
                  style={{
                    width: "200px", // Increased width of sidebar
                    borderRight: "1px solid #dfe3e8",
                    padding: "16px 0",
                    height: "100%", // Full height of the card
                    overflowY: "auto", // Add scroll if needed
                  }}
                >
                  <BlockStack>
                    {tabs.map((tab) => (
                      <div
                        key={tab.id}
                        onClick={() => handleTabChange(tab.id)}
                        style={{
                          padding: "16px 20px", // Increased padding
                          cursor: "pointer",
                          backgroundColor: "transparent",
                          borderRight:
                            selectedTab === tab.id
                              ? "3px solid #000000"
                              : "3px solid transparent",
                          color: "#202223",
                          fontWeight: selectedTab === tab.id ? "700" : "400",
                          fontSize: "15px", // Slightly larger text
                        }}
                      >
                        {tab.label}
                      </div>
                    ))}
                  </BlockStack>
                </div>

                {/* Main Content Area */}
                <div
                  style={{
                    flex: 1,
                    overflowY: "auto", // Add scroll if content exceeds height
                    height: "100%", // Full height of the card
                  }}
                >
                  {renderContent()}
                </div>
              </div>
            </Card>
          </div>
        </Layout.Section>
      </Layout>
    </Page>
  );
};

export default VerticalTabsComponent;
