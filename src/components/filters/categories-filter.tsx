/* eslint-disable react/display-name */
/* eslint-disable @typescript-eslint/no-explicit-any */

"use client";

import * as React from "react";
import Box from "@mui/material/Box";
import Popper, { PopperPlacementType } from "@mui/material/Popper";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Fade from "@mui/material/Fade";
import Paper from "@mui/material/Paper";
import {
  Checkbox,
  Chip,
  IconButton,
  OutlinedInput,
  Stack,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { useDispatch, useSelector } from "react-redux";
import { IconPresentation, IconToolsKitchen } from "@tabler/icons-react";
import Scrollbar from "@/common/scroll-bat";
import { setFilterData } from "@/toolkit/slices/filter-slice";


function CategoryFilter() {
  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(
    null
  );

  const dispatch = useDispatch();

  const [open, setOpen] = React.useState(false);
  const [search, setSearch] = React.useState<string>("");
  const [placement, setPlacement] = React.useState<PopperPlacementType>();

  const filtersData = useSelector((state: any) => state.filter);

  const [availableCategories, setAvailableCategories] = React.useState<any[]>(
    filtersData?.categories
  );

  const handleClick =
    (newPlacement: PopperPlacementType) =>
      (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
        setOpen((prev) => placement !== newPlacement || !prev);
        setPlacement(newPlacement);
      };

  // handle search input change

  const handleSearchInputChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    console.log("search input value", event.target.value);

    // lets filter the categories based on the search
    const searchValue = event.target.value;
    setSearch(searchValue);

    // lets filter the categories based on the search

    const filteredCategories = searchValue
      ? filtersData?.categories?.filter((category: any) =>
        category?.name?.toLowerCase().includes(searchValue.toLowerCase())
      )
      : filtersData?.categories;

    setAvailableCategories(filteredCategories);
  };

  const totalCategories = filtersData?.categories?.length;
  const selectedCategories = filtersData?.tempSelectedCategories?.length;

  React.useEffect(() => {
    setAvailableCategories(filtersData?.categories);
  }, [filtersData]);

  const handleSelectAll = (e: any) => {
    console.log("select all checkbox clicked");
    const selectData = filtersData?.categories?.map(
      (category: any) => category?.id
    );

    if (e.target.checked) {
      // lets update the selected categories
      dispatch(
        setFilterData({
          field: "tempSelectedCategories",
          data: selectData,
        })
      );
    } else {
      // lets update the selected categories
      dispatch(
        setFilterData({
          field: "tempSelectedCategories",
          data: [],
        })
      );
    }
  };

  return (
    <React.Fragment>
      <Button
        sx={{
          textTransform: "none",
          mt: 2,
        }}
        size="small"
        onClick={handleClick("bottom")}
        variant="outlined"
        startIcon={<IconPresentation size={18} stroke={2} />}
      >
        Categories ({selectedCategories}/{totalCategories})
      </Button>

      <Box sx={{ width: 700 }}>
        <Popper
          // Note: The following zIndex style is specifically for documentation purposes and may not be necessary in your application.
          sx={{ zIndex: 1200 }}
          open={open}
          anchorEl={anchorEl}
          placement={placement}
          transition
        >
          {({ TransitionProps }) => (
            <Fade {...TransitionProps} timeout={350}>
              <Paper
                sx={{
                  width: 420,
                  //  height: 300,
                }}
              >
                {/* lets implement search input , select all checkbox, close icon button  */}

                <Stack spacing={2} padding={2}>
                  <Stack direction="row" spacing={1} alignItems="center">
                    <OutlinedInput
                      placeholder="Search"
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
                    <IconButton size="small" onClick={handleClick("bottom")}>
                      <CloseIcon />
                    </IconButton>
                  </Stack>
                  <Scrollbar
                    sx={{ maxHeight: "50vh", width: "100%", display: "flex" }}
                  >
                    {
                      // lets implement categories list
                      availableCategories?.length > 0 ? (
                        availableCategories?.map((category: any) => {
                          const isSelected =
                            filtersData?.tempSelectedCategories?.includes(
                              category?.id
                            );
                          return (
                            <Chip
                              key={category?.id}
                              icon={<IconToolsKitchen />}
                              label={category?.name}
                              variant="outlined"
                              sx={{ margin: 0.2 }}
                              color={isSelected ? "primary" : "default"}
                              // lets handle category selection
                              // onDelete={() => {
                              //   console.log("category selected", category);
                              // }}
                              onClick={() => {
                                //   console.log("category selected", category);
                                if (isSelected) {
                                  // lets remove the category from selected categories

                                  const newSelectedCategories =
                                    filtersData?.tempSelectedCategories?.filter(
                                      (selectedCategory: any) =>
                                        selectedCategory !== category?.id
                                    );

                                  // lets update the selected categories
                                  dispatch(
                                    setFilterData({
                                      field: "tempSelectedCategories",
                                      data: newSelectedCategories,
                                    })
                                  );
                                } else {
                                  // lets add the category to selected categories
                                  const newSelectedCategories = [
                                    ...filtersData?.tempSelectedCategories,
                                    category?.id,
                                  ];
                                  // lets update the selected categories
                                  dispatch(
                                    setFilterData({
                                      field: "tempSelectedCategories",
                                      data: newSelectedCategories,
                                    })
                                  );
                                }
                              }}
                            />
                          );
                        })
                      ) : (
                        <Typography
                          sx={{
                            color: "gray",
                            fontSize: "1rem",
                            fontWeight: 500,
                            textAlign: "center",
                            marginTop: 2,
                            textTransform: "uppercase",
                          }}
                        >
                          No categories found
                        </Typography>
                      )
                    }
                  </Scrollbar>
                  {/* <Example categories={filtersData.categories} /> */}
                </Stack>
              </Paper>
            </Fade>
          )}
        </Popper>
      </Box>
    </React.Fragment>
  );
}

export default React.memo(CategoryFilter);
