 const FACE_WIDTH = 180;
 const FACE_HEIGHT = 180;
 const CAMERA_WIDTH = 640;
 const CAMERA_HEIGHT = 480;
 const CANVAS_WIDTH = 480;
 const CANVAS_HEIGHT = 480;
 const CAPTURE_HEIGHT = 180;
 const CAPTURE_WIDTH = 180;
 const FACE_FRAME = [(CANVAS_WIDTH - FACE_WIDTH) / 2, (CANVAS_HEIGHT - FACE_HEIGHT) / 2, FACE_WIDTH, FACE_HEIGHT];

 const POINT_8 = 8;
 const RADIUS_1 = 1;
 const RADIUS_2 = 2;
 const RGBA_SHIFT = 4;
 const NEIGHBOUR_SHIFT = 3;
 const WEIGHT_BLOCK = [0.15, 0.08, 0.15, 0.08, 0.15, 0.08, 0.08, 0.15, 0.08];
 const UNIFORM_BINARY_PATTERN = ['non', 0, 1, 2, 3, 4, 6, 7, 8, 12, 14, 15, 16, 24, 28, 30, 31, 32, 48, 56, 60, 62, 63, 64, 96, 112, 120, 124, 126, 127, 128, 129, 131, 135, 143, 159, 191, 192, 193, 195, 199, 207, 223, 224, 225, 227, 231, 239, 240, 241, 243, 247, 248, 249, 251, 252, 253, 254, 255];
 const BLOCK_9_BY_9 = [
  [0, 0, CAPTURE_WIDTH / 3 + 1, CAPTURE_HEIGHT / 3 + 1],
  [CAPTURE_WIDTH / 3 - 1, 0, CAPTURE_WIDTH / 3 + 2, CAPTURE_HEIGHT / 3 + 1],
  [CAPTURE_WIDTH * 2 / 3 - 1, 0, CAPTURE_WIDTH + 1, CAPTURE_HEIGHT / 3 + 1],

  [0, CAPTURE_HEIGHT / 3 - 1, CAPTURE_WIDTH / 3 + 1, CAPTURE_HEIGHT / 3 + 2],
  [CAPTURE_WIDTH / 3 - 1, CAPTURE_HEIGHT / 3 - 1, CAPTURE_WIDTH / 3 + 2, CAPTURE_HEIGHT / 3 + 2],
  [CAPTURE_WIDTH * 2 / 3 - 1, CAPTURE_HEIGHT / 3 - 1, CAPTURE_WIDTH + 1, CAPTURE_HEIGHT / 3 + 2],

  [0, CAPTURE_HEIGHT * 2 / 3 - 1, CAPTURE_WIDTH / 3 + 1, CAPTURE_HEIGHT / 3 + 1],
  [CAPTURE_WIDTH / 3 - 1, CAPTURE_HEIGHT * 2 / 3 - 1, CAPTURE_WIDTH / 3 + 2, CAPTURE_HEIGHT / 3 + 1],
  [CAPTURE_WIDTH * 2 / 3 - 1, CAPTURE_HEIGHT * 2 / 3 - 1, CAPTURE_WIDTH + 1, CAPTURE_HEIGHT / 3 + 1]
];

 const CHI_RECOGNITION_DOF = 0.02;
 const CHI_RECOGNITION_BLOCKS_DOF = 0.05;
 const CHI_PREDICTION_DOF = 0.1;

 function unitStep(n) {
  if (n < 0) {
    return 0;
  } else if (n >= 0) {
    return 1;
  }
}

 function get1DPosition(colLength, x, y) {
  return x + y * colLength;
}

 function getCoordinate(colLength, position) {
  return {
    x: position % colLength,
    y: Math.floor(position / colLength)
  };
}

 function valuesArray(arrayOfObjects, key) {
  const values = [];
  for (let i = 0, total = arrayOfObjects.length; i < total; i++) {
    if (arrayOfObjects[i].hasOwnProperty(key)) {
      values.push(arrayOfObjects[i][key]);
    }
  }

  return values;
}
