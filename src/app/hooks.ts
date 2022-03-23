import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import { RootState, AppDispatch} from './store'

export const useAppDispatch = () => useDispatch<AppDispatch>();
//useSelector is a function but we're aliasing it + adding types
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;