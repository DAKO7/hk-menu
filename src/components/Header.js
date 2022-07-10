export default function Header() {
  return (
    <header className="d-flex justify-between align-center">
      <h3 className="title cu-p">Hong-Kong</h3>
      <ul className="d-flex align-center">
        <li className="cart d-flex align-center p-5 mr-30 cu-p">
          <snap className="mr-40">20,50 €</snap>
          <img width={24} height={24} src="/img/shopping-bag.svg" alt="shopping bag" />
        </li>
        <li className="user cu-p">
          <img width={24} height={24} src="/img/user.svg" alt="user" />
        </li>
      </ul>
    </header>
  );
}
