import s from "./Main.module.css";
function Main({ children }) {
  return (
    <main className={s.main}>
      <div className={s.mainTitle}>
        <h1>Performance</h1>
        <p>Открой себя с новой стороны!</p>
      </div>
      {children}
    </main>
  );
}

export default Main;
