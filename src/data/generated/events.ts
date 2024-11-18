export const events = {
  "2025": {
    "1": {
      "task": {
        "title": "Random lines",
        "description": "Draw 100 lines between random points",
        "hints": [
          "Use lineTo and moveTo to connect 100 random points to each other.",
          "Math.random() returns random value between 0 and 1.",
          "You can multiply this random value to get a different range. Eg. Math.random() * canvas.width will get you random value between 0 and canvas.width"
        ]
      },
      "unlockedAt": "2024-11-17T00:00:00.000Z"
    },
    "2": {
      "task": {
        "title": "Bouncing ball",
        "description": "Draw a ball that starts at the center of the screen and moves in random direction. It should always move with the same speed regardless of chosen direction. It should bounce off the screen edges",
        "hints": [
          "You can use Math.cos and Math.sin to get a random velocity for x and y.",
          "You can multiply Math.random() by 2*Math.PI to get a random angle. Math.cos of that angle will give you velocity on x axis, and Math.sin will give you velocity on y axis.",
          "You can add that velocity to the ball position to make the ball move and invert given velocity when ball touches the edge of the screen eg. if ball.position.x < 0 then ball.velocity.x = -ball.velocity.x",
          "You can use setInterval to keep drawing and updating canvas eg. 60 times a second - setInterval(aFunction, 1000/ 60)"
        ]
      },
      "unlockedAt": "2024-11-18T00:00:00.000Z"
    },
    "3": {
      "task": {
        "title": "A follower",
        "description": "Draw a ball that starts at the center of the screen and moves towards the mouse. It should move with limited speed and change color if mouse is inside it.",
        "hints": [
          "You can use Math.atan2 to get the angle between ball and mouse.",
          "You can use that angle to get velocity for x(Math.cos) and y(Math.sin).",
          "You can add that velocity to the ball position to make the ball move towards the mouse. Remember to limit the velocity.",
          "You can use setInterval to keep drawing and updating canvas eg. 60 times a second - setInterval(aFunction, 1000/ 60)"
        ]
      },
      "unlockedAt": "2024-11-19T00:00:00.000Z"
    }
  }
} as const;