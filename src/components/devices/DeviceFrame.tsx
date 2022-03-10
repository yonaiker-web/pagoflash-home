import { FC, useMemo } from "react";
import { DeviceFramesetProps } from "react-device-frameset";
import { DeviceOptions } from "./DeviceOptions";

type Props = DeviceFramesetProps & {
  size?: number;
};

const DeviceFrame: FC<Props> = (props) => {
  const {
    children,
    device,
    width,
    height,
    zoom,
    size = 1,
    ...restProps
  } = props;

  //@ts-expect-error
  const { landscape: _l, color: _c, ...divProps } = restProps;

  const color = "color" in props ? props.color : undefined;
  const landscape = "landscape" in props ? props.landscape : undefined;

  const style = useMemo(
    () =>
      landscape && DeviceOptions[device].hasLandscape
        ? {
            width: height,
            height: width,
            transform: zoom !== undefined ? `scale(${zoom})` : undefined,
            "--size-divisor": size,
          }
        : {
            width,
            height,
            transform: zoom !== undefined ? `scale(${zoom})` : undefined,
            "--size-divisor": size,
          },
    [width, height, landscape, device, zoom, size]
  );

  return (
    <div
      className={`marvel-device ${DeviceOptions[device].device} ${
        color ? color : ""
      } ${landscape ? "landscape" : ""}`}
      {...divProps}
      style={style}
    >
      <div className="inner" />
      {device === "Galaxy Note 8" ? (
        <div className="overflow">
          <div className="shadow" />
        </div>
      ) : null}
      {device === "iPhone X" ? (
        <div className="notch">
          <div className="camera" />
          <div className="speaker" />
        </div>
      ) : null}
      <div className="top-bar" />
      <div className="sleep" />
      <div className="bottom-bar" />
      <div className="volume" />
      <div className="camera" />
      <div className="sensor" />
      <div className="speaker" />
      <div className="sensors" />
      <div className="more-sensors" />
      {device === "iPhone X" ? (
        <div className="overflow">
          <div className="shadow shadow--tr"></div>
          <div className="shadow shadow--tl"></div>
          <div className="shadow shadow--br"></div>
          <div className="shadow shadow--bl"></div>
        </div>
      ) : null}
      <div className="inner-shadow"></div>
      <div className="screen">{children}</div>
      <div className="home"></div>
      <div className="bottom-bar"></div>
    </div>
  );
};

export default DeviceFrame;
