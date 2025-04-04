import {
  ActionList,
  Box,
  Button,
  Icon,
  InlineStack,
  Page,
  Popover,
  TextField,
} from "@shopify/polaris";
import React, { useCallback, useState } from "react";
import { FilterIcon, SearchIcon } from "@shopify/polaris-icons";

function CommissionEarnings() {
  const [searchValue, setSearchValue] = useState("");

  const handleSearchChange = (value: string) => {
    setSearchValue(value);
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
    { content: "Approved", onAction: () => handleFilterChange("Approved") },
    { content: "Cancelled", onAction: () => handleFilterChange("Cancelled") },
    { content: "Pending", onAction: () => handleFilterChange("Pending") },
    { content: "Claimed", onAction: () => handleFilterChange("Claimed") },
    { content: "Fraud", onAction: () => handleFilterChange("Fraud") },
  ];

  return (
    <Page title="Commission Earnings">
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
              <Button onClick={toggleActive}>Filter: {selectedFilter}</Button>
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
    </Page>
  );
}

export default CommissionEarnings;
