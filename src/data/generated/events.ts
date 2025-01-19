export const events = {
  "2025": {
    "1": {
      "task": {
        "title": "Random lines",
        "description": "Draw 100 random lines",
        "hints": [
          "Math.random() returns random value between 0 and 1.",
          "You can multiply this random value to get a different range. Eg. Math.random() * canvas.width will get you random value between 0 and canvas.width",
          "Using moveTo and lineTo you can draw a line between 2 points."
        ]
      },
      "unlockedAt": "2025-01-18T00:00:00.000Z"
    },
    "2": {
      "task": {
        "title": "Bouncing ball",
        "description": "Draw a ball that starts at the center of the screen and moves in random direction. It should always move with the same speed regardless of the direction. It should bounce off the screen edges",
        "hints": [
          "The velocity on y and x axis should always sum up to the same value.",
          "You can multiply Math.random() by 2*Math.PI to get a random angle. Math.cos of that angle will give you velocity on x axis, and Math.sin will give you velocity on y axis. Sum of these velocities will be equal to 1 (so the speed will be always 1)",
          "You can add that velocity to the ball position to make the ball move and invert velocity on given axis when the ball touches the edge of the screen eg. if ball.position.x < 0 then ball.velocity.x = -ball.velocity.x",
          "You can use setInterval to keep drawing and updating canvas eg. 60 times a second - setInterval(aFunction, 1000/60)"
        ]
      },
      "unlockedAt": "2025-01-19T00:00:00.000Z"
    },
    "3": {
      "task": {
        "title": "A follower",
        "description": "Draw a ball that starts at the center of the screen and moves towards the mouse. It should move with limited speed and change color if mouse is inside it.",
        "hints": [
          "You can use Math.atan2 to get the angle between ball and mouse.",
          "You can use that angle to get velocity for x(Math.cos) and y(Math.sin).",
          "You can add that velocity to the ball position to make the ball move towards the mouse. Remember to limit the velocity.",
          "You can use setInterval to keep drawing and updating canvas eg. 60 times a second - setInterval(aFunction, 1000/60)"
        ]
      },
      "unlockedAt": "2025-01-20T00:00:00.000Z"
    }
  }
} as const;