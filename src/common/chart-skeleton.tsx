import { Card, Box, Grid, Skeleton, Typography } from "@mui/material";

const ChartSkeleton = () => (
  <Card sx={{ padding: 2, borderRadius: 2, boxShadow: 1 }}>
    {/* Title Skeleton */}
    <Typography variant="h6">
      <Skeleton
        variant="text"
        animation="wave"
        height={30}
        width="40%"
        sx={{ marginBottom: 2 }}
      />
    </Typography>

    {/* Chart Area Skeleton */}
    <Box
      sx={{
        position: "relative",
        height: 300,
        border: "1px solid #e0e0e0",
        borderRadius: 1,
        overflow: "hidden",
        backgroundColor: "#fafafa",
      }}
    >
      {/* Placeholder for Y-axis */}
      <Box
        sx={{
          position: "absolute",
          left: 0,
          top: 0,
          bottom: 0,
          width: "60px",
          backgroundColor: "#f5f5f5",
          padding: "10px",
        }}
      >
        <Skeleton
          variant="text"
          animation="wave"
          height={40}
          width="80%"
          sx={{ marginBottom: 1 }}
        />
        <Skeleton
          variant="text"
          animation="wave"
          height={40}
          width="80%"
          sx={{ marginBottom: 1 }}
        />
        <Skeleton
          variant="text"
          animation="wave"
          height={40}
          width="80%"
          sx={{ marginBottom: 1 }}
        />
        <Skeleton
          variant="text"
          animation="wave"
          height={40}
          width="80%"
          sx={{ marginBottom: 1 }}
        />
      </Box>

      {/* Placeholder for the main chart area */}
      <Skeleton variant="rectangular" animation="wave" height="100%" />

      {/* Optional: Placeholder for grid lines */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 60,
          right: 0,
          bottom: 0,
          pointerEvents: "none",
        }}
      >
        <Skeleton
          variant="rectangular"
          animation="wave"
          height="100%"
          sx={{ opacity: 0.1 }}
        />
      </Box>
    </Box>

    {/* Legend Skeleton */}
    <Grid container spacing={1} sx={{ marginTop: 2 }}>
      <Grid item xs={4}>
        <Skeleton variant="text" animation="wave" height={20} />
      </Grid>
      <Grid item xs={4}>
        <Skeleton variant="text" animation="wave" height={20} />
      </Grid>
      <Grid item xs={4}>
        <Skeleton variant="text" animation="wave" height={20} />
      </Grid>
    </Grid>

    {/* Additional Legend Items */}
    <Grid container spacing={1} sx={{ marginTop: 1 }}>
      <Grid item xs={6}>
        <Skeleton variant="text" animation="wave" height={15} width="80%" />
      </Grid>
      <Grid item xs={6}>
        <Skeleton variant="text" animation="wave" height={15} width="80%" />
      </Grid>
    </Grid>
  </Card>
);

const DashboardSkeleton = () => (
  <Grid container spacing={2}>
    {/* Skeleton for multiple charts */}
    <Grid item xs={12} md={6}>
      <ChartSkeleton />
    </Grid>
    <Grid item xs={12} md={6}>
      <ChartSkeleton />
    </Grid>
    <Grid item xs={12}>
      <ChartSkeleton />
    </Grid>
  </Grid>
);

export default DashboardSkeleton;
