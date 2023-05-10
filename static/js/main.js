function decryptMail( encoded ){
    let address = atob( encoded );
    window.location.href = "mailto:" + address;
}