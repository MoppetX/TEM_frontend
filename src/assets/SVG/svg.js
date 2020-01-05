import React from 'react';

const xmlns = 'http://www.w3.org/2000/svg';
const xmlnsXlink = 'http://www.w3.org/1999/xlink';
const X = 30;
const S = 24;

export const MenuIcon = () => {
  return (
    <svg
      viewBox={`0 0 ${X} ${X}`}
      width={'3rem'}
      height={'3rem'}
      xmlns={xmlns}
      xmlnsXlink={xmlnsXlink}
    >
      <title>svg_main_menu</title>
      {/*<g id="bg">*/}
      {/*  /!* the problem here lies with the 'none' attribute in fill *!/*/}
      {/*  <path id="Path_264" d="M0,0H30V30H0Z" style="'fill': 'none'"/>*/}
      {/*</g>*/}
      <g id="icon">
        <path
          id="Path_1993"
          fill={'currentColor'}
          d="M15,10.53A19.35,19.35,0,0,0,1.73,5.3V21.51A19.41,19.41,0,0,1,15,26.75a19.41,19.41,0,0,1,13.27-5.24V5.3A19.35,19.35,0,0,0,15,10.53Z"
        />
      </g>
    </svg>
  );
};

export const HeartFilledIcon = ({ fill }) => {
  return (
    <svg
      viewBox={`0 0 ${S} ${S}`}
      width={'2.4rem'}
      height={'2.4rem'}
      xmlns={xmlns}
      xmlnsXlink={xmlnsXlink}
    >
      <title>svg_heart_fill</title>
      {/*<g id="bg">*/}
      {/*  <path id="Path_262" data-name="Path 262" d="M0,0H24V24H0Z" style="fill: none"/>*/}
      {/*</g>*/}
      <g id="icon">
        <path
          id="Path_263"
          fill={fill}
          data-name="Path 263"
          d="M12,21.18l-1.45-1.32C5.4,15.19,2,12.11,2,8.33a5.44,5.44,0,0,1,5.39-5.5.21.21,0,0,1,.11,0A6,6,0,0,1,12,4.92a6,6,0,0,1,4.5-2.09A5.44,5.44,0,0,1,22,8.22v.11c0,3.78-3.4,6.86-8.55,11.54Z"
        />
      </g>
    </svg>
  );
};

export const HeartOutlineIcon = ({ fill }) => {
  return (
    <svg
      viewBox={`0 0 ${S} ${S}`}
      width={'2.4rem'}
      height={'2.4rem'}
      xmlns={xmlns}
      xmlnsXlink={xmlnsXlink}
    >
      <title>svg_heart_outline</title>
      {/*<g id="bg">*/}
      {/*  <path id="Path_264" data-name="Path 264" d="M0,0H24V24H0Z" style="fill: none"/>*/}
      {/*</g>*/}
      <g id="icon">
        <path
          id="Path_265"
          data-name="Path 265"
          fill={fill}
          d="M16.5,2.83A6,6,0,0,0,12,4.92,6,6,0,0,0,7.5,2.83,5.44,5.44,0,0,0,2,8.22v.11c0,3.78,3.4,6.86,8.55,11.54L12,21.18l1.45-1.32C18.6,15.19,22,12.11,22,8.33a5.44,5.44,0,0,0-5.39-5.5A.21.21,0,0,0,16.5,2.83ZM12.1,18.38l-.1.1-.1-.1C7.14,14.07,4,11.22,4,8.33a3.41,3.41,0,0,1,3.33-3.5H7.5a3.9,3.9,0,0,1,3.57,2.36h1.87A3.87,3.87,0,0,1,16.5,4.83,3.41,3.41,0,0,1,20,8.16v.17C20,11.22,16.86,14.07,12.1,18.38Z"
        />
      </g>
    </svg>
  );
};

