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
import Scrollbar from "@/common/scroll-bar";

interface FilterChipPopperProps {
    label: string;
    data: any[];
    selected: any[];
    setSelected: (items: any[]) => void;
    icon?: React.ReactNode;
    searchable?: boolean;
    searchPlaceholder?: string;
    getOptionLabel?: (item: any) => string;
    getOptionValue?: (item: any) => any;
}

const CommonFilter: React.FC<FilterChipPopperProps> = ({
    label,
    data = [],
    selected = [],
    setSelected,
    icon,
    searchable = true,
    searchPlaceholder = "Search...",
    getOptionLabel = (item) => item?.name || '',
    getOptionValue = (item) => item?.id || '',
}) => {
    const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);
    const [open, setOpen] = useState(false);
    const [search, setSearch] = useState<string>("");
    const [availableOptions, setAvailableOptions] = useState<any[]>([]);

    const buttonRef = useRef<HTMLButtonElement>(null);

    useEffect(() => {
        if (Array.isArray(data)) {
            setAvailableOptions(data);
        } else {
            setAvailableOptions([]);
            console.warn('CommonFilter: data prop must be an array');
        }
    }, [data]);

    const handleToggle = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
        setOpen((prev) => !prev);
    };

    const handleSearchInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const searchValue = event.target.value;
        setSearch(searchValue);

        if (!Array.isArray(data)) {
            setAvailableOptions([]);
            return;
        }

        const filtered = searchValue
            ? data.filter((item) => {
                if (!item) return false;
                const label = getOptionLabel(item);
                return label?.toLowerCase().includes(searchValue.toLowerCase());
            })
            : data;
        setAvailableOptions(filtered);
    };

    const handleSelectAll = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (!Array.isArray(data)) {
            setSelected([]);
            return;
        }

        const allIds = data
            .filter(item => item !== null && item !== undefined)
            .map((item) => getOptionValue(item));
        setSelected(e.target.checked ? allIds : []);
    };

    const handleClickAway = () => {
        setOpen(false);
    };

    const handleChipClick = (value: any) => {
        if (!Array.isArray(selected)) {
            setSelected([value]);
            return;
        }

        const isSelected = selected.includes(value);
        const updated = isSelected
            ? selected.filter((v) => v !== value)
            : [...selected, value];
        setSelected(updated);
    };

    const totalCount = Array.isArray(data) ? data.length : 0;
    const selectedCount = Array.isArray(selected) ? selected.length : 0;

    return (
        <>
            <Button
                ref={buttonRef}
                sx={{ textTransform: "none", mt: 1, minWidth: 80, maxWidth: 280, height: 30 }}
                size="small"
                onClick={handleToggle}
                variant="outlined"
                startIcon={icon}
                disabled={!Array.isArray(data) || data.length === 0}
            >
                {label} ({selectedCount}/{totalCount})
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
                                        {searchable && (
                                            <OutlinedInput
                                                placeholder={searchPlaceholder}
                                                fullWidth
                                                size="small"
                                                value={search}
                                                onChange={handleSearchInputChange}
                                                disabled={!Array.isArray(data) || data.length === 0}
                                            />
                                        )}
                                        <Checkbox
                                            checked={selectedCount === totalCount && totalCount > 0}
                                            indeterminate={selectedCount > 0 && selectedCount < totalCount}
                                            title="Select All"
                                            size="small"
                                            onChange={handleSelectAll}
                                            disabled={!Array.isArray(data) || data.length === 0}
                                        />
                                        <IconButton size="small" onClick={() => setOpen(false)}>
                                            <CloseIcon />
                                        </IconButton>
                                    </Stack>

                                    <Scrollbar sx={{ maxHeight: "45vh" }}>
                                        {availableOptions?.length > 0 ? (
                                            <Stack direction="row" flexWrap="wrap" gap={1}>
                                                {availableOptions.map((item: any) => {
                                                    if (!item) return null;

                                                    const value = getOptionValue(item);
                                                    const label = getOptionLabel(item);

                                                    if (!value || !label) return null;

                                                    const isSelected = selected.includes(value);
                                                    return (
                                                        <Chip
                                                            key={value}
                                                            label={label}
                                                            variant="outlined"
                                                            clickable
                                                            sx={{ borderRadius: 1 }}
                                                            color={isSelected ? "primary" : "default"}
                                                            onClick={() => handleChipClick(value)}
                                                        />
                                                    );
                                                })}
                                            </Stack>
                                        ) : (
                                            <Typography textAlign="center" color="text.secondary" mt={2}>
                                                {!Array.isArray(data) ? 'Invalid data format' : 'No data found'}
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
};

export default React.memo(CommonFilter);
