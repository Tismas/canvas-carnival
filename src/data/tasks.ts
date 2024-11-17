import { addDays } from "date-fns";

export interface UnlockedTask {
  id: number;
  title: string;
  description: string;
  hints: string[];
  done: boolean;
  // exampleSolution: string;
  isUnlocked: true;
}
export interface LockedTask {
  id: number;
  isUnlocked: false;
  unlockedAt: Date;
}

export type Task = LockedTask | UnlockedTask;

export const tasks: Array<Task> = [
  {
    id: 1,
    title: "Random lines",
    description: "Draw 100 lines between random points",
    hints: [
      "Use lineTo and moveTo to connect 100 random points to each other.",
      "Math.random() returns random value between 0 and 1.",
      "You can multiply this random value to get a different range. Eg. Math.random() * canvas.width will get you random value between 0 and canvas.width",
    ],
    done: true,
    isUnlocked: true,
  },
  {
    id: 2,
    title: "Bouncing ball",
    description:
      "Draw a ball that starts at the center of the screen and moves in random direction. It should always move with the same speed regardless of chosen direction. It should bounce off the screen edges",
    hints: [
      "You can use Math.cos and Math.sin to get a random velocity for x and y.",
      "You can multiply Math.random() by 2*Math.PI to get a random angle. Math.cos of that angle will give you velocity on x axis, and Math.sin will give you velocity on y axis.",
      "You can add that velocity to the ball position to make the ball move and invert given velocity when ball touches the edge of the screen eg. if ball.position.x < 0 then ball.velocity.x = -ball.velocity.x",
      "You can use setInterval to keep drawing and updating canvas eg. 60 times a second - setInterval(aFunction, 1000/ 60)",
    ],
    done: false,
    isUnlocked: true,
  },
  {
    id: 3,
    isUnlocked: false,
    unlockedAt: addDays(new Date(), 1),
  },
  {
    id: 4,
    isUnlocked: false,
    unlockedAt: addDays(new Date(), 2),
  },
];
