import * as React from "react";
import { styled } from "@mui/material/styles";
import Badge from "@mui/material/Badge";
import Avatar from "@mui/material/Avatar";

interface Props {
  url: string;
  size: string;
  alt: string;
  online: boolean;
}

export default function AvatarImage(props: Props) {
  const { url, alt, size, online } = props;

  let avatarSize;
  switch (size) {
    case "small":
      avatarSize = {
        width: 24,
        height: 24,
      };
      break;
    case "medium":
      avatarSize = {
        width: 36,
        height: 36,
      };
      break;
    case "big":
      avatarSize = {
        width: 56,
        height: 56,
      };
      break;
    default:
      avatarSize = {};
  }

  return (
    <>
      {online ? (
        <StyledBadge
          overlap="circular"
          anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
          variant="dot"
        >
          <Avatar alt={alt} src={url} sx={avatarSize} />
        </StyledBadge>
      ) : (
        <Avatar alt={alt} src={url} sx={avatarSize} />
      )}
    </>
  );
}

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    backgroundColor: "#44b700",
    color: "#44b700",
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    "&::after": {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      borderRadius: "50%",
      animation: "ripple 1.2s infinite ease-in-out",
      border: "1px solid currentColor",
      content: '""',
    },
  },
  "@keyframes ripple": {
    "0%": {
      transform: "scale(.8)",
      opacity: 1,
    },
    "100%": {
      transform: "scale(2.4)",
      opacity: 0,
    },
  },
}));
