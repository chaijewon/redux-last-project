import {useState, useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {fetchFoodList} from "../../actions/foodActions";
import {Link} from "react-router-dom";
/*
   DB
   템플릿
   메인페이지 => 메뉴
 */
function FoodList(){
    // action함수호출 => reducer => store
    const dispatch = useDispatch();
    const [curpage, setCurpage] = useState(1);
    useEffect(()=>{
        // 리렌더링
        dispatch(fetchFoodList(curpage));
    },[curpage]);

    const foodList=useSelector(state => state.foods.food_list);

    let row=[]

        if (foodList.startPage > 1) {
            row.push(<li className="page-item">
                <a className="page-link" href="#">Next <i
                    className="fa fa-angle-double-left" aria-hidden="true"></i></a>
            </li>)
        }
        for (let i = foodList.startPage; i <= foodList.endPage; i++) {
            row.push(<li className="page-item"><a className="page-link" href="#">{i}</a></li>)
        }
        if (foodList.endPage < foodList.totalpage) {
            row.push(<li className="page-item">
                <a className="page-link" href="#">Next <i
                    className="fa fa-angle-double-right" aria-hidden="true"></i></a>
            </li>)
        }

    return (
        <>
            <div className="breadcumb-area" style={{"backgroundImage": "url(/img/bg-img/breadcumb.jpg)"}}>
                <div className="container h-100">
                    <div className="row h-100 align-items-center">
                        <div className="col-12">
                            <div className="bradcumb-title text-center">
                                <h2>맛집 목록</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <section className="archive-area section_padding_80">
                <div className="container">
                    <div className="row">
                        {
                            foodList.list && foodList.list.map((food) =>
                                <div className="col-12 col-md-6 col-lg-4">
                                    <div className="single-post wow fadeInUp" data-wow-delay="0.1s">

                                        <div className="post-thumb">
                                            <img src={"https://www.menupan.com" + food.poster}/>
                                        </div>

                                        <div className="post-content">
                                            <div className="post-meta d-flex">
                                                <div className="post-author-date-area d-flex">

                                                    <div className="post-author">
                                                        <a href="#">{food.type}</a>
                                                    </div>

                                                    <div className="post-date">
                                                        <a href="#">{food.score}</a>
                                                    </div>
                                                </div>

                                                <div className="post-comment-share-area d-flex">

                                                    <div className="post-favourite">
                                                        <a href="#"><i className="fa fa-heart-o"
                                                                       aria-hidden="true"></i> {food.likecount}</a>
                                                    </div>

                                                    <div className="post-comments">
                                                        <a href="#"><i className="fa fa-comment-o"
                                                                       aria-hidden="true"></i> {food.hit}</a>
                                                    </div>

                                                    <div className="post-share">
                                                        <a href="#"><i className="fa fa-share-alt"
                                                                       aria-hidden="true"></i></a>
                                                    </div>
                                                </div>
                                            </div>
                                            <a href="#">
                                                <h4 className="post-headline">{food.name}</h4>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            )
                        }
                        {/* 페이지 나누기 */}
                        <div className="col-12">
                            <div className="pagination-area d-sm-flex mt-15">
                                <nav aria-label="#">
                                    <ul className="pagination">
                                        {row}
                                    </ul>
                                </nav>
                                <div className="page-status">
                                    <p>Page {foodList.curpage} of {foodList.totalpage} results</p>
                                </div>
                            </div>
                        </div>


                    </div>
                </div>
            </section>
        </>
    )
}

export default FoodList;