 const utils = {}
 
 utils.FACE_WIDTH = 180;
 utils.FACE_HEIGHT = 180;
 utils.CAMERA_WIDTH = 640;
 utils.CAMERA_HEIGHT = 480;
 utils.CANVAS_WIDTH = 480;
 utils.CANVAS_HEIGHT = 480;
 utils.CAPTURE_HEIGHT = 180;
 utils.CAPTURE_WIDTH = 180;
 utils.FACE_FRAME = [(utils.CANVAS_WIDTH - utils.FACE_WIDTH) / 2, (utils.CANVAS_HEIGHT - utils.FACE_HEIGHT) / 2, utils.FACE_WIDTH, utils.FACE_HEIGHT];

 utils.POINT_8 = 8;
 utils.RADIUS_1 = 1;
 utils.RADIUS_2 = 2;
 utils.RGBA_SHIFT = 4;
 utils.NEIGHBOUR_SHIFT = 3;
 utils.WEIGHT_BLOCK = [0.15, 0.08, 0.15, 0.08, 0.15, 0.08, 0.08, 0.15, 0.08];
 utils.UNIFORM_BINARY_PATTERN = ['non', 0, 1, 2, 3, 4, 6, 7, 8, 12, 14, 15, 16, 24, 28, 30, 31, 32, 48, 56, 60, 62, 63, 64, 96, 112, 120, 124, 126, 127, 128, 129, 131, 135, 143, 159, 191, 192, 193, 195, 199, 207, 223, 224, 225, 227, 231, 239, 240, 241, 243, 247, 248, 249, 251, 252, 253, 254, 255];
 utils.BLOCK_9_BY_9 = [
  [0, 0, utils.CAPTURE_WIDTH / 3 + 1, utils.CAPTURE_HEIGHT / 3 + 1],
  [utils.CAPTURE_WIDTH / 3 - 1, 0, utils.CAPTURE_WIDTH / 3 + 2, utils.CAPTURE_HEIGHT / 3 + 1],
  [utils.CAPTURE_WIDTH * 2 / 3 - 1, 0, utils.CAPTURE_WIDTH + 1, utils.CAPTURE_HEIGHT / 3 + 1],

  [0, utils.CAPTURE_HEIGHT / 3 - 1, utils.CAPTURE_WIDTH / 3 + 1, utils.CAPTURE_HEIGHT / 3 + 2],
  [utils.CAPTURE_WIDTH / 3 - 1, utils.CAPTURE_HEIGHT / 3 - 1, utils.CAPTURE_WIDTH / 3 + 2, utils.CAPTURE_HEIGHT / 3 + 2],
  [utils.CAPTURE_WIDTH * 2 / 3 - 1, utils.CAPTURE_HEIGHT / 3 - 1, utils.CAPTURE_WIDTH + 1, utils.CAPTURE_HEIGHT / 3 + 2],

  [0, utils.CAPTURE_HEIGHT * 2 / 3 - 1, utils.CAPTURE_WIDTH / 3 + 1, utils.CAPTURE_HEIGHT / 3 + 1],
  [utils.CAPTURE_WIDTH / 3 - 1, utils.CAPTURE_HEIGHT * 2 / 3 - 1, utils.CAPTURE_WIDTH / 3 + 2, utils.CAPTURE_HEIGHT / 3 + 1],
  [utils.CAPTURE_WIDTH * 2 / 3 - 1, utils.CAPTURE_HEIGHT * 2 / 3 - 1, utils.CAPTURE_WIDTH + 1, utils.CAPTURE_HEIGHT / 3 + 1]
];

 utils.CHI_RECOGNITION_DOF = 0.02;
 utils.CHI_RECOGNITION_BLOCKS_DOF = 0.05;
 utils.CHI_PREDICTION_DOF = 0.1;

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
