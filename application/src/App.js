
import "./App.css";
// import "./App_JoinApplicationForm.css";
import { Route , Routes} from "react-router-dom";


// -------------------------------------------------------------------------------
// desc    :    2024-01-03 18:44 상대경로 선언, 실제로 사용하려면 아래 라우드 설정 해줘야 함
// -------------------------------------------------------------------------------
// 보험 페이지
import InsMain from "./InsMain/InsMain";
import InsHeader from "./InsMain/header";
import InsFooter from "./InsMain/footer";

// import InsCustomerService from "./InsCustomerService/";


// 보험 상품 정보
import InsSelectProduct from "./InsProductInfo/InsSelectProduct";
//250108 조환열 보험상세
import InsProductPage from "./InsProductInfo/InsProductPage.js";




// 보험 가임 신청
import InsJoinForm from "./InsJoinForm/InsJoinForm.js";

import InsHealthJoinForm from "./InsJoinForm/InsHealthJoinForm.js";
import InsHealthJoinFinal from "./InsJoinForm/InsHealthJoinFinal.js";

import InsFireJoinForm from "./InsJoinForm/InsFireJoinForm.js";
import InsFireJoinFinal from "./InsJoinForm/InsFireJoinFinal.js";

import InsAutoJoinForm from "./InsJoinForm/InsAutoJoinForm.js";
import InsAutoJoinFinal from "./InsJoinForm/InsAutoJoinFinal.js";


// 이커머스 페이지
import ItemList from "./shop/itemList";
import BarsketPage from "./shop/barsketPage";

// 보험비 청구 신청
import InsRequest from "./InsRequest/InsRequest";

import InsHealthRequest from "./InsRequest/InsHealthRequest.js";
import InsHealthRequestForm from "./InsRequest/InsHealthRequestForm.js";

import InsFireRequest from "./InsRequest/InsFireRequest.js";
import InsFireRequestForm from "./InsRequest/InsFireRequestForm.js";

import InsAutoRequest from "./InsRequest/InsAutoRequest.js";
import InsAutoRequestForm from "./InsRequest/InsAutoRequestForm.js";

// 보험 마이페이지
import InsMyPageMain from "./InsMyPage/InsMyPageMain";
//회원가입
import InsSignUp from "./InsMyPage/InsSignUp.js"



// -------------------------------------------------------------------------------
// desc    :    2024-12-21 김용록 헤더/푸터 설정
// -------------------------------------------------------------------------------
function App() {

    return (
        <div>
            <InsHeader/>
            <main className="content">               
                  {/* 헤더 설정 import 해서, 태그로 만들 수 있다. Switch는 각각 다르게 설정 가능하다. */}
                <Routes>
                  {/* 실행 시, 첫 화면 및 기본 설정 */}
                  <Route path="/" element={<InsMain />} />
                  <Route path="Ins_Header" element={<InsHeader />} />
                  <Route path="Ins_Footer" element={<InsFooter />} />


                  {/* 보험 상품 정보 */}
                  <Route path="/product" element={<InsSelectProduct />} /> 


                  {/* 보험 가입/신청 */}
                  <Route path="/join" element={<InsJoinForm />} /> 

                  <Route path="/join/health" element={<InsHealthJoinForm />} /> 
                  <Route path="/join/health/:id" element={<InsHealthJoinFinal />} /> 
                  
                  <Route path="/join/fire" element={<InsFireJoinForm />} /> 
                  <Route path="/join/fire/:id" element={<InsFireJoinFinal />} /> 

                  <Route path="/join/auto" element={<InsAutoJoinForm />} /> 
                  <Route path="/join/Auto/:id" element={<InsAutoJoinFinal />} /> 

                  {/* 보험 청구 신청 */}
                  <Route path="/request" element={<InsRequest />} /> 
                  <Route path="/request/health" element={<InsHealthRequest />} />
                  <Route path="/request/health/:id" element={<InsHealthRequestForm />} /> 

                  <Route path="/request/fire" element={<InsFireRequest />} />
                  <Route path="/request/fire/:id" element={<InsFireRequestForm />} />

                  <Route path="/request/auto" element={<InsAutoRequest />} />
                  <Route path="/request/auto/:id" element={<InsAutoRequestForm />} />


                  {/* 보험 마이페이지 */}
                  <Route path="Ins_MyPageMain" element={<InsMyPageMain />} /> 

                  {/* 보험 고객센터 */}
                  {/* <Route path="InsProductInfo" element={<InsProductInfo />} /> 

                  {/* 이커머스 */}
                  <Route path="barsketPage" element={<BarsketPage />} />
                  <Route path="ItemList" element={<ItemList />} />


                  {/*250108 조환열 보험상세*/}
                  <Route path="/product/:type" element={<InsProductPage />} />

                  {/*250108 조환열 회원가입*/}
                  <Route path="/user/signup" element={<InsSignUp />} />

                </Routes>
            </main>

            <InsFooter/>
        </div>
    );
}
export default App;