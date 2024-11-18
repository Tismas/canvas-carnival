import type { TaskData } from "@/data/events";

export const task: TaskData = {
  title: "Bouncing ball",
  description:
    "Draw a ball that starts at the center of the screen and moves in random direction. It should always move with the same speed regardless of chosen direction. It should bounce off the screen edges",
  hints: [
    "You can use Math.cos and Math.sin to get a random velocity for x and y.",
    "You can multiply Math.random() by 2*Math.PI to get a random angle. Math.cos of that angle will give you velocity on x axis, and Math.sin will give you velocity on y axis.",
    "You can add that velocity to the ball position to make the ball move and invert given velocity when ball touches the edge of the screen eg. if ball.position.x < 0 then ball.velocity.x = -ball.velocity.x",
    "You can use setInterval to keep drawing and updating canvas eg. 60 times a second - setInterval(aFunction, 1000/ 60)",
  ],
};
