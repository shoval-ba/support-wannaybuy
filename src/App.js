import logo from './wannabuy.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} alt="logo" />
        <p>
          Support Wannabuy
        </p>
        <p>email for support : shovalshoval31@gmail.com</p>
        <p>כל שאלה תשלחו הודעה לאימייל הזה ונחזור אליכם בהקדם האפשרי</p>
        </header>
        <h3>שאלות תשובות:</h3>
        <p>למה לא מופיעים דילים במסך הבית?</p>
        <p>לא מופיעים דילים מפני שאתה כנראה נמצא באזור בלי חנויות או שאף אחד באזורך לא פרסם. אתה  מוזמן להיות הראשון שמפרסם</p>
        <p>למה אני לא מצליח לפרסם דיל?</p>
        <p>כדי לפרסם דיל יש קודם להירם לאפליקציה, ובנוסף למלא את כל הפרטים הנחוצים</p>
        <p>למה אני לא רואה שום חנות?</p>
        <p>אתה לא רואה חנויות בגלל שליד מקומך אין חנויות אבל אתה יכול לבחור להקליד שם חנות ידנית שאתה רוצה לפרסם</p>
    </div>
  );
}

export default App;
