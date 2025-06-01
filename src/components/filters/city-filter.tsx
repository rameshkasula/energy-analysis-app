/* eslint-disable react/display-name */

"use client";

import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import { IconBuilding } from "@tabler/icons-react";
import CommonFilter from "./common-filter";
import { setFilterData } from "@/toolkit/slices/filter-slice";

const CityFilter = () => {
    const dispatch = useDispatch();
    const filtersData = useSelector((state: any) => state.filter);

    const handleSelectionChange = (selected: string[]) => {
        dispatch(
            setFilterData({
                field: "tempSelectedCities",
                data: selected,
            })
        );
    };

    return (
        <CommonFilter
            label={"Cities"}
            data={filtersData?.cities || []}
            selected={filtersData?.tempSelectedCities || []}
            setSelected={handleSelectionChange}
            icon={<IconBuilding size={18} stroke={2} />}
        />
    );
};

export default React.memo(CityFilter);
