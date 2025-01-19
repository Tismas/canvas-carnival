import type { TaskData } from "@/data/events";

export const task: TaskData = {
  title: "Bouncing ball",
  description:
    "Draw a ball that starts at the center of the screen and moves in random direction. It should always move with the same speed regardless of the direction. It should bounce off the screen edges",
  hints: [
    "The velocity on y and x axis should always sum up to the same value.",
    "You can multiply Math.random() by 2*Math.PI to get a random angle. Math.cos of that angle will give you velocity on x axis, and Math.sin will give you velocity on y axis. Sum of these velocities will be equal to 1 (so the speed will be always 1)",
    "You can add that velocity to the ball position to make the ball move and invert velocity on given axis when the ball touches the edge of the screen eg. if ball.position.x < 0 then ball.velocity.x = -ball.velocity.x",
    "You can use setInterval to keep drawing and updating canvas eg. 60 times a second - setInterval(aFunction, 1000/60)",
  ],
};
