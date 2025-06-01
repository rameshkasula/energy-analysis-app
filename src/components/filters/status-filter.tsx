/* eslint-disable react/display-name */

"use client";

import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import { IconChecklist } from "@tabler/icons-react";
import CommonFilter from "./common-filter";
import { setFilterData } from "@/toolkit/slices/filter-slice";
import { STATUS } from "@/helpers/constants";

const StatusFilter = () => {
    const dispatch = useDispatch();
    const filtersData = useSelector((state: any) => state.filter);

    const handleSelectionChange = (selected: string[]) => {
        dispatch(
            setFilterData({
                field: "tempSelectedStatus",
                data: selected,
            })
        );
    };

    return (
        <CommonFilter
            label="Status"
            icon={<IconChecklist size={18} stroke={2} />}
            data={Object.values(STATUS)}
            selected={filtersData?.tempSelectedStatus || []}
            setSelected={handleSelectionChange}
        />
    );
};

export default React.memo(StatusFilter); 