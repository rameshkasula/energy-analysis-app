// create root reducer

import { combineReducers } from "@reduxjs/toolkit";

// reducers
import ThemeReducer from "@/toolkit/slices/theme-slice";
import FilterReducer from "@/toolkit/slices/filter-slice";
import UserReducer from "@/toolkit/slices/user-slice";
import categoryReducer from "@/toolkit/slices/category-slice";
import productReducer from "@/toolkit/slices/product-slice";
import electricityRatesReducer from "@/toolkit/slices/electricity-rates-slice";
import designsReducer from "@/toolkit/slices/designs-slice";
import solarRadiationReducer from "@/toolkit/slices/solar-radiation-slice";

const rootReducer = combineReducers({
  theme: ThemeReducer,
  filter: FilterReducer,
  user: UserReducer,
  category: categoryReducer,
  product: productReducer,
  electricityRates: electricityRatesReducer,
  designs: designsReducer,
  solarRadiation: solarRadiationReducer,
});

export default rootReducer;
