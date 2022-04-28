function Card(props) {
  console.log(props);
  return (
    <li className="card">
      <img src="/logo192.png" />
      <div>
        <p>Name:{props.name}</p>
        <p>Age:{props.age}</p>
      </div>
    </li>
  );
}

export default Card;
