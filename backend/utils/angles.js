const ANGLE_MAX_VALUE = 360;

const reduceAngleTo360 = (angle) => {
  const angleN = Number(angle);
  if (angleN > ANGLE_MAX_VALUE) {
    return angleN - Math.trunc(angleN / ANGLE_MAX_VALUE) * ANGLE_MAX_VALUE;
  } else if (angleN < -ANGLE_MAX_VALUE) {
    return (
      angleN + Math.trunc(Math.abs(angle) / ANGLE_MAX_VALUE) * ANGLE_MAX_VALUE
    );
  }
  return angleN;
};

const angleToDegrees = (hour, minutes, seconds, negative) => {
  if (negative) {
    return (
      (-Math.abs(hour) + -Math.abs(minutes) / 60 + -Math.abs(seconds) / 3600) *
      15
    );
  }
  return (hour + minutes / 60 + seconds / 3600) * 15;
};

const angleToRadians = (hour, minutes, seconds, negative) => {
  return (angleToDegrees(hour, minutes, seconds, negative) * Math.PI) / 180;
};

export { reduceAngleTo360, angleToDegrees, angleToRadians };
