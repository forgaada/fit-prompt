import React, {Suspense} from 'react';
import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import Heading from "./ui/structure/Heading";
import {Container, Row} from "reactstrap";
import PageNotFound from "./ui/pages/PageNotFound";
import ChatScreen from "./ui/pages/ChatScreen";
import FitnessSurvey from "./ui/components/survey/fitnessSurvey";

function App() {
    return (
        <BrowserRouter>
            <Heading/>
            <Container fluid className='d-flex flex-grow-1 flex-column'>
                <Row className=''>
                    <Suspense>
                        <Routes>
                            <Route path='/' element={<Navigate to="/survey" />} />
                            <Route exact path='/chat' element={<ChatScreen />} />
                            <Route exact path='/survey' element={<FitnessSurvey />} />
                            <Route path='*' element={<PageNotFound />} />
                        </Routes>
                    </Suspense>
                </Row>
            </Container>
        </BrowserRouter>
    );
}

export default App;
