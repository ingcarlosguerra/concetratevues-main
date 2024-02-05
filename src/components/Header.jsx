export default function Header({ resetearPartida, numeroDeIntentos }) {
  return (
    <header>
      <div className="titulo">Vuse</div>
      <div>
        <button className="boton-reiniciar" onClick={resetearPartida}>
          Reiniciar
        </button>
      </div>
      <div className="titulo">
        Intentos: {numeroDeIntentos}
      </div>
    </header>
  );
};