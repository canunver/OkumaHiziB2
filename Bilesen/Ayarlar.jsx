import React, { Component } from "react";
import "./Ayarlar.css";
import MetinGirisi from "../Kontroller/MetinGirisi";
import IsaretKutusu from "../Kontroller/IsaretKutusu";
import SecimKutusu from "../Kontroller/SecimKutusu";

class Ayarlar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ad: this.props.uygulama.MetinOku("VarsayilanKulAd"),
      heceRengiOlsun: true,
    };
  }

  onChange = (id, e) => {
    if (id === "mgAd") this.setState({ ad: e.target.value });
    else if (id === "skUygDil")
      this.props.uygulama.UygDiliDegistir(e.target.value);
    else if (id === "ikHeceRengi")
      this.setState({ heceRengiOlsun: e.target.checked });
  };

  render() {
    return (
      <div>
        <SecimKutusu
          id="skUygDil"
          etiket={this.props.uygulama.MetinOku("UygDil")}
          value={this.props.uygulama.state.UygulamaDili}
          liste={this.props.uygulama.DilListesi()}
          onChange={this.onChange}
        />
        <MetinGirisi
          id="mgAd"
          etiket={this.props.uygulama.MetinOku("KullAd")}
          value={this.state.ad}
          onChange={this.onChange}
        />
        <IsaretKutusu
          id="ikHeceRengi"
          etiket={this.props.uygulama.MetinOku("Hece Rengi")}
          onChange={this.onChange}
          checked={this.state.heceRengiOlsun}
        />
        <button
          onClick={(e) => {
            this.setState({ aktif: !this.state.aktif });
          }}
        >
          {this.props.uygulama.MetinOku("Kaydet")}
        </button>
      </div>
    );
  }
}

export default Ayarlar;
