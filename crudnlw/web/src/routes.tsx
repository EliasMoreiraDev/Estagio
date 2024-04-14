import React from 'react';
import { BrowserRouter, Route, Routes} from 'react-router-dom'
import Landing from 'pages/Landing';
import TeacherForm from 'pages/TeacherForm';
import TeacherList from 'pages/TeacherList';
function AppRoutes(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/' Component={Landing}/>
                <Route path='/study' Component={TeacherList}/>
                <Route path='/give-class'  Component={TeacherForm}/>
            </Routes>
        </BrowserRouter>
    )
}
export default AppRoutes