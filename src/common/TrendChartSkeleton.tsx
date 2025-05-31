// TrendChartSkeleton.tsx
import React from "react";
import {
  Box,
  Card,
  CardContent,
  CardHeader,
  Skeleton,
  useTheme,
} from "@mui/material";

interface TrendChartSkeletonProps {
  height?: number;
  animation?: "pulse" | "wave";
  title?: boolean;
}

const TrendChartSkeleton: React.FC<TrendChartSkeletonProps> = ({
  height = 300,
  animation = "wave",
  title = true,
}) => {
  const theme = useTheme();

  return (
    <Card>
      {title && (
        <CardHeader
          title={<Skeleton animation={animation} width="40%" height={32} />}
          subheader={<Skeleton animation={animation} width="20%" height={20} />}
        />
      )}
      <CardContent>
        {/* Legend skeleton */}
        <Box sx={{ mb: 2, display: "flex", gap: 2 }}>
          {[1, 2, 3].map((item) => (
            <Skeleton
              key={item}
              animation={animation}
              variant="rectangular"
              width={80}
              height={24}
              sx={{ borderRadius: 1 }}
            />
          ))}
        </Box>

        {/* Chart grid lines skeleton */}
        <Box
          sx={{
            height: height,
            position: "relative",
            mb: 3,
          }}
        >
          {/* Y-axis labels */}
          <Box
            sx={{ position: "absolute", left: 0, height: "100%", width: 40 }}
          >
            {[0, 1, 2, 3, 4].map((item) => (
              <Skeleton
                key={item}
                animation={animation}
                width={30}
                height={20}
                sx={{
                  position: "absolute",
                  top: `${item * 25}%`,
                  transform: "translateY(-50%)",
                }}
              />
            ))}
          </Box>

          {/* Chart area */}
          <Box
            sx={{
              ml: 5,
              height: "100%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            {/* Horizontal grid lines */}
            {[0, 1, 2, 3, 4].map((item) => (
              <Skeleton
                key={item}
                animation={animation}
                variant="rectangular"
                height={1}
                sx={{
                  width: "100%",
                  backgroundColor: theme.palette.grey[200],
                }}
              />
            ))}

            {/* Chart line skeleton */}
            <Skeleton
              animation={animation}
              variant="rectangular"
              height={2}
              sx={{
                width: "100%",
                position: "absolute",
                top: "30%",
                transform: "translateY(-50%)",
                backgroundColor: theme.palette.primary.main,
              }}
            />
          </Box>
        </Box>

        {/* X-axis labels */}
        <Box sx={{ display: "flex", justifyContent: "space-between", pl: 5 }}>
          {[1, 2, 3, 4, 5, 6, 7].map((item) => (
            <Skeleton key={item} animation={animation} width={40} height={20} />
          ))}
        </Box>
      </CardContent>
    </Card>
  );
};

export default TrendChartSkeleton;
