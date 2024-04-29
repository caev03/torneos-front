import Home from './pages/HomePage';
import Login from './pages/LoginPage';
import Register from './pages/RegisterPage';
import Unauthorized from "./pages/UnauthorizedPage";
import Layout from './components/Layout';
import {Routes, Route} from "react-router-dom";
import RequireAuth from './components/RequireAuth';
import HomeAdmin from './pages/HomeAdminPage';
import CreateTournamentPage from './pages/CreateTournamentPage';
import TournamentsPage from './pages/TournamentsPage';
import TournamentDetail from './components/tournaments/TournamentDetail';
import SubscribeTournament from './components/tournaments/SubscribeTournament';
import MyTournamentsPage from './pages/MyTournamentsPage';




function App() {

    return (
        <Routes>
            <Route path="/*" element={<Layout />} />

                <Route path="/" element={<Home />} />
                <Route path="login" element={<Login />} />
                <Route path="register" element={<Register />} />
                <Route path="unauthorized" element={<Unauthorized />} />
                <Route path="tournaments" element={<TournamentsPage />} />
                <Route path="/tournaments/:tournamentId" element={<TournamentDetail/>}/>


                <Route  element={<RequireAuth allowedRoles={"user"}/>} >
                    <Route path="/tournaments/subscribe/:tournamentId" element={<SubscribeTournament/>}/>
                    <Route path="/mytournaments" element={<MyTournamentsPage/>}/>
                </Route>

                <Route element={<RequireAuth allowedRoles={"admin"}/>}>
                    <Route path="/admin" element={<HomeAdmin />} />
                    <Route path='/admin/createtournament' element={<CreateTournamentPage/>}/> 
                </Route>
            <Route/>
        </Routes>
    )
}

export default App;