import Name from "./Name";
export default function Aspect(props) {
  return (
    <div className="aspect">
      <Name name="Boma" age={102} />
      <Name name="Smith" age={100} />
      <Name name="George" age={98} />
      <Name name="Precious" age={98} p={{ name: "mjj" }} />
    </div>
  );
}
