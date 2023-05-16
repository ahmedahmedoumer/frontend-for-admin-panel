import { decomposeColor, SvgIcon } from "@mui/material";

export const POPPINS = {
  fontFamily: "Poppins !important",
};

export const DashboardIcon = (props) => {
  const { color } = props;

  return (
    <SvgIcon
      style={{ fill: "none", width: "24px", height: "24px", color: "red" }}
      viewBox="0 0 24 24"
    >
      <path
        d="M5 10H7C9 10 10 9 10 7V5C10 3 9 2 7 2H5C3 2 2 3 2 5V7C2 9 3 10 5 10Z"
        stroke={color}
        strokeWidth="1.5"
        kemiterlimit="10"
        rokelinecap="round"
        rokelinejoin="round"
      />
      <path
        d="M17 10H19C21 10 22 9 22 7V5C22 3 21 2 19 2H17C15 2 14 3 14 5V7C14 9 15 10 17 10Z"
        stroke={color}
        strokeWidth="1.5"
        kemiterlimit="10"
        rokelinecap="round"
        rokelinejoin="round"
      />
      <path
        d="M17 22H19C21 22 22 21 22 19V17C22 15 21 14 19 14H17C15 14 14 15 14 17V19C14 21 15 22 17 22Z"
        stroke={color}
        strokeWidth="1.5"
        kemiterlimit="10"
        rokelinecap="round"
        rokelinejoin="round"
      />
      <path
        d="M5 22H7C9 22 10 21 10 19V17C10 15 9 14 7 14H5C3 14 2 15 2 17V19C2 21 3 22 5 22Z"
        stroke={color}
        strokeWidth="1.5"
        kemiterlimit="10"
        rokelinecap="round"
        rokelinejoin="round"
      />
    </SvgIcon>
  );
};

export const AllUsersIcon = (props) => {
  const { color } = props;

  return (
    <SvgIcon
      style={{ fill: "none", width: "24", height: "24" }}
      viewBox="0 0 24 24"
    >
      <path
        d="M12.16 10.87C12.06 10.86 11.94 10.86 11.83 10.87C9.45 10.79 7.56 8.84 7.56 6.44C7.56 3.99 9.54 2 12 2C14.45 2 16.44 3.99 16.44 6.44C16.43 8.84 14.54 10.79 12.16 10.87Z"
        stroke={color}
        strokeWidth="1.5"
        rokelinecap="round"
        rokelinejoin="round"
      />
      <path
        d="M7.15997 14.56C4.73997 16.18 4.73997 18.82 7.15997 20.43C9.90997 22.27 14.42 22.27 17.17 20.43C19.59 18.81 19.59 16.17 17.17 14.56C14.43 12.73 9.91997 12.73 7.15997 14.56Z"
        stroke={color}
        strokeWidth="1.5"
        rokelinecap="round"
        rokelinejoin="round"
      />
    </SvgIcon>
  );
};

export function GalleryIcon(props) {
  const { color } = props;

  return (
    <SvgIcon
      style={{ fill: "none", width: "24", height: "24" }}
      viewBox="0 0 24 24"
    >
      <path
        d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z"
        stroke={color}
        strokeWidth="1.5"
        rokelinecap="round"
        rokelinejoin="round"
      />
      <path
        d="M9 10C10.1046 10 11 9.10457 11 8C11 6.89543 10.1046 6 9 6C7.89543 6 7 6.89543 7 8C7 9.10457 7.89543 10 9 10Z"
        stroke={color}
        strokeWidth="1.5"
        rokelinecap="round"
        rokelinejoin="round"
      />
      <path
        d="M2.66998 18.9501L7.59998 15.6401C8.38998 15.1101 9.52998 15.1701 10.24 15.7801L10.57 16.0701C11.35 16.7401 12.61 16.7401 13.39 16.0701L17.55 12.5001C18.33 11.8301 19.59 11.8301 20.37 12.5001L22 13.9001"
        stroke={color}
        strokeWidth="1.5"
        rokelinecap="round"
        rokelinejoin="round"
      />
    </SvgIcon>
  );
}

export const ReceiptIcon = (props) => {
  const { color } = props;

  return (
    <SvgIcon
      style={{ fill: "none", width: "24", height: "24" }}
      viewBox="0 0 24 24"
    >
      <path
        d="M20 7.04V16.96C20 18.48 19.86 19.56 19.5 20.33C19.5 20.34 19.49 20.36 19.48 20.37C19.26 20.65 18.97 20.79 18.63 20.79C18.1 20.79 17.46 20.44 16.77 19.7C15.95 18.82 14.69 18.89 13.97 19.85L12.96 21.19C12.56 21.73 12.03 22 11.5 22C10.97 22 10.44 21.73 10.04 21.19L9.02002 19.84C8.31002 18.89 7.05999 18.82 6.23999 19.69L6.22998 19.7C5.09998 20.91 4.10002 21.09 3.52002 20.37C3.51002 20.36 3.5 20.34 3.5 20.33C3.14 19.56 3 18.48 3 16.96V7.04C3 5.52 3.14 4.44 3.5 3.67C3.5 3.66 3.50002 3.65 3.52002 3.64C4.09002 2.91 5.09998 3.09 6.22998 4.3L6.23999 4.31C7.05999 5.18 8.31002 5.11 9.02002 4.16L10.04 2.81C10.44 2.27 10.97 2 11.5 2C12.03 2 12.56 2.27 12.96 2.81L13.97 4.15C14.69 5.11 15.95 5.18 16.77 4.3C17.46 3.56 18.1 3.21 18.63 3.21C18.97 3.21 19.26 3.36 19.48 3.64C19.5 3.65 19.5 3.66 19.5 3.67C19.86 4.44 20 5.52 20 7.04Z"
        stroke={color}
        strokeWidth="1.5"
        rokelinecap="round"
        rokelinejoin="round"
      />
      <path
        d="M8 10.25H16"
        stroke={color}
        strokeWidth="1.5"
        rokelinecap="round"
        rokelinejoin="round"
      />
      <path
        d="M8 13.75H14"
        stroke={color}
        strokeWidth="1.5"
        rokelinecap="round"
        rokelinejoin="round"
      />
    </SvgIcon>
  );
};
