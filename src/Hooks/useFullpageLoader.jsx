import React, { useState } from "react";

import { FullpageLoader } from "../Components/FullpageLoader";

const useFullpageLoader = () => {
  const [loading, setLoading] = useState(false);
  return [
    loading ? <FullpageLoader /> : null,
    () => setLoading(true),
    () => setLoading(false)
  ];
};

export default useFullpageLoader;
