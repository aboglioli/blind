export enum Button {
  Left = 'LEFT',
  Up = 'UP',
  Right = 'RIGHT',
  Down = 'DOWN',
  Action = 'ACTION',
}

export const newButton = (id: string): Button => {
  switch (id) {
    case 'left':
      return Button.Left;
    case 'up':
      return Button.Up;
    case 'right':
      return Button.Right;
    case 'down':
      return Button.Down;
    default:
      return Button.Action;
  }
};
