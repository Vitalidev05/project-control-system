import { nanoid } from 'nanoid';

import { IBoardList } from '../constants';

interface InitialState {
  boardList: IBoardList[];
  currentBoardId: string | null;
}

const getInitialState = (name = 'Board'): InitialState => {
  const date = new Date();
  return {
    currentBoardId: null,
    boardList: [
      {
        boardId: nanoid(),
        boardName: name,
        draggedItem: undefined,
        boardColor: '',
        boardColumns: [
          {
            priority: 'none',
            columnId: nanoid(),
            columnName: 'To Do',
            columnCards: [
              {
                priority: 'none',
                cardId: nanoid(),
                cardName: 'learn typescript',
                cardText: '',
                cardDate: date
              }
            ]
          },
          {
            priority: 'low',
            columnId: nanoid(),
            columnName: 'Testing',
            columnCards: [
              {
                priority: 'none',
                cardId: nanoid(),
                cardName: 'write tests',
                cardText: '',
                cardDate: date
              },
              {
                priority: 'none',
                cardId: nanoid(),
                cardName: 'Never gonna give you up',
                cardText: '',
                cardDate: date
              }
            ]
          },
          {
            priority: 'none',
            columnId: nanoid(),
            columnName: 'Complited',
            columnCards: [
              {
                priority: 'none',
                cardId: nanoid(),
                cardName: 'Never gonna get you down',
                cardText: '',
                cardDate: date
              },
              {
                priority: 'none',
                cardId: nanoid(),
                cardName: 'Never gonna run around',
                cardText: '',
                cardDate: date
              },
              {
                priority: 'none',
                cardId: nanoid(),
                cardName: 'And hurt you',
                cardText: '',
                cardDate: date
              }
            ]
          }
        ]
      },
      {
        boardId: nanoid(),
        boardName: `${name}_1`,
        boardColor: '',
        draggedItem: undefined,
        boardColumns: [
          {
            priority: 'low',
            columnId: nanoid(),
            columnName: 'To Do',
            columnCards: [
              {
                priority: 'none',
                cardId: nanoid(),
                cardName: 'learn typescript',
                cardText: '',
                cardDate: date
              }
            ]
          },
          {
            columnId: nanoid(),
            columnName: 'Testing',
            priority: 'medium',
            columnCards: [
              {
                priority: 'none',
                cardId: nanoid(),
                cardName: 'write tests',
                cardText: 'Card description',
                cardDate: date
              },
              {
                priority: 'none',
                cardId: nanoid(),
                cardName: 'Never gonna give you up',
                cardText: '',
                cardDate: date
              }
            ]
          },
          {
            columnId: nanoid(),
            columnName: 'Complited',
            priority: 'high',
            columnCards: [
              {
                priority: 'none',
                cardId: nanoid(),
                cardName: 'Never gonna get you down',
                cardText: '',
                cardDate: date
              }
            ]
          }
        ]
      }
    ]
  };
};

const getNewBoard: (
  name: string,
  color: string,
  boardId: string
) => IBoardList = (name, color, boardId) => ({
  boardId,
  boardName: name,
  boardColor: color,
  draggedItem: undefined,
  boardColumns: [
    {
      priority: 'none',
      columnId: nanoid(),
      columnName: 'To Do',
      columnCards: [
        {
          priority: 'none',
          cardId: nanoid(),
          cardName: 'learn typescript',
          cardText: '',
          cardDate: new Date()
        }
      ]
    }
  ]
});

export { getInitialState, getNewBoard };
