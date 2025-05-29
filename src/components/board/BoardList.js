import {Fragment,useState,useEffect} from "react";
import {boardList} from "../../actions/boardActions";
import {useSelector,useDispatch} from "react-redux";
import {Link} from "react-router-dom";


function BoardList() {
    // action 연결 => reducer => 데이터를 모아서 store에 저장
    const dispatch = useDispatch();
    const [curpage, setCurpage] = useState(1);
    useEffect(() => {
        dispatch(boardList(curpage)) // action => reducer => store
    },[curpage])
    // deps => [] 한번만 수행
    // deps => [useState변수] => 변수가 변경시마다 재호출
    // => re-렌더링
    // Vue / React / Next / Nuxt
    // 데이터 관리 (상태관리) => 데이터가 변경이 되는 HTML에 적용
    //           ---------- 사용변수 : state
    // store에서 부터 출력에 필요한 데이터를 읽어 온다
    const board_list=useSelector(state => state.boards.board_list.list )
    const totalpage=useSelector(state => state.boards.board_list.totalpage)
    const today=useSelector(state => state.boards.board_list.today)

    return (
        <Fragment>
            <div className="breadcumb-area" style={{"backgroundImage": "url(/img/bg-img/breadcumb.jpg)"}}>
                <div className="container h-100">
                    <div className="row h-100 align-items-center">
                        <div className="col-12">
                            <div className="bradcumb-title text-center">
                                <h2>자유게시판</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <section className="archive-area section_padding_80">
                <div className="container">
                    <div className="row">
                        <div className={"col-10"}>
                            <table className={"table"}>
                                <tbody>
                                  <tr>
                                      <Link to={"/board/insert"} className={"btn btn-sm btn-primary"}>
                                          새글
                                      </Link>
                                  </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </section>
        </Fragment>
    )
}
export default BoardList;