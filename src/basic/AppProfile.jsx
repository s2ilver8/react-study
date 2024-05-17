import './App.css';
import Profile from './components/Profile';

function AppProfile() {
  const handleClick = (e) => {console.log(e);alert('클릭');}
  return (
    <>
      <button onClick={handleClick}>버튼</button>
      <Profile
        img="https://images.unsplash.com/photo-1518020382113-a7e8fc38eac9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fCVFRCU5NCU4NCVFQiVBMSU5QyVFRCU5NSU4NCUyMCVFQyU4MiVBQyVFQyVBNyU4NHxlbnwwfHwwfHx8MA%3D%3D"
        name="DOGI"
        title="마스코트"
        isNew
      />
      <Profile
        img="https://images.unsplash.com/photo-1580489944761-15a19d654956?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fCVFQyU5NiVCQyVFQSVCNSVCNHxlbnwwfHwwfHx8MA%3D%3D"
        name="Jake Nackos"
        title="프론트엔드 개발자"
        isNew
      />
      <Profile
        img="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzV8fCVFQyU5NiVCQyVFQSVCNSVCNHxlbnwwfHwwfHx8MA%3D%3D"
        name="Joseph Gonzales"
        title="웹디자이너"
      />
      <Profile
        img="https://images.unsplash.com/photo-1649433658557-54cf58577c68?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDExfHx8ZW58MHx8fHx8"
        name="Abhishek Rai"
        title="백엔드 개발자"
      />      
    </>    
  );
}

export default AppProfile;
