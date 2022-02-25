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
            columnTasks: [
              {
                priority: 'none',
                taskId: nanoid(),
                taskName: 'learn typescript',
                taskText: '',
                taskDate: date
              }
            ]
          },
          {
            priority: 'low',
            columnId: nanoid(),
            columnName: 'Testing',
            columnTasks: [
              {
                priority: 'none',
                taskId: nanoid(),
                taskName: 'write tests',
                taskText: '',
                taskDate: date
              },
              {
                priority: 'none',
                taskId: nanoid(),
                taskName: 'Never gonna give you up',
                taskText: '',
                taskDate: date
              }
            ]
          },
          {
            priority: 'none',
            columnId: nanoid(),
            columnName: 'Complited',
            columnTasks: [
              {
                priority: 'none',
                taskId: nanoid(),
                taskName: 'Never gonna get you down',
                taskText: '',
                taskDate: date
              },
              {
                priority: 'none',
                taskId: nanoid(),
                taskName: 'Never gonna run around',
                taskText: '',
                taskDate: date
              },
              {
                priority: 'none',
                taskId: nanoid(),
                taskName: 'And hurt you',
                taskText: '',
                taskDate: date
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
            columnTasks: [
              {
                priority: 'none',
                taskId: nanoid(),
                taskName: 'learn typescript',
                taskText: '',
                taskDate: date
              }
            ]
          },
          {
            columnId: nanoid(),
            columnName: 'Testing',
            priority: 'medium',
            columnTasks: [
              {
                priority: 'none',
                taskId: nanoid(),
                taskName: 'write tests',
                taskText: 'Task description',
                taskDate: date
              },
              {
                priority: 'none',
                taskId: nanoid(),
                taskName: 'Never gonna give you up',
                taskText: '',
                taskDate: date
              }
            ]
          },
          {
            columnId: nanoid(),
            columnName: 'Complited',
            priority: 'high',
            columnTasks: [
              {
                priority: 'none',
                taskId: nanoid(),
                taskName: 'Never gonna get you down',
                taskText: '',
                taskDate: date
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
      columnTasks: [
        {
          priority: 'none',
          taskId: nanoid(),
          taskName: 'learn typescript',
          taskText: '',
          taskDate: new Date()
        }
      ]
    }
  ]
});

export { getInitialState, getNewBoard };
