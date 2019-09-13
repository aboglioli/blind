import { DefaultEventManager } from './event';

export type AlternativeID = string | number;

export interface IAlternative {
  id: AlternativeID;
  text: string;
}

export async function selectAlternative(
  alternatives: IAlternative[],
): Promise<IAlternative> {
  const eventManager = DefaultEventManager.getInstance();

  eventManager.emit('alternatives.show', alternatives);
  const { data }: { data: IAlternative } = await eventManager.subscribeAsync(
    'alternatives.select',
  );
  eventManager.emit('alternatives.clear');

  return data;
}
