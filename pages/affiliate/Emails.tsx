import React, { useState, useCallback } from "react";
import {
  Page,
  Card,
  Tabs,
  Badge,
  Text,
  Button,
  Layout,
} from "@shopify/polaris";
import { EditIcon } from "@shopify/polaris-icons";
import Link from "next/link";

export default function EmailManagement() {
  const [selected, setSelected] = useState(0);

  const handleTabChange = useCallback(
    (selectedTabIndex) => setSelected(selectedTabIndex),
    []
  );

  const tabs = [
    {
      id: "all",
      content: (
        <span>
          All <Badge>6</Badge>
        </span>
      ),
    },
    {
      id: "admin",
      content: (
        <span>
          Admin <Badge>2</Badge>
        </span>
      ),
    },
    {
      id: "affiliate",
      content: (
        <span>
          Affiliate <Badge>4</Badge>
        </span>
      ),
    },
  ];

  const emailTemplates = [
    {
      id: "1",
      title: "Notify administrators when an affiliate sale is made",
      subject: "You've made a successful sale!",
      type: "Admin",
      editRoute:
        "affiliate/email/customize/default-email-template?type=AFFILIATE_SALES_EMAIL",
    },
    {
      id: "2",
      title: "Notify administrators when an affiliate application is received",
      subject: "You've an affiliate request",
      type: "Admin",
      editRoute:
        "affiliate/email/customize/default-email-template?type=FOR_AFFILIATE_REQUEST",
    },
    {
      id: "3",
      title: "Notify the affiliate when his application is approved",
      subject: "You're approved for an affiliate program",
      type: "Affiliate",
      editRoute:
        "affiliate/email/customize/default-email-template?type=FOR_AFFILIATE_REQUEST_APPROVAL",
    },
    {
      id: "4",
      title: "Notify when an affiliate earns a commission",
      subject: "You Earned a reward",
      type: "Affiliate",
      editRoute:
        "affiliate/email/customize/default-email-template?type=FOR_AFFILIATE_REWARD",
    },
    {
      id: "5",
      title: "Notify when payout is processed for an affiliate",
      subject: "You're credited in your account.",
      type: "Affiliate",
      editRoute:
        "affiliate/email/customize/default-email-template?type=FOR_AFFILIATE_PAYMENT",
    },
    {
      id: "6",
      title: "Notify when commission is redeemed as a coupon",
      subject: "You've made a successful sale!",
      type: "Affiliate",
      editRoute:
        "affiliate/email/customize/default-email-template?type=FOR_AFFILIATE_COUPON_COMMISSION",
    },
  ];

  // Filter emails based on selected tab
  const filteredEmails = emailTemplates.filter((email) => {
    if (selected === 0) return true; // All emails
    if (selected === 1) return email.type === "Admin"; // Admin emails
    if (selected === 2) return email.type === "Affiliate"; // Affiliate emails
    return false;
  });

  return (
    <Page title="Emails">
      <div className="affliate-affliate-email-tab">
        <Tabs tabs={tabs} selected={selected} onSelect={handleTabChange} />
      </div>

      <Layout>
        <Layout.Section>
          {filteredEmails.map((item) => {
            const { id, title, subject, type, editRoute } = item;

            return (
              <div className="affliate-email-card" key={id}>
                <Card>
                  <div className="affliate-email-content">
                    <div className="affliate-email-text">
                      <Text as="p" variant="bodyLg" fontWeight="bold">
                        {title}
                      </Text>
                      <div>
                        <Text as="span" variant="headingSm">
                          Subject:{" "}
                        </Text>
                        <Text as="span" variant="bodyMd">
                          {subject}
                        </Text>
                      </div>
                    </div>
                    <div className="affliate-email-actions">
                      <Badge>{type}</Badge>
                      <Link href={editRoute} passHref>
                        <Button icon={EditIcon} />
                      </Link>
                    </div>
                  </div>
                </Card>
              </div>
            );
          })}
        </Layout.Section>
      </Layout>
    </Page>
  );
}
