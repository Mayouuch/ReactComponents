import './App.css';
import Adress from './components/Adress';
import FullName from './components/FullName';
import Profile from './components/Profile';
import ProfilePhoto from './components/ProfilePhoto';

function App() {
  return (
    <div className="App">
      <Profile   pays="France" />
      <ProfilePhoto image= "https://static.vecteezy.com/ti/vecteur-libre/p1/2733118-femme-profil-visage-abstrait-gratuit-vectoriel.jpg"/>
      <FullName fullname="Samar Khiari" />
      <Adress adress="Tunisie"/>
    </div>
  );
}

export default App;
