export enum Button {
  Left = 'LEFT',
  Up = 'UP',
  Right = 'RIGHT',
  Down = 'DOWN',
  Action = 'ACTION',
  Unknown = 'UNKNOWN',
}

export const newButton = (id: string): Button => {
  id = id.toUpperCase();
  switch (id) {
    case 'LEFT':
      return Button.Left;
    case 'UP':
      return Button.Up;
    case 'RIGHT':
      return Button.Right;
    case 'DOWN':
      return Button.Down;
    case 'ACTION':
      return Button.Action;
    default:
      return Button.Unknown;
  }
};
