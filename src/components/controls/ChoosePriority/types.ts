import { Priority } from '../../../constants';

export const variants: Array<Priority> = ['none', 'low', 'medium', 'high'];

export type Props = {
  activeItem: Priority;
  setActiveItem: (
    value: ((prevState: Priority) => Priority) | Priority
  ) => void;
};
