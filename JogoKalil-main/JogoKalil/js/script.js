const listadepalavras = ["SINTO", "SUITE", "AVIDO", "FESTA", "BEBIA", "HONRA", "OUVIR", "PESCO", "FUNGO", "PAGAM", "GINGA", "PINTA", "PODER", "UTERO", "PILHA", "SARAR", "FRUTA", "PIANO", "NOTAR", "MUSGO", "TENSA", "MELAO", "FELIZ", "MIOJO", "PAGOS", "PUROS", "TEXTO", "MAMAE", "FUSCA", "AMENO", "DUTOS", "CHUVA", "MIMOS", "SINOS", "CORAL", "MULTI", "FORTE", "TONTA", "CRETA", "TEMOR", "NEURO", "ENTES", "CABAL", "LIGAR", "ROLAR", "NAVIO", "VOSSA", "LIMBO", "CALVO", "ONCAS", "FEDOR", "BALDE", "AQUEM", "OXALA", "PATOS", "TALCO", "LABIA", "CRIME", "GRADE", "CARTA", "FLORA", "FATAL", "BIFES", "COMUM", "PECAR", "FEROZ", "ARMAR", "COURO", "ECOAR", "PENCA", "BALAO", "ATEUS", "FADAS", "BAHIA", "VOVOS", "FALIR", "TECER", "ARENA", "CAPAO", "JUSTO", "MERAS", "TIARA", "RUIVA", "CELAS", "LIXAO", "MOCAS", "JANGO", "FOGAO", "DUPLA", "TOUCA", "NOSSO", "SOGRO", "TRETA", "BREJO", "GRANOS", "BUENO", "ACIMA", "MARTA", "BOLSO", "PERUA", 
    "BUNDA", "RACAS", "MOLAS", "CORAR", "RUMOR", "CRATO", "SENAO", "RISOS", "ARTES", "RELUZ", "MILHA", "CHATO", "PRAGA", "ENTAO", "CLORO", "MEXER", "BEATO", "COMBO", "LUGAR", "NUVEM", "PLEBE", "LINDO", "BISPO", "IDOS", "FUNIL", "SUPOR", "VITAL", "NANDO", "TRIGO", "PAZ", "CALDO", "BOCAS", "NESSE", "MANTO", "MALES", "MINIS", "RENAL", "CABER", "MENOR", "SEIVA", "PALCO", "PALMO", "BODES", "POETA", "IDEIA", "TEMER", "BOLSA", "FORNO", "MOURO", "SISMO", "EXATA", "DIMAS", "RADAR", "PEGAR", "BLUSA", "HINOS", "BAITA", "SILOS", "ABREU", "MAURO", "LIBRO", "TRICO", "VASTA", "RUGIR", "MOTOR", "TACAS", "ORGIA", "TOTAL", "OUROS", "ARDOR", "LUCAS", "PROLE", "TARJA", "IRENE", "NINHO", "CREDO", "PENTE", "FALAR", "CANOA", "PRATO", "CLAVE", "OPACO", "ANJOS", "BUENA", "VELHO", "VETOS", "GRANA", "VAZIA", "RUMOS", "ALTOS", "MUTUA", "MISSA", "PARDOS", "MUROS", "ALTAS", "SACHE", "URANO", "VIGOR", "TONTO", "BRUXA", 
    "BACON", "BIOMA", "MIUDO", "RETER", "AGORA", "FOSCO", "CARPA", "CACHO", "FARDO", "POVOS", "DELAS", "DENSO", "PERNA", "BASCO", "GURIA", "PLUMA", "FINAL", "DITOS", "JEOVA", "GOLAS", "JAULA", "DUROS", "CORSO", "CANOS", "BARAO", "POMBA", "FICAR", "SERIO", "OTONI", "MOURA", "CAFES", "FETOS", "NICHOS", "FRACA", "CATAR", "DICAS", "MORNO", "CLARO", "POSAR", "ACESA", "DUBLE", "LEVAR", "CORDA", "COVAS", "TRENA", "SOCOS", "INVES", "ACHAR", "BARCA", "PESTE", "BATOM", "DEVER", "PAGAO", "TODOS", "TELES", "PICOS", "CACAO", "PULGA", "HIDRO", "BRUXO", "EXAME", "BABAR", "OPCAO", "TEDIO", "SECAR", "RIVAL", "AGUDA", "TIROS", "FIGOS", "CURAR", "MOEDA", "BATER", "CUBOS", "VERME", "OSTRA", "LEAIS", "TEREM", "MUNDO", "REFIL", "NOMES", "BELOS", "PARDA", "NOSSA", "PINUS", "TARTE", "ENTER", "TANGA", "UNIDA", "SIENA", "CAQUI", "INCAS", "COLAR", "DEVIR", "GIRAR", "RIMAR", "PANDA", "LAICO", "KARMA", "SUECA", "MERCE", 
    "LACOS", "RITOS", "VERDE", "PESAR", "NADAR", "FUZUE", "MANOS", "OBTER", "MULAS", "POVAO", "DEDAO", "MOIDA", "DISSO", "LONDA", "CARMOS", "CAIRO", "AUTOS", "SURDA", "PINS", "SARJA", "LIBIA", "POEMA", "PONTE", "GALAO", "MUSAS", "MANDE", "ANIMO", "NEGAO", "GLOBO", "LEITO", "CAÇAR", "ILESO", "MALAS", "PAGAR", "SURFE", "POLVO", "VASTO", "NARIZ", "DAQUI", "LOMBO", "LISAS", "AMBOS", "VINDA", "PIPAS", "COUVE", "TOADA", "BENTA", "ARABE", "ARAME", "SABAO", "POREM", "VELOZ", "TABUA", "SEITA", "GRATO", "FALSA", "DOCES", "FOGOS", "LENTA", "VEIAS", "ARCAR", "DANOS", "POCOS", "UNIAO", "HIENA", "TIPOS", "AIRES", "SACRO", "PATIO", "TRIPA", "MENOS", "TOSCO", "CARGO", "TANTO", "IGUAL", "EIXOS", "SADIA", "APICE", "EXPOR", "PONTA", "BONES", "FAROL", "ROLOS", "ASTRO", "TAPAR", "FISCO", "METER", "CESTA", "CALMO", "PESTO", "RUDES", "FIADA", "FEIAS", "GESSO", "ORDEM", "BIRRA", "CORVO", "DORES", "DOCAS", "PACAS", 
    "FETAL", "CISNE", "LAPSO", "EXATO", "PENAL", "POMPA", "OSSOS", "JATOS", "PRAZO", "AMBAS", "FINAS", "REGUA", "MICOS", "PARCO", "CAPAZ", "POUCO", "ANAIS", "LAPIS", "VOSSO", "PILAO", "LINDA", "CANIL", "INFRA", "DITAR", "PUDOR", "MESMO", "ENFIM", "ANSIA", "MORAR", "SAPOS", "FONES", "AXILA", "AUREO", "GREVE", "SEIOS", "ACIDO", "CONDO", "ROLIM", "DIVAS", "BANDA", "FATOS", "CORNO", "FELIX", "DENTE", "POROS", "CINTO", "SANTA", "VISOR", "CASCA", "FERIR", "FONTE", "MANIA", "URNAS", "CACAU", "CRUAS", "CALVA", "CENTO", "JARRA", "SUTIL", "MAGOS", "GENIO", "SEXTA", "PAREO", "REAIS", "MANSA", "EXTRA", "VIRAR", "TOTEM", "GRAXA", "CAPUZ", "MORNA", "PUDIM", "ANDAR", "GENRO", "MEDIO", "PROSA", "GASES", "TRONO", "MEDOS", "LENTE", "HOTEL", "JOGOS", "GATOS", "COXAS", "POLOS", "APTOS", "MASSA", "DOSAR", "MACIO", "AGUDO", "FOCAR", "SECAO", "BLOCO", "INTRA", "ATRAS", "TURMA", "OMEGA", "TROPA", "JARRO", "MOTEL", 
    "GALES", "FOCOS", "PENTA", "FUSAO", "VOGAL", "ALEMA", "REINA", "CHEFE", "VERBA", "CAMPO", "AINDA", "NOITE", "MAFIA", "CRUEL", "UMIDO", "ASSAR", "QUISSA", "PIZZA", "OVULO", "CHAOS", "PRESA", "PLACA", "TELAS", "GORDO", "ALIAS", "QUINA", "ESTES", "PISTA", "LEIGA", "LATAO", "GATAS", "MARES", "NUDEZ", "ALIAR", "AREIA", "FUGIR", "SURDO", "IBERO", "UNTAR", "BOLAS", "POLLEN", "OBESO", "COSMO", "PRETO", "PADA", "VAGOS", "LUVAS", "SARRO", "GRIPE", "TIAGO", "RUINA", "GERAL", "LAGES", "SKATE", "TORAX", "LICEU", "LEMES", "EUROS", "BANAL", "CORRE", "MAIOR", "LOMBA", "MOCAO", "TENUE", "POUCA", "SOGRA", "FINOS", "FLUXO", "LIDER", "CISAO", "LOGAR", "DESSA", "LATAS", "BAZAR", "LIMAO", "DUQUE", "BELAS", "SEARA", "COCOS", "SECOS", "COLON", "MONGE", "GELAR", "BABAS", "ACOES", "SACOS", "CAROS", "MEDIA", "LAGOS", "TORTO", "SUAVE", "BAQUE", "ALCAR", "BAMBU", "RICAS", "NESTA", "OTICO", "NOCAO", "TUTOR", "CAICO", 
    "PIRES", "FOLIA", "FUMAR", "PRAIA", "SIRIO", "CORJA", "ANOES", "TOLDO", "DUNAS", "NORTE", "BINGO", "RETRO", "NAVES", "MATOS", "MUITO", "ACASO", "VIRIL", "VAGAR", "COSTA", "ESQUI", "BUCHO", "DOGMA", "BURRA", "OPTAR", "DESTA", "ARDUA", "ACIDA", "REZAR", "MAMAR", "FUCAR", "ALUNA", "DADOS", "SAIDA", "CORSA", "VODKA", "VAZAR", "PEQUI", "CERVO", "NEGAR", "PICAR", "FUROR", "CARAM", "OTIMA", "IDOLO", "JUIZO", "FILHO", "GAMBA", "PERTO", "GOZAR", "FEUDO", "SUECO", "SALAS", "ESTAS", "TIBIA", "FUTIL", "LISOS", "BRASA", "FACAO", "SUMIR", "SOCIO", "BANDO", "ETICO", "GREGO", "PELOS", "SIGNO", "HTTPS", "VOTOS", "VULTO", "LOTUS", "PAMPA", "LERDO", "LOUCA", "TIMES", "GAITA", "GOSMA", "TARSO", "TELHA", "MOBIL", "CAMBE", "VISAO", "MOELA", "HIFEN", "MURRO", "SIGMA", "CELTA", "GOELA", "OPACA", "MODOS", "REGER", "LONGE", "OPERA", "BAMBA", "CESTO", "GEMEO", "ZONAS", "GIBIS", "VIDEO", "CARGA", "LONAS", "VANDA", 
    "JULHO", "ONDAS", "ANUAL", "LONGO", "ROUPA", "TRECO", "BUCAL", "MEMES", "AROMA", "CITAR", "VULGO", "BOBAS", "REVES", "BARES", "LIDAR", "AVEIA", "NOVOS", "BRAVO", "GRECO", "MIRAR", "MODAS", "NASAL", "CEDRO", "CAMAS", "ATLAS", "ANZOL", "COMER", "CALAR", "LINHO", "SADIO", "AVARE", "ROCAR", "MAJOR", "ATILA", "TUBOS", "BOLHA", "ARCOS", "SELVA", "FADOS", "SAGAZ", "NATAS", "PUXAR", "OLHOS", "MEIAS", "VELHA", "ANGRA", "PAPOS", "DUPLO", "FIXAR", "GARRA", "IMPIO", "ALGUM", "SETOR", "JAPAO", "PISOS", "COPEL", "SAUNA", "SALSA", "AONDE", "FURIA", "DENSA", "BESTA", "TRIBO", "LOURA", "SOCAR", "INDIO", "PRECO", "CRISE", "TESES", "SARDA", "CLARA", "LEGAL", "FRASE", "CEDER", "LATAM", "AMARO", "LOCAO", "POCAS", "PRACA", "TURCO", "BOATO", "OLHAR", "VALOR", "VACUO", "CASAR", "GEADA", "SODIO", "DOTAR", "CAVAR", "QUAIS", "OPALA", "ELITE", "TERMO", "BANJO", "BECOS", "ULTRA", "VIVOS", "TRUCO", "TERNO", "POSSE", 
    "BONDE", "ROBOS", "CETRO", "FRIOS", "PNEUS", "VALER", "ZERAR", "PEDIR", "MATAR", "LEITE", "MISTA", "BARDO", "PORRE", "LINCE", "DUCHE", "GESTO", "MORTA", "VAZAO", "TITIA", "UNICA", "DUETO", "GAVEA", "POMAR", "VOCAL", "EPOCA", "BUSTO", "CALOR", "SUTIS", "FAIXA", "PRATA", "PAVOR", "PRADO", "PEZAO", "GENES", "LUPUS", "AFINS", "PSICO", "CACOS", "OTICA", "CULTO", "JOVEM", "NITRO", "IDEAL", "NEGRO", "LUNAR", "BALSA", "NORMA", "ZELAR", "GUSTO", "LUTAR", "DUCHA", "NISSO", "SAMPA", "CICLO", "ROSCA", "DIODO", "FROTA", "MORAL", "FIBRA", "ADEUS", "PEDRA", "CULTA", "TURNO", "POBRE", "JULIA", "POCAO", "FAVAS", "SOLAR", "PODAR", "PEOES", "IDADE", "CLIPE", "PAUSA", "AVELA", "NAIPE", "PIADA", "SUCOS", "TRUFA", "PARAR", "CABOS", "SUBIR", "BULBO", "PILAR", "EBANO", "FAUNA", "MAMAO", "ROTAS", "ADAGA", "DORSO", "ATOMO", "REPOR", "PARVO", "CANJA", "URUBU", "VODCA", "CLICO", "PEDAL", "SORTE", "TECNO", "SINAL", 
    "BOATE", "URSOS", "COISA", "BOTAO", "ROMBO", "MOITA", "FASES", "RAROS", "CENSO", "POLAR", "PERDA", "REMOS", "TRENS", "TENOR", "VIRAL", "ANGUS", "CUPOM", "TOSCA", "CHEIA", "TERRA", "MENTA", "BRAVA", "JUDEU", "HIATO", "RAIVA", "EPICA", "CASOS", "GREGA", "MEIGA", "PEGOS", "GIRIA", "ROSAS", "LARES", "CINCO", "ZEROS", "VEZES", "DESDE", "LARVA", "VETOR", "CLUBE", "BEATA", "MINHA", "CONGO", "TRAIR", "LAUDO", "MAPAS", "FOSSO", "ZEBRA", "TOLAS", "BANIR", "TATIL", "MIMAR", "RICOS", "SETAS", "ESSAS", "HELIO", "CABRA", "MOVEL", "SEDAS", "MOTOS", "IRMAS", "JURAR", "LOBOS", "MANGA", "NOBEL", "PERSA", "PIRAO", "LICOR", "GERIR", "LINHA", "ALGOZ", "ABADE", "POMBO", "ZINCO", "FARAO", "COPOS", "CINTA", "GORRO", "RODAR", "TIGRE", "DOADA", "TAXIS", "IMPAR", "PALHA", "DOCIL", "QUASE", "SUSHI", "MOVER", "GRAÇA", "MOGNO", "PAPEL", "PORCA", "ETICA", "CHEIO", "BOLAO", "FERIA", "CARRO", "FARSA", "REDOR", "DOIDO", 
    "VIGAS", "QUOTA", "RAMPA", "OESTE", "FACAS", "DIABO", "BALAS", "VOZES", "VALAS", "TANGO", "PESOS", "OASIS", "RIMEL", "HARAS", "NELES", "FOICE", "LILAS", "GENTE", "JUNHO", "TIRAR", "PUXAO", "PARIR", "CIRCO", "AMPLA", "LIDIA", "LEBRE", "OSCAR", "MESMA", "NISTO", "HASTE", "SOPAS", "DONOS", "VILAS", "RABOS", "PIRAR", "RADIO", "FARRA", "SENSO", "NUNCA", "CELIA", "CERTO", "VEADO", "ACOLA", "BAIAS", "MIRIM", "VINIL", "SOUZA", "SENHA", "LUXOS", "CISTO", "FARPA", "ESTAR", "FOFOS", "HAVER", "AVIAO", "NATAL", "RIGOR", "BUQUE", "SONAR", "ALBUM", "LIXOS", "ATRIZ", "VERBO", "COIFA", "HOMEM", "GERME", "LABIO", "NESSA", "PARMA", "CLIMA", "MISTO", "BOCAL", "BACIA", "MICRO", "VAGAO", "NULOS", "TOPAR", "ABONO", "BURRO", "INATA", "BRACO", "TEMPO", "GERAR", "CANAL", "GEMEA", "CHOCA", "RITMO", "OTIMO", "LADOS", "RALAR", "DEBIL", "ATUAL", "CAPIM", "MUITA", "ALHOS", "VOTAR", "TENSO", "HIPER", "FORUM", "FATOR", 
    "GALHO", "LIXAR", "RAMOS", "AREAL", "INTRO", "FEBRE", "AVIDA", "LOIRO", "TURCA", "JEJUM", "ALADO", "OUSAR", "AMPLO", "FUGAS", "IMPOR", "MUSEU", "MANSO", "DELTA", "IDOSO", "JUIZA", "AMORE", "NOZES", "FIAPO", "CUJOS", "ABRIR", "TRIPE", "ELENA", "SEXTO", "RETAS", "CIVIL", "FEIRA", "SERVO", "NEVOA", "PATA", "JOGAR", "SANHA", "GIROS", "ESSES", "DOIDA", "SENDA", "BICOS", "REVER", "FOLHA", "PALMA", "SARAU", "GUARA", "FILHA", "CIVEL", "VENUS", "FUGAZ", "OBVIO", "SACRA", "FOCAL", "MOSCA", "TOURO", "PUNIR", "BARBA", "ROCHA", "CASCO", "PANO", "ACUDE", "TERCO", "ROXAS", "GOTAS", "CLICA", "FAVOR", "USUAL", "OSSEA", "RUBRO", "ROSTO", "NEVAR", "DARDO", "BREGA", "PRECE", "REGAR", "FRIAS", "ROLHA", "NEPAL", "TRENO", "CASTA", "GARCA", "TORPE", "FIXOS", "JEGUE", "ROTOR", "FRADE", "PULOS", "MACRO", "HABIL", "ROUCA", "CAULE", "GUIAR", "HORTO", "JULES", "ILESA", "LIDOS", "ROJAO", "SOMAR", "MITOS", "CILIO", 
    "NINAR", "ACHEM", "SANTO", "ASSIM", "NETOS", "CASPA", "NINJA", "CEGOS", "FACIL", "ALTAR", "ALGAS", "CARAS", "FARDA", "SUNGA", "LOBAO", "CUPIM", "HORTA", "VESPA", "LORDE", "DEUSA", "VACAS", "AMENA", "RELVA", "VIDAS", "ABRIL", "SUPER", "CRIAR", "NIVEL", "SOCIA", "GRUPO", "ADEGA", "VORAZ", "VASOS", "USINA", "RATOS", "TERCA", "CUECA", "BRISA", "FEITA", "VETAR", "PODIO", "FOSSA", "COESO", "ANEIS", "LIRIO", "TINTO", "VOLEI", "SERVA", "MUTUO", "TRAPO", "METRO", "NOBRE", "OMBRO", "UMIDA", "OLHAO", "ANTAS", "FRAGA", "LOUCO", "GUETO", "PUNHO", "AMORA", "REDES", "COFRE", "SIRIA", "VARIA", "TRAMA", "LAJES", "AGEIS", "GANSO", "TULIO", "OVNIS", "LATIM", "OBRAS", "GOLPE", "RENTE", "VICIO", "RUSSO", "VAZIO", "ANTAO", "GALOS", "CIVIS", "ISLAO", "NACAO", "BODAS", "BICHO", "SABIA", "AGAPE", "SALMO", "PODRE", "ALVOS", "LOIRA", "GUSTA", "CETIM", "UNHAS", "FOBIA", "SALAO", "PRAXE", "BRUTA", "LENHA", "CLERO", 
    "JEITO", "POTES", "TUMBA", "VIANA", "NINFA", "RUINS", "ITENS", "SARNA", "TOMAR", "MACIA", "SABOR", "CAIDA", "LEQUE", "JUSTA", "TOCHA", "LAZER", "FEIXE", "SELOS", "ETAPA", "UNICO", "DUZIA", "PAVAO", "SIGLA", "DURAR", "PIREI", "FAZER", "GUIAO", "TRUTA", "LINEA", "TINTA", "GRAUS", "PAVIO", "HORDA", "TORTA", "DETER", "ABADA", "CLONE", "POLPA", "TRUPE", "MALTA", "IRADO", "SELAR", "BOINA", "ATUAR", "CORPO", "MAGIA", "MACAS", "PINHO", "PRETA", "FOSCA", "MOTAS", "GRUTA", "BOSSA", "MAGRO", "LENTO", "APTAS", "LOUSA", "FALSO", "TOSAR", "ALUNO", "SOUTO", "PADRE", "PAZES", "METAL", "ASSIS", "MEIOS", "LENDA", "CALOS", "BONUS", "CREPE", "ANTES", "MILHO", "LULAS", "SIMIO", "DRAMA", "PURAS", "CHAVE", "GRAMA", "RARAS", "MESAS", "HARPA", "TREZE", "FRACO", "EPOXI", "GORDA", "MAGRA", "LEIGO", "HINDU", "ADIAR", "CAIXA", "VOCES", "MAGNA", "FOFAS", "CONES", "VARAL", "MIUDA", "UTEIS", "BOCAO", "TEIAS", "RUSSA", 
    "LUMEN", "RECEM", "FEMA", "ERRAR", "FREAR", "MACHO", "SERIE", "VIVER", "DAMAS", "RASOS", "FEMUR", "FEIOS", "SUTIA", "BUMBA", "ARDUO", "SUJAR", "GOLFE", "RACAO", "TRIOS", "CINZA", "BARCO", "RASTO", "MALTE", "MARTE", "ALMAS", "ARDER", "NAVAL", "TABUS", "VINTE", "NERVO", "RELER", "XAMPU", "LOTAR", "RELES", "ERROS", "ACEDA", "PONTO", "FREVO", "ERVAS", "COPAS", "PISAR", "FRUTO", "ALTER", "BEBER", "TREVO", "LESAO", "GRATA", "CERTA", "BOTAR", "TOCAR", "SUJOS", "AMADA", "CERNE", "VALSA", "MUDOS", "AUREA", "HEROI", "CIUME", "JUROS", "MARRA", "RASAS", "GRADO", "DEDOS", "MAMBO", "BRUTO", "REUSO", "DIETA", "TELAO", "DEPOR", "TACOS", "TURNE", "SOLAS", "TENRA", "MINOR", "LITRO", "DOMAR", "MIOPE", "GAFES", "POLIR", "DIZER", "MIDIA", "AUTOR", "BUCHA", "REMAR", "AVILA", "SERPA", "MIOLO", "LETAL", "PLENA", "FLUIR", "VIADO", "SEDES", "CALMA", "CENAS", "MEDIR", "ZIPER", "SELIM", "ISCAS", "PLENO", "OUTRA", 
    "LICAO", "PULHA", "MURAL", "FERAS", "TODAS", "AEREA", "TETRA", "INDEX", "OUTRO", "OFURO", "COCAR", "FURAR", "PORCO", "ADVIR", "BREVE", "EXODO", "VILAO", "LETRA", "VAPOR", "LIBRA", "AMIDO", "IMUNE", "PULAR", "LAGOA", "BOMBA", "TENGO", "HORAS", "CASAL", "INDIA", "SACAR", "MEROS", "TUNEL", "CUBAS", "RURAL", "MUDAR", "CHAPA", "USADA", "ATROZ", "ARROZ", "BOBOS", "ETNIA", "NENEM", "TORGA", "ORFAO", "CALDA", "MOCOS", "CHALE", "FUROS", "ONTEM", "COPIA", "RAIAR", "NOVAS", "CAUDA", "MEIGO", "VINHO", "JOIAS", "LAVAR", "BUFÃO", "AULAS", "LOJAS", "SAFRA", "ODIAR", "TCHAU", "MECHA", "CARNES", "PRUMO", "FOTOS", "JUNCO", "EICO", "TESAO", "REFEM", "MANTA", "RAIOS", "HUMOR", "SANAR", "DIQUE", "BERCO", "FLUOR", "BRITO", "SOSIA", "LOCAL", "GEMER", "SABER", "ELFOS", "VISAR"
   ]

