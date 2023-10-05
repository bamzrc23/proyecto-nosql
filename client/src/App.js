import { Routes, Route } from 'react-router-dom';

import './App.css';
import { AuthProvider } from './contexts/AuthContext'
import Contacts from './components/Contacts/Contacts';
import About from './components/About/About';
import Cars from './components/Cars/Cars';
import Create from './components/Cars/Create/Create';
import Edit from './components/Cars/Edit/Edit';
import Details from './components/Cars/Details/Details';
import RentACar from './components/Cars/RentACar/RentACar';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Login from './components/Login/Login';
import Logout from './components/Logout/Logout';
import Register from './components/Register/Register';
import { NotificationProvider } from './contexts/NotificationContext';
import Notification from './components/Common/Notification/Notification';
import AdminGuardedRoute from './components/Common/GuardedRoutes/AdminGuardedRoute';
import PrivateRoute from './components/Common/GuardedRoutes/PrivateRoute';
import NotPrivedRoute from './components/Common/GuardedRoutes/NotPrivedRoute';
import SearchAvailable from './components/Cars/SearchAvailable/SearchAvailable';
import MySavedTrips from './components/Cars/MySavedTrips/MySavedTrips';
import AllSavedTrips from './components/Cars/AllSavedTrips/AllSavedTrips';
import CarTrip from './components/Cars/CarTrip/CarTrip';

function App() {
  return (
    <AuthProvider>
      <NotificationProvider>
        <div className="App">
          <Header />
          <Notification />
          <main>
            <Routes>
              <Route path="/" element={<SearchAvailable />} />
              <Route path="/about" element={<About />} />
              <Route path="/contacts" element={<Contacts />} />
              <Route path="/mobile/car/all" element={<Cars />} />
              <Route path="/mobile/car/:carId" element={<Details />} />
              <Route element={<NotPrivedRoute />}>
                <Route path="/auth/login" element={<Login />} />
                <Route path="/auth/register" element={<Register />} />
              </Route>
              <Route element={<PrivateRoute />}>
                <Route path="/mobile/car/mySavedTrips" element={<MySavedTrips />} />
                <Route path="/mobile/car/:carId/addTenant" element={<RentACar />} />
                <Route path="/auth/logout" element={<Logout />} />
              </Route>
              <Route element={<AdminGuardedRoute />}>
                <Route path="/mobile/car/allSavedTrips" element={<AllSavedTrips />} />
                <Route path="/mobile/car/create" element={<Create />} />
                <Route path="/mobile/car/:carId/edit" element={<Edit />} />
                <Route path="/mobile/car/:carId/:tripId" element={<CarTrip />} />
              </Route>
            </Routes>
          </main>
          <Footer />
        </div>
      </NotificationProvider>
    </AuthProvider>
  );
}

export default App;
