import SimpleBar from "simplebar-react";
import "simplebar-react/dist/simplebar.min.css";
import { Box, SxProps } from "@mui/material";
import { styled } from "@mui/system";
import { useEffect, useRef } from "react";

const SimpleBarStyle = styled(SimpleBar)(() => ({
  maxHeight: "100%",
}));

interface PropsType {
  children: React.ReactElement | React.ReactNode;
  sx: SxProps;
}

const Scrollbar = (props: PropsType) => {
  const { children, sx, ...other } = props;
  const scrollbarRef = useRef<any>(null);

  useEffect(() => {
    // Force SimpleBar to recalculate on mount and when children change
    if (scrollbarRef.current) {
      scrollbarRef.current.recalculate();
    }
  }, [children]);

  const isMobile =
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    );
  if (isMobile) {
    return <Box sx={{ overflowX: "auto" }}>{children}</Box>;
  }

  return (
    <SimpleBarStyle ref={scrollbarRef} sx={sx} {...other}>
      {children}
    </SimpleBarStyle>
  );
};

export default Scrollbar;
