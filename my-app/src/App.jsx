import './App2.css'
import { Routes, Route, Navigate } from "react-router-dom"
import Home from './component/Home'
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
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/login" element={<Login />} />
        
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