// Função para escolher uma palavra aleatória a partir de uma lista fornecida (Com parâmetro)
const palavraAleatoria = (lista) => {
    const indice = Math.floor(Math.random() * lista.length)
    return lista[indice]
  };

const palavraSelecionada = palavraAleatoria(listadepalavras) // Função que guarda durante o jogo o valor escolhido pela função palavraAleatoria 

// Função que verifica se a palavra pertence a lista
const podeDigitar = (palavra) => {
    const palavraNormalizada = palavra.toUpperCase() //Garante que a palavra esteja em letras maiúsculas
    return listadepalavras.includes(palavraNormalizada) //Verifica se a palavra está na lista
}

// Função para verificar a palavra e mostrar o resultado no histórico
const verificarpalavra = () => {
    const inputPalpite = document.getElementById('inputPalpite').value.toUpperCase();

    if (inputPalpite.length !== 5) {
        alert("A palavra deve ter exatamente 5 letras!");
        return;
    }
    else if (!podeDigitar(inputPalpite)) {return alert("Palavra inválida. Não pertence a lista de verificação!")}
    
    // Verifica a palavra e exibe o resultado no histórico
    const resultado = compararLetra(palavraSelecionada, inputPalpite);
    mostrarResultado(resultado, inputPalpite);

    if (inputPalpite === palavraSelecionada) {
        alert("Parabéns, você acertou!");
        mostrarBotaoReiniciar();
    }

    document.getElementById('inputPalpite').value = ''; // Limpa o campo de input
};
/*Função para verificar as letras, dizendo se a letra em questão está certa (letra certa no lugar certo),
quase certa (letra está contida na palavra, porém posicionada no lugar errado ou não está nem na palavra*/

