// table skeleton

import { Box, Skeleton, Stack } from "@mui/material";

export const TableSkeleton = () => {
    // Generate array of 5 rows for skeleton
    const rows = Array.from({ length: 5 });

    return (
        <Box sx={{ width: "100%", py: 2 }}>
            {/* Header skeleton */}
            <Stack direction="row" spacing={{
                xs: 1,
                sm: 2,
                md: 3,
                lg: 4,
                xl: 5,
            }} sx={{ mb: 2 }}>
                {Array.from({ length: 4 }).map((_, index) => (
                    <Skeleton
                        key={`header-${index}`}
                        variant="rectangular"
                        width={index === 0 ? "30%" : "20%"}
                        height={40}
                        animation="wave"
                    />
                ))}
            </Stack>

            {/* Table rows skeleton */}
            {rows.map((_, rowIndex) => (
                <Stack
                    key={`row-${rowIndex}`}
                    direction="row"
                    spacing={{
                        xs: 1,
                        sm: 2,
                        md: 3,
                        lg: 4,
                        xl: 5,
                    }}
                    sx={{ mb: 2 }}
                >
                    {Array.from({ length: 4 }).map((_, colIndex) => (
                        <Skeleton
                            key={`cell-${rowIndex}-${colIndex}`}
                            variant="rectangular"
                            width={colIndex === 0 ? "30%" : "20%"}
                            height={50}
                            animation="wave"
                        />
                    ))}
                </Stack>
            ))}
        </Box>
    );
};

export default TableSkeleton;
