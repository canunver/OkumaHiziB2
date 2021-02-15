import React, { Component } from "react";

// Kullanım: <SecimKutusu   .... />
// Özellikler:
// id: oluşacak input nesnesinin id'si
// etiket: Etiket metni
// value: Alanın ilk değeri
// onChange: onChange eventi oluştuğunda çağrılacak kontrol, id ve event parametreleri verilecektir.
// etiketGenislik: Etiketin genişliği, verilmez ise 130px
// Örnek Kullanim <SecimKutusu id='...' etiket='...' value={...} liste={...} onChange={...}  />
class SecimKutusu extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <label
          htmlFor={this.props.id}
          style={{
            display: "inline-block",
            width:
              this.props.etiketGenislik !== undefined
                ? this.props.etiketGenislik
                : "130px",
          }}
        >
          {this.props.etiket}:
        </label>
        <select
          id={this.props.id}
          value={this.props.value}
          style={{
            display: "inline-block",
            width:
              this.props.kontrolGenislik !== undefined
                ? this.props.kontrolGenislik
                : "150px",
          }}
          onChange={(e) => {
            this.props.onChange(this.props.id, e);
          }}
        >
          {this.props.liste.map((item) => (
            <option key={item.value} value={item.value}>
              {item.text}
            </option>
          ))}
        </select>
      </div>
    );
  }
}

export default SecimKutusu;
