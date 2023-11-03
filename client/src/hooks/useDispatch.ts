import { useDispatch } from 'react-redux';
import { AppDispatch } from '../store/slices';

export const useAppDispatch: () => AppDispatch = useDispatch;
