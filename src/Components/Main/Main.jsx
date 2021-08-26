import s from "./Main.module.css";
function Main({ children }) {
  return (
    <main className={s.main}>
      <div className={s.mainTitle}>
        <p>ОТКРОЙ СЕБЯ С НОВОЙ СТОРОНЫ!</p>
      </div>
      {children}
    </main>
  );
}

export default Main;
