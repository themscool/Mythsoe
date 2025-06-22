// file include
["header", "footer"].forEach(id => {
    fetch(id + ".html")
      .then(res => res.text())
      .then(data => document.getElementById(id).innerHTML = data);
  });