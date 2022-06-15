import "./formacion.css";

export default function Formacion() {
  return (
    <>
      <div className="zigzag-timeline__item">
        <h3 className="right_title">
          Grado superior desarrollo multiplataforma
        </h3>
        <div className="zigzag-timeline__milestone"></div>

        <p className="info_formacion">
          Realicé el grado superior de desarrollo multiplataforma en 2018, en el
          que aprendí a programar aplicaciones de escritorio con Java, y
          aplicaciones para android también basadas en Java. También realicé
          alguna aplicación web sencilla. En las prácticas realicé el
          mantenimiento de webs en Wordpress
        </p>
      </div>

      <div className="zigzag-timeline__item">
        <h3 className="left_title">
          Grado superior Desarrollo aplicaciones web
        </h3>
        <div className="zigzag-timeline__milestone"></div>

        <p className="info_formacion">
          Realicé el grado superior de desarrollo de aplicaciones web en 2020,
          en este aprendia a utilizar frameworks como Angular o Django, y a
          utilizar herramientas como Git, GitHub. Realicé un proyecto final
          basado en PHP y Mysql. En las prácticas realicé páginas web en
          Wordpress utilizando PHP, asi como funciones de Seo.
        </p>
      </div>

      <div className="zigzag-timeline__item last">
        <h3 className="right_title">
          Postgrado especializado en UX/UI, marketing digital y desarrollo web
          front-end
        </h3>

        <div className="zigzag-timeline__milestone"></div>
        <p className="info_formacion">
          Realicé el postgrado en 2022, en este conocí un poco más el mundo del
          diseño y aprendi a utiliza Figma para crear mockups. En la parte de
          front-end aprendí a crear webs más accesibles, así como a ul¡tilizar
          el framework de JavaScript React. Por otra parte en Marketing Digital
          aprendia a usar el Seo en mis webs asi como diferentes herramientas
          como Google analitycs.
        </p>
      </div>
    </>
  );
}
