import { useDispatch, useSelector } from "react-redux";
import { setThemeData } from "@/toolkit/slices/theme-slice";
import AppDrawer from "@/common/app-drawer";
import { CustomRow } from "@/common/app-drawer-row";
import { Box, Chip, Stack, Typography } from "@mui/material";
import { dateFormatter, IS_ACTIVE } from "@/helpers/constants";

const ViewElectricityRate = () => {
    const dispatch = useDispatch();
    const themeData = useSelector((state: any) => state.theme);
    const featureDrawerData = themeData?.featureDrawerData;

    console.log("featureDrawerData", featureDrawerData)

    return (
        <AppDrawer
            isOpen={themeData?.featurDrawerView}
            onClose={() => {
                dispatch(setThemeData({ field: "featurDrawerView", data: false } as any));
            }}
            title="View Electricity Rate"
        >
            <Box sx={{ px: 1 }}>

                <CustomRow label={'City'} value={featureDrawerData?.city} />
                <CustomRow label={'Rate'} value={featureDrawerData?.rate} />
                <CustomRow label={'Unit'} value={featureDrawerData?.unit} />
                <CustomRow label={'Status'} value={featureDrawerData?.status} />
                <CustomRow label={'Active Status'} value={IS_ACTIVE[featureDrawerData?.isActive as keyof typeof IS_ACTIVE]} />
                <CustomRow label={'Notes'} value={featureDrawerData?.notes} />
                <CustomRow label={'Created At'} value={dateFormatter(featureDrawerData?.createdAt, "DATE_TIME_AM_PM")} />
                <CustomRow label={'Updated At'} value={dateFormatter(featureDrawerData?.updatedAt, "DATE_TIME_AM_PM")} />

            </Box>
        </AppDrawer>
    );
};

export default ViewElectricityRate; 