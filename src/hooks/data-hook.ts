// format data to be used in the table

// remove the null values, undefined in the data array

import { useMemo } from "react";

export const useDataFormatter = (data: any[]) => {
    return useMemo(() => {
        if (data?.length > 0) {
            return data.filter((item: any) => item !== null && item !== undefined);
        }
        return [];
    }, [data]);
}

