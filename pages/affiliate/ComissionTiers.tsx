"use client";

import { useCallback, useState } from "react";
import {
  Page,
  Card,
  Button,
  TextField,
  Text,
  Box,
  InlineStack,
  BlockStack,
  Divider,
  Icon,
  Tooltip,
  Pagination,
  Popover,
  ActionList,
} from "@shopify/polaris";
import {
  FilterIcon,
  SearchIcon,
  EditIcon,
  DeleteIcon,
  PlusCircleIcon,
  SortIcon,
} from "@shopify/polaris-icons";
// import { ToggleSwitch } from "./toggle-switch"

export default function CommissionTiers() {
  const [isReferralSaleTagEnabled, setIsReferralSaleTagEnabled] =
    useState(true);
  const [searchValue, setSearchValue] = useState("");
  const [isActive, setIsActive] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageInput, setPageInput] = useState("1");

  const handleSearchChange = (value: string) => {
    setSearchValue(value);
  };

  const handleToggleActive = () => {
    setIsActive(!isActive);
  };

  const handlePageInputChange = (value: string) => {
    setPageInput(value);
  };

  const handleGoToPage = () => {
    const page = Number.parseInt(pageInput, 10);
    if (!isNaN(page) && page > 0) {
      setCurrentPage(page);
    }
  };

  // Popover Stuffs
  const [active, setActive] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState("All");

  const toggleActive = useCallback(() => setActive((active) => !active), []);

  const handleFilterChange = (value: any) => {
    setSelectedFilter(value);
    setActive(false);
  };

  const items = [
    { content: "All", onAction: () => handleFilterChange("All") },
    { content: "Active", onAction: () => handleFilterChange("Active") },
    { content: "Inactive", onAction: () => handleFilterChange("InActive") },
  ];

  return (
    <Page
      title="Commission Tiers"
      titleMetadata={
        <div
          style={{
            display: "flex",
            width: "100%",
            paddingLeft: "470px",
            paddingTop: "6px",
            gap: "10px",
          }}
        >
          <Button
            size="large"
            icon={SortIcon}
            onClick={() => console.log("Manage priority clicked")}
          >
            Manage Priority
          </Button>
          <Button
            variant="primary"
            size="large"
            icon={PlusCircleIcon}
            onClick={() => console.log("Create new tier clicked")}
          >
            Create New Tier
          </Button>
        </div>
      }
    >
      <BlockStack gap="400">
        <BlockStack gap="400">
          <Box
            paddingBlockStart="400"
            paddingBlockEnd="200"
            paddingInlineStart="400"
            paddingInlineEnd="400"
          >
            <InlineStack align="space-between">
              <Popover
                active={active}
                activator={
                  <Button onClick={toggleActive}>
                    Filter: {selectedFilter}
                  </Button>
                }
                onClose={toggleActive}
              >
                <ActionList items={items} />
              </Popover>
              <InlineStack gap="200">
                <TextField
                  label=""
                  value={searchValue}
                  onChange={handleSearchChange}
                  placeholder="Search by title"
                  prefix={<Icon source={SearchIcon} />}
                  autoComplete="off"
                />
                <Button variant="primary">Search</Button>
              </InlineStack>
            </InlineStack>
          </Box>

          <Divider />

          <Box
            paddingBlockStart="400"
            paddingBlockEnd="400"
            paddingInlineStart="400"
            paddingInlineEnd="400"
          >
            <Card>
              <InlineStack align="space-between" blockAlign="center">
                <BlockStack gap="100">
                  <Text variant="headingMd" as="h3">
                    Reward for Affiliates
                  </Text>
                  <Text variant="bodyMd" as="p">
                    10% Commission | Created on March 31, 2025
                  </Text>
                </BlockStack>
                <InlineStack gap="400" blockAlign="center">
                  {/* <ToggleSwitch checked={isActive} onChange={handleToggleActive} label="Active" /> */}
                  <div className="enable-comission">
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
                        {isReferralSaleTagEnabled ? "Active" : "Draft"}
                      </span>
                    </div>
                  </div>
                  <Tooltip content="Edit">
                    <Button
                      icon={EditIcon}
                      variant="secondary"
                      accessibilityLabel="Edit"
                    />
                  </Tooltip>
                  <Tooltip content="Delete">
                    <Button
                      icon={DeleteIcon}
                      variant="secondary"
                      accessibilityLabel="Delete"
                      tone="critical"
                    />
                  </Tooltip>
                </InlineStack>
              </InlineStack>
            </Card>
          </Box>

          <Divider />

          <Box
            paddingBlockStart="400"
            paddingBlockEnd="400"
            paddingInlineStart="400"
            paddingInlineEnd="400"
          >
            <InlineStack align="space-between" blockAlign="center">
              <Text variant="bodyMd" as="p">
                Showing 1 out of 1
              </Text>
              <InlineStack gap="200" blockAlign="center">
                <Pagination
                  hasPrevious={false}
                  onPrevious={() => {}}
                  hasNext={false}
                  onNext={() => {}}
                />
                <Text variant="bodyMd" as="span">
                  Jump to page
                </Text>
                <div style={{ width: "60px" }}>
                  <TextField
                    value={pageInput}
                    onChange={handlePageInputChange}
                    autoComplete="off"
                    labelHidden
                    label="Page number"
                  />
                </div>
                <Button onClick={handleGoToPage}>Go</Button>
              </InlineStack>
            </InlineStack>
          </Box>
        </BlockStack>
      </BlockStack>
    </Page>
  );
}
