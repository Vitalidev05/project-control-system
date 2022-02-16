import { DragItem } from '../context/DragItem';

export const isHidden = (
  isPreview: boolean | undefined,
  draggedItem: DragItem | undefined,
  itemType: string,
  id: string
): boolean =>
  Boolean(
    !isPreview &&
      draggedItem &&
      draggedItem.type === itemType &&
      (draggedItem.type === 'CARD'
        ? draggedItem.cardId === id
        : draggedItem.columnId === id)
  );

// const isHiddenTask = (
//   isPreview: boolean | undefined,
//   draggedItem: DragItem | undefined,
//   taskId: string,
// ) : boolean => {
//   if(draggedItem?.type === 'CARD')
//     return Boolean (
//       !isPreview && draggedItem && draggedItem.cardId === taskId
//     )
//   else
//     return false;
// }

export default isHidden;
