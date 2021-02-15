import React, { Component } from "react";
import Ayarlar from "./Ayarlar";
import OkumaAlani from "./OkumaAlani";
import Baslik from "./Baslik";
import Metinler from "./Metinler";
import Arac from "./Arac";

class OkumaHiziUyg extends Component {
  state = {
    UygulamaDili: "tr",
  };

  constructor(props) {
    super(props);
    this.state.UygulamaDili = Arac.DegiskenOku("UygulamaDili", "tr");
  }

  UygDiliDegistir = (uygDili) => {
    this.setState({ UygulamaDili: uygDili });
    Arac.DegiskenYaz("UygulamaDili", uygDili);
  };

  MetinOku = (metinKodu) => {
    try {
      var tut = Metinler[this.state.UygulamaDili][metinKodu];
      if (tut === undefined) return metinKodu;
      else return tut;
    } catch (e) {
      console.log(e);
      return metinKodu;
    }
  };

  DilListesi = () => {
    return [
      { value: "tr", text: this.MetinOku("Türkçe") },
      { value: "en", text: this.MetinOku("İngilizce") },
    ];
  };

  render() {
    return (
      <React.Fragment>
        <Ayarlar uygulama={this} />
        <Baslik uygulama={this} />
        <OkumaAlani uygulama={this} />
      </React.Fragment>
    );
  }
}

export default OkumaHiziUyg;
