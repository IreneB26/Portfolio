import "./card_skill.css";

export default function CardSkill(props) {
  return (
    <>
      <section className={`content_skill ${props.clas}`}>
        {props.children}
      </section>
    </>
  );
}
