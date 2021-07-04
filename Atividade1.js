function extrairInfo() {
  const codigoRoteiros =
    "<html><head><title>Gulliver Traveller - Roteiros</title></head><body><b>->1 - Roteiros para *São Paulo*</b><br>A Terra da Garoa!<br>Fundada em 25 de janeiro de 1554 a cidade tem hoje cerca de 12 milhões de habitantes e é considerada o centro financeiro do Brasil e aqui vão 3 dicas de roteiros obrigatórios para aqueles que passam pela capital paulista<br>#Roteiro A | Região: Avenida Paulista<br>MASP; Parque Trianon; Rua Augusta<br>#Roteiro B | Região: Centro<br>Catedral da Sé; Pátio do Colégio; Rua Augusta<br>#Roteiro C | Região: Vila Madalena<br>Beco do Batman; Feirinha da Benedito Calixto; Livraria da Vila<br> <b>->2 - Roteiros para *Las Vegas*</b><br>Viva Las Vegas!<br>       A cidade mais populosa e mais densamente povoada do estado de Nevada, Las Vegas foi fundada em 1905 e é considerada uma cidade, oficialmente, desde 1911 e conta com mais de meio milhão de habitantes. Venha conhecer a capital dos jogos de azar!<br>#Roteiro A | Região: Las Vegas Boulevard South<br>Fonte do Bellagio; Principais Cassinos; Madame Tussauds<br>#Roteiro B | Região: Downtown<br>; Fremont; Las Vegas Art Museum; Museu nacional do Crime Organizado; <br>#Roteiro C | Região: Las Vegas Boulevard North<br>Outlet Premium North; Stratosphere; Apple Fashion Show<br><b>->3 - Roteiros para *Moscou*</b><br>Privet!<br>A capital Russa fica situada às margens do Rio Moscou e apesar de ser a cidade mais cosmopolita da Rússia, conta com grande resguardo de sua história soviética<br>#Roteiro A | Região: Praça Vermelha<br>Museu Histórico do Estado; Catedral de São Basílico; Mausoléu de Lênin<br>#Roteiro B | Região: Centro<br>Teatro Bolshoi; Monumento a Karl Marx; Rio Moscou<br>#Roteiro C | Região: Obras pela cidade<br>Metrô de Moscou; As Sete Irmãs; Moscow Leningradsky Railway Station  <br></body></html>";
  
  const body = codigoRoteiros.substring(codigoRoteiros.indexOf('<body>') + 6, codigoRoteiros.indexOf('</body>'));
  
  // console.log(body);
  
  let cidades = body.split('*');
  let i = 0;
  while (i <= cidades.length / 2 + 1) {
    cidades.splice(i, 1);
    i++;
  }
  resultCidades = cidades.join(', ');
  
  console.log(resultCidades);
  
  let roteiros = body.split('#Roteiro');
  let roteirosA = [];
  for (let i = 0; i < roteiros.length; i++) {
    if (roteiros[i][1] === 'A' && roteiros[i][3] === '|')
      roteirosA.push(roteiros[i].slice(5));
  }
  let resultRoteirosA = roteirosA.join('<br>');
  
  console.log(resultRoteirosA);

  let temp = [];
  for (let i = 0; i < roteirosA.length; i++) {
    temp.push(roteirosA[i].split('<br>'));
  }
  let locaisRoteirosA = [];
  for (let i = 0; i < temp.length; i++) {
    locaisRoteirosA.push(temp[i][1]);
  }
  qtdeLocais = [];
  for (let i = 0; i < locaisRoteirosA.length; i++) {
    qtdeLocais.push(locaisRoteirosA[i].split(';').length);
  }
  for (let i = 0; i < qtdeLocais.length; i++) {
    qtdeLocais[i] = cidades[i] + ': ' + qtdeLocais[i];
  }
  qtdeLocais = qtdeLocais.join('; ');

  console.log(qtdeLocais);

  let pontosCentro = body.split('Região: Centro<br>')[1].split('<br>')[0];

  console.log(pontosCentro);

  let pontosDowntown = body.split('Região: Downtown<br>')[1].split('<br>')[0].slice(2);

  console.log(pontosDowntown);

  alert(resultCidades);
  alert(resultRoteirosA);
  alert(qtdeLocais);
  alert(pontosCentro);
  alert(pontosDowntown);
}

extrairInfo();