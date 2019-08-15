class Cart extends Component {
  constructor(props){
    super(props);
    this.state {
      isiKeranjang: []
    }
  }
  
  tambahProduct(kode, kuantitas){
    const indexExist = this.state.isiKeranjang.indexOf(kode);
    const { isiKeranjang } = this.state;
    if (indexExist > -1) {
      this.setState({
        isiKeranjang.update(cart => cart.setIn(
          isiKerangjang[indexExist].kuantitas + kuantitas)
        )
      });
    } else {
      this.setState({ isiKeranjang.push({kode, kuantitas}) });
    }
  }
  
  hapusProduct(kode){
    const item = this.state.isiKeranjang.indexOf(kode);
    this.setState({ isiKerangjang: this.state.isiKeranjang.splice(item, 1) })
  }
  
  render(){
    const { isiKeranjang } = this.state;
    const tampilkanCaart = () => (
      <ul>
        {isiKeranjang.map((item, index) => (
          <li key={index}>
            <strong>{item.kode}</strong>
            <span>{item.kuantitas}</span>
          </li>
        )}
      </ul>
    )
    return (
      <div id="cart">
        {tampilkanCaart}
      </div>
    )
  }
}
