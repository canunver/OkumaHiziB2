var Arac = {
  DegiskenOku: (degiskenAdi, varsayilanDeger) => {
    //var deger = document.cookie
    //if (deger === undefined || deger === "") return varsayilanDeger;
    //var degerler = deger.split(";");
    //degerer.forEach(function(){item});....
    var deger = localStorage.getItem(degiskenAdi);
    if (deger === undefined || deger === null || deger === "") return varsayilanDeger;
    else return deger;
  },

  DegiskenYaz: (degiskenAdi, deger) => {
    //document.cookie = degiskenAdi+"="+deger+"; expires=Wed, 1 Jan 2025 12:00:00 UTC; path=/";
    localStorage.setItem(degiskenAdi, deger);
  },
};
export default Arac;