const compararLetra = (resposta, chute) => {
  return chute.split('').map((letra, i) => {
      if (letra === resposta[i]) {
          return { letter: letra, status: 'Posição Certa' };
      } else if (resposta.includes(letra)) {
          return { letter: letra, status: 'Está Presente' };
      } else {
          return { letter: letra, status: 'Não tem' };
      }
  });
};

/* Dado o valor em correta, quase e errada (nomes que eu defini no css), criar uma função para aplicar 
tais classes em cada uma das letras, lembrando das nuances de palavras que possuem letras repetidas e coisas desse tipo */


//Função Para que as respostas anteriores continuem na tela, para o jogador poder se basear e com cores
const mostrarResultado = (resultado, palpite) => {
  const resultadoDiv = document.getElementById('resultadoPalpite');
  const novaTentativa = document.createElement('div');
  novaTentativa.classList.add('tentativa');

  resultado.map((item, index) => {
      const letraSpan = document.createElement('span');
      letraSpan.textContent = palpite[index];

      if (item.status === 'Posição Certa') {
          letraSpan.classList.add('correta');
      } else if (item.status === 'Está Presente') {
          letraSpan.classList.add('quase');
      } else {
          letraSpan.classList.add('errada');
      }

      novaTentativa.appendChild(letraSpan);
  });

  resultadoDiv.appendChild(novaTentativa);
};

// Função para reiniciar o jogo
const reiniciarJogo = () => {
    palavraSelecionada // Escolhe uma nova palavra secreta
    document.getElementById("resultadoPalpite").innerHTML = ''; // Limpa os palpites anteriores
    document.getElementById("botaoReiniciar").style.display = 'none'; // Oculta o botão de reiniciar
    document.getElementById("enviarPalpite").style.display = 'inline'; // Reexibe o botão de enviar palpite
    document.getElementById("inputPalpite").style.display = 'inline'; // Reexibe o campo de input
    alert("O jogo foi reiniciado! Tente novamente.");
  };
// Função para recarregar a página
const recarregarPagina = () => {
  location.reload();  
}

const mostrarBotaoReiniciar = () => {
    document.getElementById("botaoReiniciar").style.display = 'inline'; // Exibe o botão de reiniciar
    document.getElementById("enviarPalpite").style.display = 'none';  // Oculta o botão de enviar palpite
    document.getElementById("inputPalpite").style.display = 'none';   // Oculta o campo de input
    document.getElementById("ensinar").style.display = 'none'; // Some com o botão de Tutorial 
    const botaoReiniciar = document.getElementById("botaoReiniciar");
    botaoReiniciar.addEventListener('click', recarregarPagina)  
}    
