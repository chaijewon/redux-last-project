import {combineReducers} from "redux";

// combineReducers : reduce여러개를 모아서 한번에 저장
// action등록 => action함수 => reducer => index에 등록 => store에 전송
import mainReducer from "./mainReducer";
import foodReducer from "./foodReducer";
import youtubeReducer from "./youtubeReducer";
import infoReducer from "./infoReducer";
// mains.main_data mains.main_detail => 변수 선택
export default combineReducers({
    mains: mainReducer,
    foods: foodReducer,
    youtubes: youtubeReducer,
    infos: infoReducer
})