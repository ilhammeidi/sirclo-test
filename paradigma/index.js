class Mesin extends Component {
  constructor(props){
    super(props);
    this.state {
      kecepatan: 0,
      maxKecepatan: props.maxKecepatan;
      tanki: 0,
    }
  }
  
  jalan(){}
  stop(){}
  isiFullTanki(){}
  
  render(){
    return (
      <div id="mesin">
        <h3>{this.state.kecepatan}</h3>
        <h3>{this.state.tanki}</h3>
        <button onClick={this.jalan}>Gas</button>
        <button onClick={this.stop}>Rem</button>
        <button onClick={this.isiFullTanki}>Isi Full Tank</button>
      </div>
    )
  }
}

class Kursi extends Component {
  constructor(props){
    super(props);
    this.state {
      kapasitas: 0,
      maxKapasitas: props.maxKursi;
    }
  }
  tambahMuatan() {}
  kurangIMuatan() {}
  render(){
    return (
      <div id="kursi">
        <h3>{this.state.kapasitas}</h3>
        <button onClick={this.tambahMuatan()}>+</button>
        <button onClick={this.kurangiMuatan()}>-</button>
      </div>
    )
  }
}

const PerahuMotor = () => (
  <div id="perahu_Layar">
    <Mesin maxKecepatan="120" />
    <Kursi maxKursi="2" />
  </div>
);

const PerahuLayar = () => (
  <div id="perahu_Layar">
    <Mesin maxKecepatan="80" />
    <Kursi maxKursi="10" />
  </div>
);

const KapalPesiar = () => (
  <div id="KapalPesiar">
    <Mesin maxKecepatan="150" />
    <Kursi maxKursi="1000" />
  </div>
);


