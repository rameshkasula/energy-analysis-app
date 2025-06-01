/* eslint-disable react/display-name */
/* eslint-disable @typescript-eslint/no-explicit-any */

"use client";

import React, { useEffect, useRef, useState } from "react";
import {
  Box,
  Popper,
  Typography,
  Button,
  Fade,
  Paper,
  Checkbox,
  Chip,
  IconButton,
  OutlinedInput,
  Stack,
  ClickAwayListener,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { useDispatch, useSelector } from "react-redux";
import { IconPresentation, IconToolsKitchen } from "@tabler/icons-react";
import Scrollbar from "@/common/scroll-bar";
import { setFilterData } from "@/toolkit/slices/filter-slice";

function CategoryFilter() {
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState<string>("");
  const [availableCategories, setAvailableCategories] = useState<any[]>([]);

  const dispatch = useDispatch();
  const filtersData = useSelector((state: any) => state.filter);

  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    setAvailableCategories(filtersData?.categories);
  }, [filtersData]);

  const handleToggle = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
    setOpen((prev) => !prev);
  };

  const handleSearchInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const searchValue = event.target.value;
    setSearch(searchValue);
    const filtered = searchValue
      ? filtersData?.categories?.filter((cat: any) =>
        cat?.name?.toLowerCase().includes(searchValue.toLowerCase())
      )
      : filtersData?.categories;
    setAvailableCategories(filtered);
  };

  const handleSelectAll = (e: any) => {
    const selectData = filtersData?.categories?.map((c: any) => c?.id);
    dispatch(
      setFilterData({
        field: "tempSelectedCategories",
        data: e.target.checked ? selectData : [],
      })
    );
  };

  const handleClickAway = () => {
    setOpen(false);
  };

  const totalCategories = filtersData?.categories?.length;
  const selectedCategories = filtersData?.tempSelectedCategories?.length;

  return (
    <>
      <Button
        ref={buttonRef}
        sx={{ textTransform: "none", mt: 1, width: 180, height: 36 }}
        size="small"
        onClick={handleToggle}
        variant="outlined"
        startIcon={<IconPresentation size={18} stroke={2} />}
      >
        Categories ({selectedCategories}/{totalCategories})
      </Button>

      <Popper
        open={open}
        anchorEl={anchorEl}
        placement="bottom-start"
        transition
        modifiers={[{ name: "offset", options: { offset: [0, 8] } }]}
        sx={{ zIndex: 1300 }}
      >
        {({ TransitionProps }) => (
          <Fade {...TransitionProps} timeout={250}>
            <ClickAwayListener onClickAway={handleClickAway}>
              <Paper sx={{ width: 380, borderRadius: 2, boxShadow: 4 }}>
                <Stack spacing={2} padding={2}>
                  <Stack direction="row" spacing={1} alignItems="center">
                    <OutlinedInput
                      placeholder="Search categories"
                      fullWidth
                      size="small"
                      value={search}
                      onChange={handleSearchInputChange}
                    />
                    <Checkbox
                      checked={selectedCategories === totalCategories}
                      title="Select All"
                      size="small"
                      onChange={handleSelectAll}
                    />
                    <IconButton size="small" onClick={() => setOpen(false)}>
                      <CloseIcon />
                    </IconButton>
                  </Stack>

                  <Scrollbar sx={{ maxHeight: "45vh" }}>
                    {availableCategories?.length > 0 ? (
                      <Stack direction="row" flexWrap="wrap" gap={1}>
                        {availableCategories.map((category: any) => {
                          const isSelected = filtersData?.tempSelectedCategories?.includes(category?.id);
                          return (
                            <Chip
                              key={category?.id}
                              icon={<IconToolsKitchen />}
                              label={category?.name}
                              variant="outlined"
                              clickable
                              sx={{ borderRadius: 1 }}
                              color={isSelected ? "primary" : "default"}
                              onClick={() => {
                                const updated = isSelected
                                  ? filtersData?.tempSelectedCategories?.filter((id: any) => id !== category?.id)
                                  : [...filtersData?.tempSelectedCategories, category?.id];
                                dispatch(setFilterData({ field: "tempSelectedCategories", data: updated }));
                              }}
                            />
                          );
                        })}
                      </Stack>
                    ) : (
                      <Typography textAlign="center" color="text.secondary" mt={2}>
                        No categories found
                      </Typography>
                    )}
                  </Scrollbar>
                </Stack>
              </Paper>
            </ClickAwayListener>
          </Fade>
        )}
      </Popper>
    </>
  );
}

export default React.memo(CategoryFilter);