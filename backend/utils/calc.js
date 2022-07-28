const ANGLE_MAX_VALUE = 360;

export function reduceAngleTo360(angle) {
  if (angle > ANGLE_MAX_VALUE) {
    return angle - Math.trunc(angle / ANGLE_MAX_VALUE) * ANGLE_MAX_VALUE;
  } else if (angle < 0) {
    return (
      angle + Math.trunc(Math.abs(angle) / ANGLE_MAX_VALUE) * ANGLE_MAX_VALUE
    );
  }
  return angle;
}

export function angleToDegrees(hour, minutes, seconds, negative) {
  if (negative) {
    return (
      (-Math.abs(hour) + -Math.abs(minutes) / 60 + -Math.abs(seconds) / 3600) *
      15
    );
  }
  return (hour + minutes / 60 + seconds / 3600) * 15;
}

export function angleToRadians(hour, minutes, seconds) {
  return (angleToDegrees(hour, minutes, seconds) * Math.PI) / 180;
}