export const CookingTimeIcon = () => {
  return (
    <svg
      viewBox={`0 0 ${S} ${S}`}
      width={'2.4rem'}
      height={'2.4rem'}
      xmlns={xmlns}
      xmlnsXlink={xmlnsXlink}
    >
      <title>svg_cooking_time</title>
      <g id="bg">
        <path
          id="Path_1006"
          data-name="Path 1006"
          d="M0,0H24V24H0Z"
          fill="none"
        />
      </g>
      <g id="icon">
        <path
          id="Path_1007"
          data-name="Path 1007"
          fill={'current color'}
          d="M22,5.79,17.4,1.93,16.11,3.46l4.6,3.86ZM7.88,3.46,6.6,1.93,2,5.78,3.29,7.31ZM12.5,8.07H11v6l4.75,2.85.75-1.23-4-2.37Zm-.5-4a9,9,0,1,0,9,9A9,9,0,0,0,12,4.07Zm0,16a7,7,0,1,1,7-7,7,7,0,0,1-7,7Z"
        />
      </g>
    </svg>
  );
};

export const ServingSizeIcon = () => {
  return (
    <svg
      viewBox={`0 0 ${S} ${S}`}
      width={'2.4rem'}
      height={'2.4rem'}
      xmlns={xmlns}
      xmlnsXlink={xmlnsXlink}
    >
      <title>svg_serving_size</title>
      <g id="bg">
        <path
          id="Path_1935"
          data-name="Path 1935"
          d="M0,0H24V24H0Z"
          fill={'none'}
        />
      </g>
      <g id="icon">
        <path
          id="Path_1934"
          data-name="Path 1934"
          fill={'currentColor'}
          d="M11,9H9V2H7V9H5V2H3V9a4,4,0,0,0,3.75,4v9h2.5V13A4,4,0,0,0,13,9V2H11Zm5-3v8h2.5v8H21V2C18.24,2,16,4.24,16,6Z"
        />
      </g>
    </svg>
  );
};

export const PlateAndCutleryIcon = () => {
  return (
    <svg xmlns={xmlns} xmlnsXlink={xmlnsXlink} viewBox="0 0 140 90">
      <title>svg_plate_cutlery</title>
      <g id="icon">
        <g>
          <path
            d="M24.41,37.64l-2-14.42-4.11.57,2,14.43-4.12.57-2-14.42L10,25l2,14.42L7.93,40l-2-14.42-4.12.58,2,14.42a8.3,8.3,0,0,0,8.87,7.1L18.08,86l5.15-.73L17.83,46.9A8.28,8.28,0,0,0,24.41,37.64Z"
            fill={'#fff'}
          />
          <circle cx="75.72" cy="45" r="32.5" fill={'#fff'} />
          <path
            d="M75.72,2.88A42.12,42.12,0,1,0,117.84,45,42.12,42.12,0,0,0,75.72,2.88ZM110.22,45c0,.83,0,1.65-.1,2.47a34.49,34.49,0,0,1-33.72,32l-.68,0h-.46a34.5,34.5,0,1,1,34.86-36.92C110.18,43.38,110.22,44.18,110.22,45Z"
            fill={'#fff'}
          />
          <path
            d="M127.82,17.82V54.47H133V81.11h5.2V9.5C132.48,9.5,127.82,14.16,127.82,17.82Z"
            fill={'#fff'}
          />
        </g>
      </g>
    </svg>
  );
};

export const AddIcon = () => {
  return (
    <svg xmlns={xmlns} xmlnsXlink={xmlnsXlink} viewBox={`0 0 ${S} ${S}`}>
      <title>svg_add</title>
      {/*<g id="bg">*/}
      {/*  <path id="Path_913"*/}
      {/*        data-name="Path 913" d="M0,0H24V24H0Z"*/}
      {/*        fill={'none'}/>*/}
      {/*</g>*/}
      <g id="icon">
        <path
          id="Path_912"
          data-name="Path 912"
          d="M19,13H13v6H11V13H5V11h6V5h2v6h6Z"
          fill={'currentColor'}
        />
      </g>
    </svg>
  );
};
