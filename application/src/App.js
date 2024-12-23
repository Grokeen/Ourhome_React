
import "./App.css";
import { Route , Routes} from "react-router-dom";


// -------------------------------------------------------------------------------
// desc    :    2024-01-03 18:44 상대경로 선언, 실제로 사용하려면 아래 라우드 설정 해줘야 함
// -------------------------------------------------------------------------------
// 보험 페이지
import InsMain from "./InsMain/InsMain";
import InsHeader from "./InsMain/header";
import InsFooter from "./InsMain/footer";
// import InsApplicate from "./InsApplicate/";
// import InsCustomerService from "./InsCustomerService/";
// import InsDemand from "./InsDemand/";
// import InsProductInfo from "./InsProductInfo/";


// 이커머스 페이지
import ItemList from "./shop/itemList";
import BarsketPage from "./shop/barsketPage";





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
                  {/* <Route path="InsApplicate" element={<InsApplicate />} /> */}

                  {/* 보험 신청 */}
                  {/* <Route path="InsCustomerService" element={<InsCustomerService />} /> */}

                  {/* 보험 청구 */}
                  {/* <Route path="InsDemand" element={<InsDemand />} /> */}

                  {/* 보험 고객센터 */}
                  {/* <Route path="InsProductInfo" element={<InsProductInfo />} /> */}

                  {/* 이커머스 */}
                  <Route path="barsketPage" element={<BarsketPage />} />
                  <Route path="ItemList" element={<ItemList />} />
                </Routes>
            </main>

            <InsFooter/>
        </div>
    );
}
export default App;