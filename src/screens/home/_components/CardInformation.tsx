import "./CardInformation.scss";
export const CardInformation = () => {
  return (
    <div className="information-card">
      <h1
        className="text-center"
        style={{ color: "var(--tp-theme-1)", fontWeight: "500" }}
      >
        Bienvenido
      </h1>
      <article>
        <p>
          En<span className="red"> Banco Azteca</span> queremos tener un
          <span className="red"> contacto más cercano</span> con las entidades
          en las que tenemos presencia y qué mejor oportunidad que{" "}
          <span className="red">
            brindando información de valor a su comunidad periodística.
          </span>
        </p>
        <p>
          Por ello nos complace ofrecer el seminario{" "}
          <span className="red">
            "Perspectivas económicas 2025, banca popular y futuro digital"
          </span>
          , en el que destacados especialistas abordarán las complejidades del
          entorno económico; las oportunidades de desarrollo que esto traerá a
          nivel local y nacional; así como el alcance de la Inteligencia
          Artificial en la comunicación y el periodismo.
        </p>
        <p>
          Esperamos que este programa nos permita{" "}
          <span className="red">
            estrechar lazos a través del conocimiento.
          </span>
        </p>
        <p className="text-center">
          {" "}
          <span className="green-strong">Alejandro Valenzuela</span>
        </p>
        <p className="text-center">
          {" "}
          <span className="green">
            Presidente del Consejo de Administración de Banco Azteca y Azteca
            Servicios Financieros
          </span>
        </p>
      </article>
    </div>
  );
};
