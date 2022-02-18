import { IColumns } from '../../constants';
import { useSelector } from 'react-redux';
import { selectBoardColumns } from '../../store/reducers/boardList/selectors';
import { useEffect, useMemo } from 'react';
import { useParams } from 'react-router-dom';
import { useActions } from '../../utils/useActions';

export const useBoard = () => {
  const { setCurrentBoardId } = useActions();
  const params = useParams();
  const boardID = useMemo(() => {
    return params?.id || 'id';
  }, [params]);

  useEffect(() => {
    setCurrentBoardId(boardID);
    return () => {
      setCurrentBoardId(null);
    };
  }, [boardID, setCurrentBoardId]);

  const columns: IColumns[] = useSelector(selectBoardColumns);

  return { columns, boardID };
};
