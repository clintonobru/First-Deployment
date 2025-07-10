import './App2.css'
import ClassComponent from './component/ClassComponent'
import Counter from './component/Counter2'
import Welcome from './component/Welcome'
import Greeting from './component/Greeting'
import Greeting2 from './component/Greeting2'
import ClassGreeting from './component/ClassGreeting'
import ClassTimer from './component/ClassTimer'
import Timer from './component/FunctionalTimer'
import Button from './component/Button'
import Css from './component/Css'
import Parent from './component/Parent'
import Child from './component/Child'
import GrandChild from './component/GrandChild'
import Navbar from './component/Navbar'
import SectionTwo from './component/GloSectionTwo'
import Footer from './component/Footer'
import DataFetching from './component/DataFetching'
import AxiosFetch from './component/AxiosFetch'
import ControlledInput from './component/Controlledinput'
import TodoApp from './component/ToDoList'
import { Routes, Route, Navigate } from "react-router-dom"
import Home from './component/Home'
import About from './component/About'
import NavbarRoute from './component/MyRouteNavbar'
import Dashboard from './component/Dashboard'
import Profile from './component/Profile'
import Settings from './component/Settings'
import UserProfile from './component/UserProfile'
import NotFound from './component/NotFound'
import ProtectedRoute from './component/ProtectedRoute'
import ThemedButton from './context/ThemedButton'
import Login from './component/Login'

function App() {
  // const isAuthenticated = false
  // const handleClick = () => alert("Button Clicked");

  return (
    <>
      {/* <NavbarRoute /> */}
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/" element={<Home />} />

        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          } 
        >
          <Route path="profile/:id" element={<Profile />} />
          <Route path="settings" element={<Settings />} />
        </Route>
        <Route path="/user/:userId" element={<UserProfile />} />
      </Routes>
      {/* <Welcome />    
      <Counter /> 
      <ClassComponent />
      <Greeting name="John" age="30"/>
      <Greeting2 />
      <ClassGreeting name="Clint"/>
      <ClassTimer />
      <Timer />
      <Button label="Submit" color="green" onClick={handleClick} />
      <Button label="Cancel" color="red" onClick={() => alert("Cancelled")} />
      <Css />
      <Parent message="Message from Grand pa" />
      <Child />
      <GrandChild />
      <Navbar />
      <SectionTwo />
      <Footer />
      <DataFetching />
      <AxiosFetch />
      <ControlledInput />
      <TodoApp /> */}
    </>
  );
}

export default App
